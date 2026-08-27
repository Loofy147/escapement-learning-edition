import { describe, expect, it, vi } from "vitest";

vi.mock("./db", () => ({
  getLearnerProgress: vi.fn(async () => ({ state: JSON.stringify({ viewed: ["ch-09"], completed: ["ch-08"], attempts: { "ex-rate": 2 }, mastered: ["ex-rate"], current: "ch-09", positions: { "ch-09": { scrollY: 640, sectionId: "ch-09-section-2" } } }) })),
  upsertLearnerProgress: vi.fn(async (input: { userId: number; state: string }) => ({ id: 1, ...input, updatedAt: new Date() })),
}));
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { chapters, exercises, feedbackLibrary, sourceAnchorFor } from "../client/src/content/model";
import { bookConfig } from "../client/src/content/book.config";
import { gradeExercise, mergeProgressStates, restoreSectionPosition } from "../client/src/content/model";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const publicContext: TrpcContext = {
  user: null,
  req: { protocol: "https", headers: {} } as TrpcContext["req"],
  res: {} as TrpcContext["res"],
};

describe("progress access and reusable content contracts", () => {
  it("protects progress reads from anonymous callers", async () => {
    const caller = appRouter.createCaller(publicContext);
    await expect(caller.progress.get()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("keeps the expanded practice library attached to canonical chapters", () => {
    expect(exercises.length).toBeGreaterThanOrEqual(chapters.length);
    expect(new Set(exercises.map((activity) => activity.chapterId)).size).toBe(chapters.length);
    expect(exercises.every((activity) => chapters.some((chapter) => chapter.id === activity.chapterId))).toBe(true);
    expect(exercises.every((activity) => activity.prompt && activity.explanation && activity.hint)).toBe(true);
    for (const activity of exercises) {
      const evaluated = gradeExercise(activity, activity.type === "experiment" ? 5 : activity.answer ?? null);
      expect(evaluated.correct).toBe(true);
      expect(evaluated.explanation.length).toBeGreaterThan(10);
      expect(feedbackLibrary.some((record) => record.activityId === activity.id)).toBe(true);
      expect(sourceAnchorFor(activity.id)).toMatch(new RegExp(`^${activity.chapterId}-section-`));
    }
  });

  it("exposes a replaceable book configuration contract", () => {
    expect(bookConfig.id).toBe("escapement");
    expect(bookConfig.sourcePath).toContain("book.md");
    expect(bookConfig.chapterCount).toBe(chapters.length);
  });

  it("grades the expanded chapter-specific activities", () => {
    for (const activity of exercises.slice(4)) {
      expect(gradeExercise(activity, activity.answer ?? null).correct).toBe(true);
    }
  });

  it("ships formal reusable program contracts", () => {
    const schema = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "programs/interactive-book-learning-edition/templates/content.schema.json"), "utf8"));
    expect(schema.required).toEqual(expect.arrayContaining(["book", "chapters", "concepts", "activities"]));
    expect(fs.existsSync(path.resolve(process.cwd(), "programs/interactive-book-learning-edition/templates/prompts.md"))).toBe(true);
  });

  it("rejects an invalid reusable package fixture", () => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "book-learning-invalid-"));
    fs.writeFileSync(path.join(fixture, "book.config.json"), JSON.stringify({ id: "replace-with-book-id", title: "", author: "", language: "en", sourceVersion: "" }));
    expect(() => execFileSync(process.execPath, [path.resolve(process.cwd(), "programs/interactive-book-learning-edition/scripts/validate-book-package.mjs"), fixture], { encoding: "utf8", stdio: "pipe" })).toThrow();
  });

  it("executes the reusable package validator against a valid fixture", () => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "book-learning-"));
    fs.writeFileSync(path.join(fixture, "book.config.json"), JSON.stringify({ id: "sample", title: "Sample", author: "Author", language: "en", sourceVersion: "1" }));
    for (const file of ["chapters.json", "concepts.json", "activities.json"]) fs.writeFileSync(path.join(fixture, file), "[{\"id\":\"sample-1\"}]");
    const script = path.resolve(process.cwd(), "programs/interactive-book-learning-edition/scripts/validate-book-package.mjs");
    expect(execFileSync(process.execPath, [script, fixture], { encoding: "utf8" })).toContain("Book package ready");
  });

  it("reads and merges an authenticated remote progress snapshot", async () => {
    const userContext: TrpcContext = { ...publicContext, user: { id: 99, openId: "progress-test", email: null, name: "Test", loginMethod: "test", role: "user", createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() } };
    const caller = appRouter.createCaller(userContext);
    const remote = await caller.progress.get();
    const merged = mergeProgressStates({ viewed: ["ch-01"], completed: [], attempts: {}, mastered: [], current: "ch-01", positions: {} }, JSON.parse(remote?.state || "{}"));
    expect(merged.viewed).toContain("ch-09");
    expect(merged.completed).toContain("ch-08");
    expect(restoreSectionPosition(merged, "ch-09")).toBe("ch-09-section-2");
  });

  it("persists an authenticated progress snapshot through the protected upsert", async () => {
    const userContext: TrpcContext = { ...publicContext, user: { id: 99, openId: "progress-test", email: null, name: "Test", loginMethod: "test", role: "user", createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() } };
    const caller = appRouter.createCaller(userContext);
    const result = await caller.progress.upsert({ state: JSON.stringify({ viewed: ["ch-04"], completed: [], attempts: {}, mastered: [], current: "ch-04", positions: {} }) });
    expect(result?.userId).toBe(99);
  });

  it("rejects oversized authenticated progress payloads before persistence", async () => {
    const userContext: TrpcContext = { ...publicContext, user: { id: 99, openId: "progress-test", email: null, name: "Test", loginMethod: "test", role: "user", createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() } };
    const caller = appRouter.createCaller(userContext);
    await expect(caller.progress.upsert({ state: "x".repeat(200001) })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
