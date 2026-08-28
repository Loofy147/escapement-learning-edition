import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, uniqueIndex } from "drizzle-orm/mysql-core";

/** Core user table backing auth flow. */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const learnerProgress = mysqlTable("learner_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  state: text("state").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type LearnerProgress = typeof learnerProgress.$inferSelect;
export type InsertLearnerProgress = typeof learnerProgress.$inferInsert;

export const learnerLearningEvents = mysqlTable("learner_learning_events", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  eventId: varchar("eventId", { length: 191 }).notNull(),
  kind: varchar("kind", { length: 32 }).notNull(),
  occurredAt: timestamp("occurredAt").notNull(),
  payload: text("payload").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  userEventUnique: uniqueIndex("learner_learning_events_user_event_uq").on(table.userId, table.eventId),
}));

export type LearnerLearningEvent = typeof learnerLearningEvents.$inferSelect;
export type InsertLearnerLearningEvent = typeof learnerLearningEvents.$inferInsert;
