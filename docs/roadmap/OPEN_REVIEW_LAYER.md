# Open Review Layer — Future Track

**Status:** FUTURE / NOT ACTIVE  
**Applies to:** Escapement and future book editions  
**Owner / author adjudicator:** Hicham Bedrani

## Purpose

Create an open, evidence-driven review layer around the published book without changing the published text directly from reader input.

The layer is intended to let readers and specialists challenge specific claims, attach evidence, receive an author adjudication, and preserve the resulting decision as versioned book history.

This is a future track. It is recorded now for architectural continuity, but it is **not implementation work for the current phase**.

## Core model

```text
Published Book
      ↓
Claim Registry
      ↓
Reader / Specialist Review
      ↓
Evidence
      ↓
Review Assessment
      ↓
Author Adjudication
      ↓
Accepted / Partial / Rejected / Duplicate
      ↓
Correction / Erratum when applicable
      ↓
New Book Version
      ↓
Immutable Review & Decision History
```

## Review target

Reviews should be attachable to a specific claim whenever practical, rather than only to a chapter or the book as a whole.

Illustrative identity:

```text
ESC-CH05-C017
```

A claim record should eventually expose enough context to identify:

- chapter / section
- canonical claim text
- source references
- claim status
- relevant book version

## Review types

The future system should distinguish at least:

```text
Challenge
Correction
Missing evidence
Source issue
Terminology
Historical dispute
Scope / qualification
Editorial issue
```

A review is an assertion or challenge. It is not automatically a correction.

## Evidence model

A reviewer should be able to attach supporting material such as:

```text
source
citation
URL
excerpt / reference location
notes
```

Evidence should remain distinguishable from reviewer opinion.

The design principle is:

> Review is a challenge; evidence is what makes the challenge actionable.

## Author adjudication

The published book remains under explicit authorial control.

For Escapement, the adjudicating author is **Hicham Bedrani**.

Possible outcomes:

```text
ACCEPTED
PARTIALLY_ACCEPTED
REJECTED
DUPLICATE
NEEDS_MORE_EVIDENCE
NO_CHANGE
```

Every decision should eventually record:

- the decision
- rationale
- supporting evidence
- affected claim
- affected book version
- decision timestamp

## Versioning principle

Reader input must never silently rewrite the historical record.

The intended lifecycle is:

```text
v1.0
  ↓
review / evidence
  ↓
author decision
  ↓
correction or clarification
  ↓
v1.1
```

Previous wording, decision history, and evidence should remain traceable.

## Open participation

The future review layer is intentionally open to readers and specialists.

No trust score, expertise score, badge, voting system, or reputation weight is defined in this phase.

A later Trust Layer may evaluate signals such as:

```text
review history
quality of supplied evidence
accepted corrections
relevant expertise
consistency
conflict patterns
```

But those signals are explicitly **out of scope for this track's initial implementation**.

## Guardrails

The future implementation must preserve the following constraints:

1. Reviewer input does not directly publish changes.
2. Evidence and opinion remain separate.
3. Rejected reviews remain auditable rather than being erased.
4. Corrections are versioned.
5. Author adjudication is explicit.
6. Historical decisions remain immutable.
7. AI may assist triage or discovery later, but must not silently adjudicate truth.

## Initial MVP when this track is activated

When activated, the minimum useful implementation is expected to contain:

```text
Claim IDs
Review submission
Evidence attachment
Review status
Author adjudication
Versioned correction / erratum
Public review history
```

No reviewer trust scoring is required for the MVP.

## Future metrics

After multiple books use the system, the review layer can become a source of evidence about book-production quality, for example:

```text
claim defect rate
correction rate
evidence coverage
review disagreement rate
time to resolution
repeated ambiguity patterns
source failure rate
```

These metrics may later feed back into the book-production standard.

## Explicit non-goals for the current phase

Do **not** implement now:

```text
Trust Layer
Reviewer reputation
Expert badges
Voting / likes
Automatic acceptance
Automatic truth adjudication
Review-driven publication changes
```

## Relationship to Escapement baseline

Escapement remains an **author-qualified book baseline** first.

This track is layered on top of that baseline and is intended to support future public scrutiny without changing the current definition of the published book.

The architectural sequence is therefore:

```text
Escapement baseline
      ↓
Open Review Layer (this track)
      ↓
Future Trust Layer
```
