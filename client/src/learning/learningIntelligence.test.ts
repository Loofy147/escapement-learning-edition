import { describe, expect, it } from "vitest";
import {
  activityLearningState,
  buildConceptLearningStates,
  recommendNextLearningAction,
  type LearningProgressInput,
} from "./learningIntelligence";

const activities = [
  { id: "a-rate", chapterId: "ch-01", conceptIds: ["rate"] },
  { id: "a-position", chapterId: "ch-01", conceptIds: ["position"] },
  { id: "a-escapement", chapterId: "ch-05", conceptIds: ["escapement"] },
];

const concepts = [
  { id: "rate", label: "Rate", chapterId: "ch-01" },
  { id: "position", label: "Position", chapterId: "ch-01" },
  { id: "escapement", label: "Escapement", chapterId: "ch-05" },
];

const emptyProgress: LearningProgressInput = {
  viewed: [],
  completed: [],
  attempts: {},
  mastered: [],
  current: "ch-01",
  evidence: {},
};

describe("learning intelligence v1", () => {
  it("does not claim mastery without evidence", () => {
    const state = activityLearningState("a-rate", emptyProgress);
    expect(state.band).toBe("unseen");
    expect(state.score).toBe(0);
    expect(state.needsRemediation).toBe(false);
  });

  it("penalizes repeated misconceptions and produces a remediation signal", () => {
    const progress: LearningProgressInput = {
      ...emptyProgress,
      attempts: { "a-rate": 3 },
      evidence: {
        misconception: { "a-rate": 2 },
        hintUse: { "a-rate": 1 },
        retries: { "a-rate": 1 },
        sourceReturns: { "a-rate": 1 },
        confidence: { "a-rate": 0 },
      },
    };
    const state = activityLearningState("a-rate", progress);
    expect(state.needsRemediation).toBe(true);
    expect(state.band).toBe("introduced");
    expect(state.score).toBeLessThan(0.45);
  });

  it("requires repeated clean evidence for mastery", () => {
    const progress: LearningProgressInput = {
      ...emptyProgress,
      attempts: { "a-rate": 4 },
      evidence: { confidence: { "a-rate": 1 } },
    };
    const state = activityLearningState("a-rate", progress);
    expect(state.band).toBe("mastered");
    expect(state.score).toBeGreaterThanOrEqual(0.85);
  });

  it("aggregates activity evidence into concept states", () => {
    const progress: LearningProgressInput = {
      ...emptyProgress,
      attempts: { "a-rate": 3 },
      evidence: { confidence: { "a-rate": 1 } },
    };
    const states = buildConceptLearningStates(concepts, activities, progress);
    expect(states.find((state) => state.conceptId === "rate")?.band).toBe("mastered");
    expect(states.find((state) => state.conceptId === "position")?.band).toBe("unseen");
  });

  it("prioritizes remediation before advancement", () => {
    const progress: LearningProgressInput = {
      ...emptyProgress,
      viewed: ["ch-01"],
      attempts: { "a-rate": 2 },
      evidence: { misconception: { "a-rate": 1 }, sourceReturns: { "a-rate": 1 } },
    };
    const action = recommendNextLearningAction(concepts, activities, progress);
    expect(action.kind).toBe("remediate");
    expect(action.activityId).toBe("a-rate");
  });

  it("retrieves unresolved current-chapter concepts when remediation is absent", () => {
    const progress: LearningProgressInput = {
      ...emptyProgress,
      viewed: ["ch-01"],
      attempts: { "a-rate": 1 },
      evidence: { confidence: { "a-rate": 1 } },
    };
    const action = recommendNextLearningAction(concepts, activities, progress);
    expect(action.kind).toBe("retrieve");
    expect(action.chapterId).toBe("ch-01");
  });
});
