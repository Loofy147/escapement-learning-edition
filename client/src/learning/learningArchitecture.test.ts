import { describe, expect, it } from "vitest";
import { concepts, exercises } from "../content/model";
import { buildConceptGraph, buildMisconceptionState } from "./conceptGraph";
import { validateLearningAnnotations } from "./learningAnnotations";
import { scheduleReview } from "./spacing";
import { transferReadiness, transferTasks } from "./transfer";

describe("learning architecture invariants", () => {
  it("keeps annotations and concept graph internally consistent", () => {
    expect(validateLearningAnnotations(exercises, concepts)).toBe(true);
    const graph = buildConceptGraph(concepts, exercises);
    expect(graph).toHaveLength(concepts.length);
    expect(graph.every((node) => node.misconceptionIds.length > 0 && node.transferTasks.length > 0)).toBe(true);
  });

  it("exposes misconception IDs as stable graph state", () => {
    const graph = buildConceptGraph(concepts, exercises);
    const states = buildMisconceptionState(graph, { "ex-rate": 2 });
    expect(states.find((state) => state.id === "M-PRECISION-001")?.occurrences).toBe(2);
  });

  it("requires prerequisite concept evidence before transfer", () => {
    const empty = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", evidence: {} };
    expect(transferTasks.every((task) => !transferReadiness(task, empty).ready)).toBe(true);
  });

  it("uses clean repeated evidence to move a review into a longer interval", () => {
    const progress = { viewed: [], completed: [], attempts: { "ex-rate": 5 }, mastered: [], current: "ch-01", evidence: { confidence: { "ex-rate": 1 } } };
    expect(scheduleReview("ex-rate", progress).intervalDays).toBe(14);
  });
});
