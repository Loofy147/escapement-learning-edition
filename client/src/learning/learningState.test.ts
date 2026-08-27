import { describe, expect, it } from "vitest";
import { assessmentHistory, emptyLearningState, mergeLearningStates, recordAssessment, recordRetrievalReview, recordTransferAttempt } from "./learningState";

describe("persisted learning state", () => {
  it("records a graded transfer attempt", () => {
    const next = recordTransferAttempt(emptyLearningState, "t1", true, 1000);
    expect(next.transfer.t1).toEqual({ attempts: 1, correct: 1, lastAttemptAt: 1000 });
  });

  it("schedules correct retrieval into the future and failure immediately", () => {
    const first = recordRetrievalReview(emptyLearningState, "a1", true, 1000);
    expect(first.retrieval.a1.intervalDays).toBe(1);
    expect(first.retrieval.a1.dueAt).toBe(1000 + 86_400_000);
    const second = recordRetrievalReview(first, "a1", false, 2000);
    expect(second.retrieval.a1.intervalDays).toBe(0);
    expect(second.retrieval.a1.dueAt).toBe(2000);
  });

  it("records an ordered temporal event history for learning evidence", () => {
    const transfer = recordTransferAttempt(emptyLearningState, "t1", true, 1000);
    const retrieval = recordRetrievalReview(transfer, "a1", false, 2000);
    const assessed = recordAssessment(retrieval, "pre", 0.5, 3000);
    expect(assessed.events.map((event) => event.kind)).toEqual(["transfer", "retrieval", "assessment"]);
    expect(assessmentHistory(assessed)[0]).toMatchObject({ stage: "pre", score: 0.5, occurredAt: 3000 });
  });

  it("merges temporal events without duplicating the same event id", () => {
    const local = recordTransferAttempt(emptyLearningState, "t1", true, 1000);
    const merged = mergeLearningStates(local, local);
    expect(merged.events).toHaveLength(1);
    expect(merged.events[0].id).toBe("transfer:t1:1000");
  });

  it("merges transfer and retrieval state without resetting newer scheduling", () => {
    const local = {
      version: 1 as const,
      transfer: { t1: { attempts: 2, correct: 1, lastAttemptAt: 10 } },
      retrieval: { a1: { dueAt: 100, intervalDays: 1, reviews: 2, correctReviews: 1, lastReviewedAt: 100 } },
    };
    const remote = {
      version: 1 as const,
      transfer: { t1: { attempts: 3, correct: 2, lastAttemptAt: 20 } },
      retrieval: { a1: { dueAt: 300, intervalDays: 5, reviews: 3, correctReviews: 2, lastReviewedAt: 300 } },
    };
    const merged = mergeLearningStates(local, remote);
    expect(merged.transfer.t1).toEqual({ attempts: 3, correct: 2, lastAttemptAt: 20 });
    expect(merged.retrieval.a1).toEqual({ dueAt: 300, intervalDays: 5, reviews: 3, correctReviews: 2, lastReviewedAt: 300 });
  });
});
