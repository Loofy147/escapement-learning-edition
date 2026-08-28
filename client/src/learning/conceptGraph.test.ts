import { describe, expect, it } from "vitest";
import { concepts, exercises } from "../content/model";
import { buildConceptGraph, buildMisconceptionState, nextBestActionFromGraph } from "./conceptGraph";

describe("concept graph foundation", () => {
  const graph = buildConceptGraph(concepts, exercises);

  it("creates a node for every canonical concept with explicit graph metadata", () => {
    expect(graph).toHaveLength(concepts.length);
    expect(graph.every((node) => node.applications.length > 0 && node.transferTasks.length > 0)).toBe(true);
    expect(graph.every((node) => node.misconceptionIds.every((id) => /^M-[A-Z0-9-]+$/.test(id)))).toBe(true);
  });

  it("keeps all prerequisite and related references inside the canonical concept catalog", () => {
    const ids = new Set(concepts.map((concept) => concept.id));
    expect(graph.every((node) => [...node.prerequisites, ...node.relatedConcepts].every((id) => ids.has(id)))).toBe(true);
  });

  it("derives activity membership only from the explicit mapping", () => {
    expect(graph.find((node) => node.id === "rate")?.activityIds).toContain("ex-rate");
    expect(graph.find((node) => node.id === "rate")?.activityIds).not.toContain("ex-sequence");
  });

  it("turns activity misconception evidence into concept-level remediation state", () => {
    const states = buildMisconceptionState(graph, { "ex-rate": 2 });
    expect(states.find((state) => state.conceptId === "rate")).toMatchObject({ occurrences: 2, needsRemediation: true });
    expect(nextBestActionFromGraph(graph, { "ex-rate": 2 })).toMatchObject({ kind: "remediate", conceptId: "rate", activityId: "ex-rate" });
  });

  it("chooses retrieval when there is no misconception evidence", () => {
    expect(nextBestActionFromGraph(graph, {})).toMatchObject({ kind: "retrieve" });
  });
});
