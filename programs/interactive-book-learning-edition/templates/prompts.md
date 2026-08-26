# Reusable Prompt Templates

## Source extraction

Read the canonical book as authoritative source material. Return a structured chapter inventory with stable ids, parts, section anchors, summaries, objectives, prerequisites, estimated reading time, key concepts, and references. Preserve quotations, terminology, and uncertainty; never invent a claim that is not supported by the source.

## Concept authoring

For each concept, write a plain-language definition, identify the chapter where it is developed, list prerequisite concepts, list related concepts, and name one observable distinction a learner should be able to make after reading the relevant passage.

## Activity authoring

Create one activity for the supplied chapter and concept. Choose one reasoning mode: prediction, multiple choice, sequence, classification, or parameter experiment. Include the prompt, answer representation, deterministic validation rule, correct explanation, likely misconception, hint, retry behavior, and exact source section anchor. The activity must test interpretation of the source, not trivia.

## Feedback authoring

Write feedback that explains the learner’s reasoning state. A correct answer should name the evidence that supports the conclusion. A misconception should identify the tempting but incorrect interpretation, then point back to the smallest source passage that resolves it. Avoid shame, vague praise, and unexplained red marks.

## Editorial QA

Check the complete reader against the canonical source. Confirm every chapter and section is reachable, every concept link resolves, every activity has a source anchor, every validation path is deterministic, every progress state is serializable, and every public route remains usable without authentication.
