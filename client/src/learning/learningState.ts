export type TransferAttemptState = { attempts: number; correct: number; lastAttemptAt: number };
export type RetrievalState = { dueAt: number; intervalDays: number; reviews: number; correctReviews: number; lastReviewedAt: number };
export type PersistedLearningState = { version: 1; transfer: Record<string, TransferAttemptState>; retrieval: Record<string, RetrievalState> };

export const emptyLearningState: PersistedLearningState = { version: 1, transfer: {}, retrieval: {} };

export function normalizeLearningState(input: unknown): PersistedLearningState {
  if (!input || typeof input !== "object") return emptyLearningState;
  const value = input as Partial<PersistedLearningState>;
  return {
    version: 1,
    transfer: { ...(value.transfer ?? {}) },
    retrieval: { ...(value.retrieval ?? {}) },
  };
}

export function mergeLearningStates(local: PersistedLearningState, remote: PersistedLearningState): PersistedLearningState {
  const transfer: PersistedLearningState["transfer"] = { ...local.transfer };
  for (const [id, remoteState] of Object.entries(remote.transfer)) {
    const localState = transfer[id];
    if (!localState) { transfer[id] = remoteState; continue; }
    transfer[id] = {
      attempts: Math.max(localState.attempts, remoteState.attempts),
      correct: Math.max(localState.correct, remoteState.correct),
      lastAttemptAt: Math.max(localState.lastAttemptAt, remoteState.lastAttemptAt),
    };
  }

  const retrieval: PersistedLearningState["retrieval"] = { ...local.retrieval };
  for (const [id, remoteState] of Object.entries(remote.retrieval)) {
    const localState = retrieval[id];
    if (!localState) { retrieval[id] = remoteState; continue; }
    const newer = remoteState.lastReviewedAt > localState.lastReviewedAt ? remoteState : localState;
    retrieval[id] = {
      dueAt: newer.dueAt,
      intervalDays: newer.intervalDays,
      reviews: Math.max(localState.reviews, remoteState.reviews),
      correctReviews: Math.max(localState.correctReviews, remoteState.correctReviews),
      lastReviewedAt: newer.lastReviewedAt,
    };
  }
  return { version: 1, transfer, retrieval };
}

export function recordTransferAttempt(
  state: PersistedLearningState,
  taskId: string,
  correct: boolean,
  now = Date.now(),
): PersistedLearningState {
  const current = state.transfer[taskId] ?? { attempts: 0, correct: 0, lastAttemptAt: 0 };
  return {
    ...state,
    transfer: {
      ...state.transfer,
      [taskId]: { attempts: current.attempts + 1, correct: current.correct + (correct ? 1 : 0), lastAttemptAt: now },
    },
  };
}

export function recordRetrievalReview(
  state: PersistedLearningState,
  activityId: string,
  correct: boolean,
  now = Date.now(),
): PersistedLearningState {
  const previous = state.retrieval[activityId];
  const intervalDays = correct ? Math.min(30, Math.max(1, Math.round((previous?.intervalDays ?? 0) * 2 || 1))) : 0;
  const dueAt = intervalDays === 0 ? now : now + intervalDays * 86_400_000;
  return {
    ...state,
    retrieval: {
      ...state.retrieval,
      [activityId]: {
        dueAt,
        intervalDays,
        reviews: (previous?.reviews ?? 0) + 1,
        correctReviews: (previous?.correctReviews ?? 0) + (correct ? 1 : 0),
        lastReviewedAt: now,
      },
    },
  };
}
