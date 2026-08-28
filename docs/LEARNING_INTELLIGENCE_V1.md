# Learning Intelligence v1

## Purpose

Learning Intelligence v1 turns the existing persisted learner evidence into a deterministic learner model. It is intentionally conservative and auditable. It does not use an LLM to grade answers and it does not claim psychometric validity.

## State hierarchy

Activity state is represented by a continuous score and a qualitative band:

- `unseen`: no recorded attempt
- `introduced`: learner has interacted, but evidence is weak or remediation is still indicated
- `developing`: partial evidence of understanding
- `stable`: repeated evidence with limited remediation signals
- `mastered`: repeated clean evidence meeting the configured heuristic threshold

The current heuristic requires at least three attempts for activity-level `mastered`, a score of at least `0.85`, and no active remediation signal.

## Evidence used

The model consumes the hardened progress evidence already persisted by the application:

- attempts
- misconception count
- hint usage
- retries
- source returns
- confidence

The scoring function intentionally penalizes repeated misconceptions, source returns, retries, and heavy hint dependence.

## Concept aggregation

Concepts may declare explicit `conceptIds` on activities. Until the full catalog is migrated to explicit links, the V1 adapter falls back to chapter membership. This fallback is deliberately documented because chapter membership is broader than a true concept-to-activity mapping.

## Next-best-action policy

The deterministic priority order is:

1. `remediate` when unresolved evidence exists.
2. `retrieve` for an unresolved concept in the current chapter.
3. `advance` when current evidence is stable enough and an unseen chapter exists.
4. `introduce` for the first available unresolved concept when no stronger action exists.
5. `transfer` when core activities are stable and the system needs a novel-context assessment.

The `transfer` action is a policy signal in V1. The current activity catalog does not yet contain a dedicated transfer exercise type in the runtime model.

## What V1 does not claim

- It is not a calibrated psychometric model.
- `confidence` is currently an application evidence signal, not a validated probability of correctness.
- Mastery is not durable retention; no delayed retrieval measurement exists yet.
- Concept mastery is not transfer mastery.
- Recommendation quality has not yet been validated with learner outcome data.

## Next implementation layer

V2 should add explicit concept links for every activity, misconception identifiers, transfer activities, spaced-retrieval scheduling, temporal attempt history, and outcome-based calibration using pre/post/delayed assessments.
