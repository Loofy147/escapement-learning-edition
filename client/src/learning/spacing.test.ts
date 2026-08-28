import { describe, expect, it } from "vitest";
import { scheduleReview } from "./spacing";

describe("spaced retrieval", () => {
  it("prioritizes unseen activities immediately", () => {
    const progress = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", evidence: {} };
    expect(scheduleReview("ex-rate", progress)).toMatchObject({ priority: "now", intervalDays: 0 });
  });

  it("forces immediate review after a misconception", () => {
    const progress = { viewed: [], completed: [], attempts: { "ex-rate": 3 }, mastered: [], current: "ch-01", evidence: { misconception: { "ex-rate": 1 }, confidence: { "ex-rate": 1 } } };
    expect(scheduleReview("ex-rate", progress)).toMatchObject({ priority: "now", intervalDays: 0 });
  });

  it("spaces repeated clean evidence", () => {
    const progress = { viewed: [], completed: [], attempts: { "ex-rate": 5 }, mastered: [], current: "ch-01", evidence: { confidence: { "ex-rate": 1 } } };
    expect(scheduleReview("ex-rate", progress)).toMatchObject({ priority: "later", intervalDays: 14 });
  });
});
