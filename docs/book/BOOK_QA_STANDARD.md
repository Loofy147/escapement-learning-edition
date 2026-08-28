# Escapement Book QA Standard v1

## Purpose

This standard evaluates a book as a standalone publication artifact. It is independent of the website, learning runtime, LLM generation pipeline, and product UX.

The standard is intended to become the reusable quality gate for future books produced with the same method.

## Core rule

A claim is not accepted because it sounds plausible. It must be supported, scoped, explicitly qualified, or removed.

## Review lenses

### 1. Adversarial factual review

Find statements that are false, partially true, outdated, or broader than their evidence.

### 2. Practitioner / domain review

Ask whether a qualified practitioner could rely on the text without being misled by universal language, missing conditions, or movement-specific assumptions.

### 3. Mechanistic / engineering review

Audit causal chains:

`property → mechanism → expected effect → measurement`

Reject unsupported jumps from a material/property to a system-level performance claim.

### 4. Historical review

Check chronology, attribution, causal narratives, and the distinction between later interpretation and contemporary evidence.

### 5. Standards / metrology review

Check object under test, method, conditions, interval, tolerance, authority, and publication status. Separate standards, certification bodies, and proprietary manufacturer programs.

### 6. Current-industry review

Revalidate current programs, specifications, terminology, and dates against primary sources.

### 7. Scientific-literature review

Check whether the treatment level and causal language are consistent with technical literature. Do not describe an overview as a comprehensive technical reference.

### 8. Reader-scope review

Determine what the book promises and whether its depth, vocabulary, examples, and procedures match the declared reader.

### 9. Technical-editor review

Remove repetition, title drift, unnecessary template prose, inconsistent terminology, and weak transitions.

### 10. Bibliographic review

Every material external claim needs a traceable source. A citation placeholder, vague "literature" reference, or incomplete bibliography entry is not sufficient for publication.

### 11. LLM-forensics review

Detect generated-text failure patterns:

- plausible but weakly sourced specifics;
- repeated formulaic framing;
- false precision;
- property-to-performance leaps;
- blended categories;
- internal review notes leaking into final copy.

### 12. Competitive/editorial review

Ask what the book uniquely contributes and whether the promised positioning is defensible against competent books in the field.

## Claim disposition

Each reviewed material claim receives exactly one primary disposition:

- `KEEP`
- `QUALIFY`
- `REWRITE`
- `REPLACE`
- `DELETE`
- `MOVE`
- `RESEARCH`

## Evidence status

Each claim also receives an evidence status:

- `PRIMARY_VERIFIED`
- `AUTHORITATIVE_SECONDARY`
- `PRACTITIONER_SOURCE`
- `INTERPRETATION`
- `HYPOTHESIS`
- `UNSUPPORTED`
- `OUTDATED`
- `CONFLICTING`
- `UNKNOWN`

## Minimum publication gates

A book cannot pass publication QA if any of the following remain unresolved:

1. A known factual error.
2. A material technical claim marked `UNSUPPORTED`.
3. A current standards claim marked `OUTDATED`.
4. A historical claim with unresolved contradictory primary evidence where the wording presents certainty.
5. A bibliography entry that cannot identify the referenced work.
6. Internal review notes in the public manuscript.
7. A structural inconsistency that changes the meaning of navigation, chapter identity, or cross-reference.

## Confidence model

Do not collapse confidence into one score. Report at least:

`factual confidence`
`source confidence`
`scope confidence`
`currentness confidence`

A claim with strong historical evidence but weak currentness evidence is not "90% correct"; it is strong on one axis and weak on another.

## Review protocol

1. Freeze the manuscript revision.
2. Inventory material claims and assumptions.
3. Run all review lenses independently.
4. Record disagreements rather than averaging them away.
5. Resolve using the strongest appropriate evidence.
6. Apply the smallest correction that restores truth and scope.
7. Re-run the lenses that could be affected by each correction.
8. Produce a final clean manuscript and a separate QA register.

## Reproducibility

The QA result must be tied to:

- manuscript commit SHA;
- source/version dates;
- reviewer lens set;
- register revision;
- unresolved items;
- final disposition.

## Current Escapement rule

`BOOK_QA-1 = FAIL / CORRECTION REQUIRED`

The current manuscript has a strong architecture and coherent thesis, but the register contains known terminology, scope, historical, current-standard, bibliographic, and editorial corrections that must be applied before publication.
