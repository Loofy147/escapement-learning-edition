import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, learnerProgress, InsertLearnerProgress } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getLearnerProgress(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const rows = await db.select().from(learnerProgress).where(eq(learnerProgress.userId, userId)).limit(1);
  return rows[0];
}

export async function upsertLearnerProgress(input: InsertLearnerProgress) {
  const db = await getDb();
  if (!db) return undefined;
  const existing = await getLearnerProgress(input.userId);
  let state = input.state;
  try {
    const incoming = JSON.parse(input.state);
    const previous = existing?.state ? JSON.parse(existing.state) : {};
    if (previous && typeof previous === "object" && previous.learningState && incoming && typeof incoming === "object" && !incoming.learningState) {
      incoming.learningState = previous.learningState;
      state = JSON.stringify(incoming);
    }
  } catch {
    // Preserve legacy behavior when a malformed/opaque snapshot is supplied.
  }
  await db.insert(learnerProgress).values({ ...input, state }).onDuplicateKeyUpdate({ set: { state, updatedAt: new Date() } });
  return getLearnerProgress(input.userId);
}

export async function getLearnerLearningState(userId: number) {
  const row = await getLearnerProgress(userId);
  if (!row) return undefined;
  try {
    const parsed = JSON.parse(row.state);
    return parsed && typeof parsed === "object" ? parsed.learningState ?? null : null;
  } catch {
    return null;
  }
}

export async function upsertLearnerLearningState(userId: number, learningState: string) {
  const existing = await getLearnerProgress(userId);
  let state = "{}";
  try {
    const current = existing?.state ? JSON.parse(existing.state) : {};
    const nextLearning = JSON.parse(learningState);
    state = JSON.stringify({ ...(current && typeof current === "object" ? current : {}), learningState: nextLearning });
  } catch {
    throw new Error("Learning state must be valid JSON");
  }
  return upsertLearnerProgress({ userId, state });
}
