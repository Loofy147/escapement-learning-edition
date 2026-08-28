import { describe, expect, it } from "vitest";
import { buildTemporalLearningReport, misconceptionTrend } from "./temporalReport";
import type { LearningEvent } from "./learningState";

describe("temporal learning report", () => {
  const events: LearningEvent[] = [
    { id:"a1", kind:"assessment", stage:"pre", score:.33, conceptScores:{rate:0,position:1/3}, misconceptionCounts:{rate:1,position:0}, occurredAt:1 },
    { id:"a2", kind:"assessment", stage:"post", score:.83, conceptScores:{rate:1,position:2/3}, misconceptionCounts:{rate:0,position:1}, occurredAt:2 },
    { id:"a3", kind:"assessment", stage:"delayed", score:.67, conceptScores:{rate:1,position:1/3}, misconceptionCounts:{rate:0,position:1}, occurredAt:3 },
  ];

  it("computes concept-level pre/post/delayed deltas", () => {
    const rows=buildTemporalLearningReport(events);
    expect(rows.find(r=>r.conceptId==="rate")).toEqual({conceptId:"rate",pre:0,post:1,delayed:1,postDelta:1,delayedDelta:1});
  });

  it("computes misconception trend by concept", () => {
    const rows=misconceptionTrend(events);
    const rate=rows.find(r=>r.conceptId==="rate")!;
    expect(rate.pre).toBe(1);
    expect(rate.post).toBe(0);
    expect(rate.delayed).toBe(0);
    expect(rate.postDelta).toBe(-1);
  });
});
