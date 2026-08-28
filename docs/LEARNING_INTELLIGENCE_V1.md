# Learning Intelligence v1

## Purpose

Learning Intelligence v1 turns persisted learner evidence into a deterministic learner model. It is intentionally conservative and auditable. It does not use an LLM to grade answers and does not claim psychometric validity.

## Implemented state hierarchy

Activity state is represented by a continuous score and a qualitative band:

- `unseen`: no recorded attempt
- `introduced`: learner has interacted, but evidence is weak or remediation is still indicated
- `developing`: partial evidence of understanding
- `stable`: repeated evidence with limited remediation signals
- `mastered`: repeated clean evidence meeting the configured heuristic threshold

The current heuristic requires at least three attempts for activity-level `mastered`, a score of at least `0.85`, and no active remediation signal.

## Evidence used

The model consumes persisted application evidence including attempts, misconception counts, hint usage, retries, source returns, and confidence.

The scoring function intentionally treats these as application evidence signals. They are not validated psychometric measurements.

## Concept graph and misconception model

Activities now have explicit concept and misconception mappings through the canonical catalog/adapter. The concept graph records prerequisites, related concepts, applications, activities, misconception identifiers, and transfer tasks. Missing mappings are treated as validation failures rather than silently inferred from chapter membership where the canonical contract requires explicit links.

## Next-best-action policy

The deterministic priority order is:

1. `remediate` when unresolved evidence exists.
2. `retrieve` for an unresolved concept in the current chapter.
3. `advance` when current evidence is stable enough and an unseen chapter exists.
4. `introduce` for the first available unresolved concept when no stronger action exists.
5. `transfer` when core activities are stable and a novel-context assessment is appropriate.

## Transfer

Transfer tasks are deterministic and separately recorded from ordinary activity mastery. Reasoning-transfer responses use an explicit evidence rubric; this is deterministic matching, not AI grading.

## Spaced retrieval and temporal evidence

Retrieval reviews maintain due dates, intervals, review counts, and correctness. Temporal assessments support `pre`, `post`, and `delayed` stages and preserve immutable learning events with deduplication and backwards-compatible merge behavior.

The learning state is persisted locally and can be synchronized to the authenticated account. Timeline events can also be persisted to the durable learning timeline store.

## Longitudinal reporting

The temporal report compares concept-level pre/post/delayed performance and misconception trends. These reports describe observed evidence in the system; they do not establish causal learning effectiveness.

## What this implementation does not claim

- It is not a calibrated psychometric model.
- `confidence` is an application evidence signal, not a validated probability of correctness.
- Mastery is a heuristic and is not, by itself, proof of durable retention.
- Concept mastery is not transfer mastery.
- Recommendation quality has not been validated with learner outcome data.
- Pre/post/delayed instrumentation does not by itself prove that the learning system caused the observed change.

## Current status

Learning Intelligence v1 has progressed beyond its original activity-only scope. Concept mapping, misconception IDs, transfer, spaced retrieval, temporal assessment, durable timeline persistence, and longitudinal reporting are implemented in the current product baseline.

Future work should focus on calibration and empirical validation only when the project deliberately enters that phase. No new learning-intelligence feature should be treated as validated merely because it is implemented and covered by software tests.
