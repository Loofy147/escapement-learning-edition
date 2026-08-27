import { describe, expect, it } from "vitest";
import { transferReadiness, transferTasks } from "./transfer";

describe("transfer tasks", () => {
  it("keeps novel-context tasks blocked until prerequisite evidence exists", () => {
    const progress = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", evidence: {} };
    expect(transferReadiness(transferTasks[0], progress).ready).toBe(false);
  });

  it("opens transfer when all required concepts have strong evidence", () => {
    const progress = {
      viewed: [], completed: [], attempts: { "ex-rate": 3, "ex-experiment": 3 }, mastered: [], current: "ch-18",
      evidence: { confidence: { "ex-rate": 1, "ex-experiment": 1 } },
    };
    const readiness = transferReadiness(transferTasks[0], progress);
    expect(readiness.ready).toBe(true);
    expect(readiness.prerequisiteScore).toBe(1);
  });
});
