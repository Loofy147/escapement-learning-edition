import { describe, expect, it } from "vitest";
import { gradeTransferReasoning, transferTasks } from "./transfer";

describe("transfer reasoning", () => {
  it("accepts a response containing the required evidence signals", () => {
    const task = transferTasks.find((item) => item.id === "transfer-certification-scope")!;
    const result = gradeTransferReasoning(task, "The movement passed the test, but finished watch performance needs separate evidence.");
    expect(result.correct).toBe(true);
    expect(result.score).toBe(1);
  });

  it("rejects a response that omits too many rubric signals", () => {
    const task = transferTasks.find((item) => item.id === "transfer-certification-scope")!;
    const result = gradeTransferReasoning(task, "The certificate is good.");
    expect(result.correct).toBe(false);
    expect(result.score).toBeLessThan(0.75);
  });
});
