import { describe, expect, it } from "vitest";
import { gradeTransferTask, transferReadiness, transferTasks } from "./transfer";

describe("transfer tasks", () => {
  const empty = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", evidence: {} };

  it("keeps novel-context tasks blocked until prerequisite evidence exists", () => {
    expect(transferReadiness(transferTasks[0], empty).ready).toBe(false);
  });

  it("opens transfer when all required concepts have strong evidence", () => {
    const progress = { ...empty, attempts: { "ex-rate": 3, "ex-experiment": 3 }, evidence: { confidence: { "ex-rate": 1, "ex-experiment": 1 } } };
    const readiness = transferReadiness(transferTasks[0], progress);
    expect(readiness.ready).toBe(true);
    expect(readiness.prerequisiteScore).toBe(1);
  });

  it("deterministically grades a selected transfer option", () => {
    const task = transferTasks[0];
    expect(gradeTransferTask(task, task.correctOption).correct).toBe(true);
    expect(gradeTransferTask(task, task.correctOption + 1).correct).toBe(false);
  });
});
