import type { LearningEvent } from "./learningState";

export type ConceptLearningDelta = {
  conceptId: string;
  pre: number | null;
  post: number | null;
  delayed: number | null;
  postDelta: number | null;
  delayedDelta: number | null;
};

function assessmentEvents(events: LearningEvent[]) {
  return events.filter(
    (event): event is Extract<LearningEvent, { kind: "assessment" }> =>
      event.kind === "assessment",
  );
}

export function buildTemporalLearningReport(events: LearningEvent[]): ConceptLearningDelta[] {
  const byConcept: Record<string, { pre?: number; post?: number; delayed?: number }> = {};
  for (const event of assessmentEvents(events)) {
    for (const [conceptId, score] of Object.entries(event.conceptScores ?? {})) {
      const value = byConcept[conceptId] ?? {};
      value[event.stage] = score;
      byConcept[conceptId] = value;
    }
  }
  return Object.entries(byConcept).map(([conceptId, value]) => ({
    conceptId,
    pre: value.pre ?? null,
    post: value.post ?? null,
    delayed: value.delayed ?? null,
    postDelta: value.pre === undefined || value.post === undefined ? null : value.post - value.pre,
    delayedDelta: value.pre === undefined || value.delayed === undefined ? null : value.delayed - value.pre,
  }));
}

export function misconceptionTrend(events: LearningEvent[]) {
  const totals: Record<string, { pre: number; post: number; delayed: number }> = {};
  for (const event of assessmentEvents(events)) {
    for (const [conceptId, count] of Object.entries(event.misconceptionCounts ?? {})) {
      const value = totals[conceptId] ?? { pre: 0, post: 0, delayed: 0 };
      value[event.stage] += count;
      totals[conceptId] = value;
    }
  }
  return Object.entries(totals).map(([conceptId, value]) => ({
    conceptId,
    ...value,
    postDelta: value.post - value.pre,
    delayedDelta: value.delayed - value.pre,
  }));
}
