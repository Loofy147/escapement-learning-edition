export type TransferAttemptState = { attempts: number; correct: number; lastAttemptAt: number };
export type RetrievalState = { dueAt: number; intervalDays: number; reviews: number; correctReviews: number; lastReviewedAt: number };
export type LearningEvent =
  | { id: string; kind: "transfer"; taskId: string; correct: boolean; occurredAt: number }
  | { id: string; kind: "retrieval"; activityId: string; correct: boolean; occurredAt: number }
  | { id: string; kind: "assessment"; stage: "pre" | "post" | "delayed"; score: number; occurredAt: number };
export type PersistedLearningState = { version: 2; transfer: Record<string, TransferAttemptState>; retrieval: Record<string, RetrievalState>; events: LearningEvent[] };

export const emptyLearningState: PersistedLearningState = { version: 2, transfer: {}, retrieval: {}, events: [] };

function eventId(kind: LearningEvent["kind"], key: string, now: number) { return `${kind}:${key}:${now}`; }

export function normalizeLearningState(input: unknown): PersistedLearningState {
  if (!input || typeof input !== "object") return emptyLearningState;
  const value = input as Partial<PersistedLearningState>;
  return { version: 2, transfer: { ...(value.transfer ?? {}) }, retrieval: { ...(value.retrieval ?? {}) }, events: Array.isArray(value.events) ? value.events.filter((event): event is LearningEvent => Boolean(event && typeof event === "object" && "id" in event && "kind" in event && "occurredAt" in event)) : [] };
}

export function mergeLearningStates(local: PersistedLearningState, remote: PersistedLearningState): PersistedLearningState {
  const events = Array.from(new Map([...((local as Partial<PersistedLearningState>).events ?? []), ...((remote as Partial<PersistedLearningState>).events ?? [])].map((event) => [event.id, event])).values()).sort((a, b) => a.occurredAt - b.occurredAt || a.id.localeCompare(b.id));
  const transfer: PersistedLearningState["transfer"] = { ...local.transfer };
  for (const [id, remoteState] of Object.entries(remote.transfer)) {
    const localState = transfer[id];
    if (!localState) { transfer[id] = remoteState; continue; }
    transfer[id] = { attempts: Math.max(localState.attempts, remoteState.attempts), correct: Math.max(localState.correct, remoteState.correct), lastAttemptAt: Math.max(localState.lastAttemptAt, remoteState.lastAttemptAt) };
  }
  const retrieval: PersistedLearningState["retrieval"] = { ...local.retrieval };
  for (const [id, remoteState] of Object.entries(remote.retrieval)) {
    const localState = retrieval[id];
    if (!localState) { retrieval[id] = remoteState; continue; }
    const newer = remoteState.lastReviewedAt > localState.lastReviewedAt ? remoteState : localState;
    retrieval[id] = { dueAt: newer.dueAt, intervalDays: newer.intervalDays, reviews: Math.max(localState.reviews, remoteState.reviews), correctReviews: Math.max(localState.correctReviews, remoteState.correctReviews), lastReviewedAt: newer.lastReviewedAt };
  }
  return { version: 2, transfer, retrieval, events };
}

export function recordTransferAttempt(state: PersistedLearningState, taskId: string, correct: boolean, now = Date.now()): PersistedLearningState {
  const current = state.transfer[taskId] ?? { attempts: 0, correct: 0, lastAttemptAt: 0 };
  const event: LearningEvent = { id: eventId("transfer", taskId, now), kind: "transfer", taskId, correct, occurredAt: now };
  return { ...state, transfer: { ...state.transfer, [taskId]: { attempts: current.attempts + 1, correct: current.correct + (correct ? 1 : 0), lastAttemptAt: now } }, events: [...(state.events ?? []), event] };
}

export function recordRetrievalReview(state: PersistedLearningState, activityId: string, correct: boolean, now = Date.now()): PersistedLearningState {
  const previous = state.retrieval[activityId];
  const intervalDays = correct ? Math.min(30, Math.max(1, Math.round((previous?.intervalDays ?? 0) * 2 || 1))) : 0;
  const event: LearningEvent = { id: eventId("retrieval", activityId, now), kind: "retrieval", activityId, correct, occurredAt: now };
  return { ...state, retrieval: { ...state.retrieval, [activityId]: { dueAt: intervalDays === 0 ? now : now + intervalDays * 86_400_000, intervalDays, reviews: (previous?.reviews ?? 0) + 1, correctReviews: (previous?.correctReviews ?? 0) + (correct ? 1 : 0), lastReviewedAt: now } }, events: [...(state.events ?? []), event] };
}

export function recordAssessment(state: PersistedLearningState, stage: "pre" | "post" | "delayed", score: number, now = Date.now()): PersistedLearningState {
  const event: LearningEvent = { id: eventId("assessment", stage, now), kind: "assessment", stage, score: Math.max(0, Math.min(1, score)), occurredAt: now };
  return { ...state, events: [...(state.events ?? []), event] };
}

export function assessmentHistory(state: PersistedLearningState) { return (state.events ?? []).filter((event): event is Extract<LearningEvent, { kind: "assessment" }> => event.kind === "assessment").sort((a, b) => a.occurredAt - b.occurredAt); }
