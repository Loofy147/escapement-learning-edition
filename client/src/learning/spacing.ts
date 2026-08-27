import type { LearningProgressInput } from "./learningIntelligence";
import { activityAnnotations } from "./learningAnnotations";

export type ReviewPriority = "now" | "soon" | "later";

export type SpacedReview = {
  activityId: string;
  priority: ReviewPriority;
  intervalDays: number;
  reason: string;
};

function activitySignal(activityId: string, progress: LearningProgressInput) {
  const attempts = progress.attempts?.[activityId] ?? 0;
  const evidence = progress.evidence ?? {};
  const misconceptions = evidence.misconception?.[activityId] ?? 0;
  const hints = evidence.hintUse?.[activityId] ?? 0;
  const retries = evidence.retries?.[activityId] ?? 0;
  const confidence = evidence.confidence?.[activityId] ?? 0;
  return { attempts, misconceptions, hints, retries, confidence };
}

export function scheduleReview(activityId: string, progress: LearningProgressInput): SpacedReview {
  const { attempts, misconceptions, hints, retries, confidence } = activitySignal(activityId, progress);
  if (attempts === 0) return { activityId, priority: "now", intervalDays: 0, reason: "No retrieval evidence exists yet." };
  if (misconceptions > 0) return { activityId, priority: "now", intervalDays: 0, reason: "A misconception is recorded; retrieve again after remediation." };

  const cleanAttempts = Math.max(0, attempts - hints * 0.5 - retries * 0.75);
  const intervalDays = confidence >= 1 && cleanAttempts >= 5 ? 14 : confidence >= 1 && cleanAttempts >= 3 ? 5 : 1;
  const priority: ReviewPriority = intervalDays === 14 ? "later" : intervalDays === 5 ? "soon" : "now";
  return {
    activityId,
    priority,
    intervalDays,
    reason: priority === "later"
      ? "Repeated clean evidence supports a longer retrieval interval."
      : priority === "soon"
        ? "Recent success supports spacing, but the evidence is not yet deep enough for a long interval."
        : "Use another near-term retrieval to strengthen the signal.",
  };
}

export function scheduleConceptReviews(activityIds: string[], progress: LearningProgressInput) {
  return activityIds
    .filter((id) => Boolean(activityAnnotations[id]))
    .map((id) => scheduleReview(id, progress))
    .sort((a, b) => a.intervalDays - b.intervalDays || a.activityId.localeCompare(b.activityId));
}
