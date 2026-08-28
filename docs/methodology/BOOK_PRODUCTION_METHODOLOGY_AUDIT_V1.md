# Book Production Methodology Audit v1

**Status:** REFERENCE METHODOLOGY — NOT YET A GENERATOR PROMPT  
**Reference case:** Escapement  
**Owner:** Hicham Bedrani  
**Date:** 2026-08-28

## Purpose

Audit the original Escapement book-planning assumptions against the actual production, QA, correction, and qualification experience.

This document defines what remains sound, what must be reframed, what becomes an operational rule for LLM-assisted production, and what remains an unproven hypothesis.

## Method truth

The original objective remains:

`brief → research → architecture → claims → drafting → adversarial QA → correction → author qualification → publication`

Escapement is the reference experiment and golden book. It is evidence about the method, not proof that the method generalizes universally.

## Findings that remain valid

- Practitioner-first positioning.
- Measurement/evidence as the organizing thesis.
- Mechanics → materials → standards → practice progression.
- Modernization of the classic practitioner-reference tradition.
- Source discipline.
- Explicit treatment of contested claims.
- Practitioner-oriented scope rather than a caliber-specific repair manual.
- Separate book QA from website/learning QA.

## Assumptions that must be reframed

### Technical claims

Every material external claim needs an evidence state and appropriate scope. A citation alone does not justify wording broader than the source.

### Practitioner review

Do not rely on one reviewer as proof of whole-book correctness. Review should be claim-domain aligned: practitioner, engineering, historical, standards/metrology, scientific literature, editorial, etc.

### Expertise

A domain expert is a valuable evidence source, not an automatic source of truth. Expertise is claim-relevant and domain-specific.

### Standards

`standard ≠ certification ≠ proprietary program ≠ legal designation`

ISO, certification bodies, manufacturers, and legal regimes must be distinguished.

### History

Do not convert a familiar causal story into fact when primary evidence is uncertain. Preserve uncertainty explicitly.

### Engineering

Do not jump from:

`property → system performance`

Use:

`property → mechanism/design consequence → possible effect → measurement`

### Diagnosis

Do not turn a symptom into a deterministic diagnosis. Use:

`observation → hypothesis → verification`

### Currentness

Claims about active standards, programs, organizations, or specifications are time-sensitive and must be date/source controlled.

### Open review

Open participation does not automatically improve a book. It can generate useful corrections, noise, bias, or conflict. Benefit is an empirical question.

### Experience

Tacit professional experience is a knowledge source, not automatically a verified fact. Convert it through:

`elicitation → structuring → corroboration → scope → review → qualification`

### Endorsement

An endorsement is a credibility or positioning signal, not proof of technical correctness.

## Escapement-specific corrections that became general methodology

1. Avoid unbounded numeric generalizations.
2. Keep taxonomies orthogonal rather than blending categories.
3. Separate observation, mechanism, interpretation, and conclusion.
4. Mark movement-specific bench advice as conditional.
5. Keep historical narrative distinct from historical evidence.
6. Treat currentness as a first-class metadata property.
7. Keep internal QA notes outside the published manuscript.
8. Re-audit affected claims after every correction.
9. Automated manuscript editing must fail closed, validate diffs, and preserve integrity.
10. Never collapse multidimensional confidence into one number.

## LLM-executable protocol shape

The future method should be a protocol, not a giant prompt.

Every stage should define:

`INPUT → TASK → CONSTRAINTS → OUTPUT → VALIDATION → FAILURE STATES`

### Example: Claim Audit

**Input**
- manuscript
- claim inventory
- source inventory

**Task**
- identify material claims;
- classify claim type;
- identify scope;
- attach candidate evidence;
- flag uncertainty.

**Constraints**
- do not invent citations;
- do not upgrade hypothesis to fact;
- do not infer current standards from stale sources;
- do not generalize movement-specific practice.

**Output**
Structured claim records.

**Validation**
- required fields present;
- evidence status assigned;
- unsupported high-risk claims flagged.

**Failure states**
- missing evidence;
- conflicting sources;
- ambiguous scope;
- currentness unknown.

## LLM boundaries

The LLM may structure, draft, compare, critique, summarize sources, propose qualifications, and identify contradictions.

It must not silently invent evidence, fabricate currentness, convert inference into fact, claim professional authority, or overwrite historical versions without provenance.

## Human authority

For Escapement:

- Author / adjudicator: Hicham Bedrani.
- Current publication state: author-qualified.
- Open reader/specialist review: future.
- Reviewer trust/reputation scoring: future.
- Institutional certification: not claimed.

## Quality model

Do not reduce book quality to one scalar before evidence warrants it.

At minimum track:

- factual integrity;
- source integrity;
- technical/mechanistic integrity;
- historical integrity;
- standards/currentness;
- practitioner scope/safety;
- terminology consistency;
- editorial coherence;
- positioning fit.

## Generalization rule

The methodology is not generalized until another book is produced through the same process.

The next-book comparison should measure:

- source coverage;
- claim density;
- correction rate;
- defect severity;
- human intervention;
- rework;
- qualification effort;
- reviewer disagreement;
- post-publication stability;
- domain-specific adaptations.

## Status

**Established for Escapement**
- deliberate book architecture;
- multi-lens Book QA;
- claim disposition model;
- evidence-status model;
- deterministic correction process;
- current-source revalidation;
- author-qualified baseline.

**Experimental / not generalized**
- LLM production efficiency;
- cross-domain reproducibility;
- open professional review;
- continuous book improvement;
- professional credibility accumulation;
- recruitment scoring.

**Deferred**
- Open Review Layer;
- Trust Layer;
- reviewer reputation;
- generalized economic model;
- multi-book knowledge graph.

## Baseline principle

> Escapement is evidence for the methodology, not proof of universal effectiveness.

The method should generalize only when additional books and review data justify the generalization.
