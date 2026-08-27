export type MasteryBand = "unseen" | "introduced" | "developing" | "stable" | "mastered";

export type EvidenceSnapshot = {
  attempts: number;
  misconceptions: number;
  hintUse: number;
  retries: number;
  sourceReturns: number;
  confidence: number;
};

export type ActivityLearningState = EvidenceSnapshot & {
  activityId: string;
  score: number;
  band: MasteryBand;
  needsRemediation: boolean;
};

export type ConceptInput = {
  id: string;
  label: string;
  chapterId: string;
};

export type ActivityInput = {
  id: string;
  chapterId: string;
  conceptIds?: string[];
};

export type LearningProgressInput = {
  viewed: string[];
  completed: string[];
  attempts: Record<string, number>;
  mastered: string[];
  current: string;
  evidence?: {
    misconception?: Record<string, number>;
    hintUse?: Record<string, number>;
    retries?: Record<string, number>;
    sourceReturns?: Record<string, number>;
    confidence?: Record<string, number>;
  };
};

export type ConceptLearningState = {
  conceptId: string;
  label: string;
  chapterId: string;
  score: number;
  band: MasteryBand;
  supportingActivities: string[];
  remediationActivities: string[];
};

export type NextLearningAction = {
  kind: "introduce" | "retrieve" | "remediate" | "transfer" | "advance";
  activityId?: string;
  chapterId: string;
  reason: string;
  priority: number;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function evidenceForActivity(
  activityId: string,
  progress: LearningProgressInput,
): EvidenceSnapshot {
  const evidence = progress.evidence ?? {};
  const attempts = Math.max(0, progress.attempts?.[activityId] ?? 0);
  const misconceptions = Math.max(0, evidence.misconception?.[activityId] ?? 0);
  const hintUse = Math.max(0, evidence.hintUse?.[activityId] ?? 0);
  const retries = Math.max(0, evidence.retries?.[activityId] ?? 0);
  const sourceReturns = Math.max(0, evidence.sourceReturns?.[activityId] ?? 0);
  const confidence = clamp(evidence.confidence?.[activityId] ?? 0);

  return { attempts, misconceptions, hintUse, retries, sourceReturns, confidence };
}

/**
 * Conservative, deterministic estimate. This is an evidence heuristic, not a
 * psychometric mastery claim. It intentionally requires repeated success and
 * penalizes unresolved misconception/hint dependence.
 */
export function activityLearningState(
  activityId: string,
  progress: LearningProgressInput,
): ActivityLearningState {
  const evidence = evidenceForActivity(activityId, progress);
  if (evidence.attempts === 0) {
    return { activityId, ...evidence, score: 0, band: "unseen", needsRemediation: false };
  }

  const successRate = clamp(
    (evidence.attempts - Math.min(evidence.attempts, evidence.misconceptions)) /
      evidence.attempts,
  );
  const repetition = clamp(evidence.attempts / 3);
  const hintDependence = clamp(evidence.hintUse / Math.max(1, evidence.attempts));
  const remediationSignal = clamp(
    (evidence.misconceptions + evidence.sourceReturns + evidence.retries) / 4,
  );

  const score = clamp(
    0.5 * successRate +
      0.2 * repetition +
      0.2 * evidence.confidence +
      0.1 * (1 - hintDependence) -
      0.2 * remediationSignal,
  );

  const needsRemediation =
    evidence.misconceptions > 0 || evidence.sourceReturns > 0 || score < 0.55;

  const band: MasteryBand =
    score >= 0.85 && evidence.attempts >= 3 && !needsRemediation
      ? "mastered"
      : score >= 0.7
        ? "stable"
        : score >= 0.45
          ? "developing"
          : "introduced";

  return { activityId, ...evidence, score, band, needsRemediation };
}

function defaultConceptActivityIds(
  concept: ConceptInput,
  activities: ActivityInput[],
) {
  return activities
    .filter((activity) => activity.conceptIds?.includes(concept.id) || activity.chapterId === concept.chapterId)
    .map((activity) => activity.id);
}

export function buildConceptLearningStates(
  concepts: ConceptInput[],
  activities: ActivityInput[],
  progress: LearningProgressInput,
): ConceptLearningState[] {
  return concepts.map((concept) => {
    const activityIds = defaultConceptActivityIds(concept, activities);
    const states = activityIds.map((id) => activityLearningState(id, progress));
    const attempted = states.filter((state) => state.attempts > 0);
    const score = attempted.length === 0
      ? 0
      : attempted.reduce((sum, state) => sum + state.score, 0) / attempted.length;

    const band: MasteryBand =
      attempted.length === 0
        ? "unseen"
        : score >= 0.85 && attempted.length >= Math.min(2, activityIds.length)
          ? "mastered"
          : score >= 0.7
            ? "stable"
            : score >= 0.45
              ? "developing"
              : "introduced";

    return {
      conceptId: concept.id,
      label: concept.label,
      chapterId: concept.chapterId,
      score,
      band,
      supportingActivities: activityIds,
      remediationActivities: states.filter((state) => state.needsRemediation).map((state) => state.activityId),
    };
  });
}

export function recommendNextLearningAction(
  concepts: ConceptInput[],
  activities: ActivityInput[],
  progress: LearningProgressInput,
): NextLearningAction {
  const conceptStates = buildConceptLearningStates(concepts, activities, progress);
  const currentChapter = progress.current || "ch-01";

  const remediation = conceptStates
    .flatMap((concept) => concept.remediationActivities.map((activityId) => ({ concept, activityId })))
    .map(({ concept, activityId }) => {
      const state = activityLearningState(activityId, progress);
      return {
        kind: "remediate" as const,
        activityId,
        chapterId: concept.chapterId,
        reason: `${concept.label} shows unresolved learning evidence; revisit the activity before advancing.`,
        priority: 1.0 - state.score,
      };
    })
    .sort((a, b) => b.priority - a.priority)[0];

  if (remediation) return remediation;

  const retrieval = conceptStates
    .filter((concept) => concept.chapterId === currentChapter && concept.band !== "mastered")
    .flatMap((concept) => concept.supportingActivities.map((activityId) => ({ concept, activityId })))
    .map(({ concept, activityId }) => ({
      kind: "retrieve" as const,
      activityId,
      chapterId: concept.chapterId,
      reason: `Retrieve ${concept.label} before introducing another idea.`,
      priority: 1 - conceptStates.find((item) => item.conceptId === concept.id)!.score,
    }))
    .sort((a, b) => b.priority - a.priority)[0];

  if (retrieval) return retrieval;

  const nextChapter = activities.find((activity) => activity.chapterId !== currentChapter && !progress.viewed.includes(activity.chapterId))?.chapterId;
  if (nextChapter) {
    return {
      kind: "advance",
      chapterId: nextChapter,
      reason: "Current chapter evidence is stable enough to introduce the next chapter.",
      priority: 0.5,
    };
  }

  const fallbackConcept = conceptStates.find((concept) => concept.band !== "mastered");
  if (fallbackConcept) {
    return {
      kind: "introduce",
      activityId: fallbackConcept.supportingActivities[0],
      chapterId: fallbackConcept.chapterId,
      reason: `Introduce ${fallbackConcept.label}; there is not yet enough learner evidence.`,
      priority: 0.25,
    };
  }

  return {
    kind: "transfer",
    chapterId: currentChapter,
    reason: "Core activities are stable; the next step should test transfer in a novel context.",
    priority: 0.1,
  };
}
