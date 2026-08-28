# Escapement Project Baseline

**Status:** ACTIVE BASELINE  
**Owner / Author qualification:** Hicham Bedrani  
**Repository:** `Loofy147/escapement-learning-edition`  
**Baseline branch:** `main`  
**Last baseline declaration:** 2026-08-28

## 1. Original objective

Escapement is the first experimental book produced under the project's specialized-book methodology. The purpose of the experiment is to establish whether a deliberately architected, LLM-assisted production pipeline can produce a strong specialized book, then transform that book into a useful learning edition, and eventually use the validated methodology to recruit and produce additional books.

Escapement is therefore a **reference experiment and golden book**, not the final platform or the final business product.

## 2. Core artifacts

### 2.1 Escapement Book

The primary artifact is the specialized manuscript:

> **Escapement — A Practitioner’s Guide to the Mechanics, Craft, and Measured Standards of Horology**

Author: **Hicham Bedrani**.

The book is treated as an author-qualified, practitioner-oriented work. It is not positioned as an exhaustive academic monograph, formal certification standard, or replacement for manufacturer service documentation.

### 2.2 Learning Edition

The website is the executable learning edition of the book. It adds interactive reading, activities, learner evidence, retrieval, transfer, temporal assessment, persistence, and related learning instrumentation.

The learning edition is a separate evaluation layer and must not be used as evidence that the book's factual content is correct.

### 2.3 QA and production methodology

The repository contains a reusable book QA methodology, claim register, correction patches, and reconciliation records. These are intended to become reusable production infrastructure after Escapement has been stabilized as the reference case.

## 3. Current validated state

### Book

- Architected manuscript: **PASS**
- 23-chapter structure: **PASS**
- Technical/content correction cycle: **PASS**
- Historical review/hardening: **PASS**
- Standards/current-industry review: **PASS**
- Multi-angle Book QA: **PASS for current author-qualified baseline**
- Author qualification: **PASS — Hicham Bedrani**

### Learning edition

- Interactive reader: **PASS**
- Activity/feedback/retry layer: **PASS**
- Learner evidence persistence: **PASS**
- Concept graph / misconception mapping: **PASS**
- Deterministic transfer assessment: **PASS**
- Spaced retrieval and temporal assessment infrastructure: **PASS**
- Cross-session/cross-device persistence infrastructure: **PASS**
- Latest repository Quality Gates: **PASS** for the validated merged checkpoint

### What is not yet established

- Learning-effectiveness causality: **NOT ESTABLISHED**
- Psychometric validity of the learner model: **NOT CLAIMED**
- Generalized book-production standard validated across multiple books: **NOT ESTABLISHED**
- Generalized recruitment/qualification score validated across multiple books: **NOT ESTABLISHED**

## 4. Author qualification versus external review

The current edition is **author-qualified** by Hicham Bedrani.

Open reader and specialist review is a future layer. Lack of institutional peer review does not invalidate the current author-qualified edition.

Future review should be claim-level and evidence-driven:

`review → evidence → author adjudication → versioned correction / erratum`

No reviewer reputation, trust score, expert badge, voting, or automated truth adjudication is part of the current baseline.

## 5. Deferred tracks

### Open Review Layer — FUTURE / NOT ACTIVE

Documented in `docs/roadmap/OPEN_REVIEW_LAYER.md`.

Purpose: allow readers and specialists to challenge claims, attach evidence, receive an author disposition, and preserve a versioned audit trail.

### Trust Layer — FUTURE / LATER

To be designed only after the open-review evidence model exists. It must derive trust signals from review/evidence history rather than assign authority in advance.

### Book #2 / recruitment — LATER

Do not generalize or recruit additional books until the Escapement baseline has been sufficiently stabilized and its methodology has been reviewed as a complete experiment.

## 6. Current scope freeze

For the present baseline, do not expand into:

- more learning features for their own sake;
- AI tutoring or AI grading;
- reviewer reputation systems;
- trust scoring;
- additional books;
- generalized production scoring before the reference book is fully audited as an experiment.

Changes should either repair the baseline, improve evidence quality, or address a clearly documented blocker.

## 7. Evidence hierarchy for project claims

Project statements must distinguish:

`IMPLEMENTED` → exists in repository/runtime  
`VALIDATED` → passed defined tests or source checks  
`AUTHOR-QUALIFIED` → accepted by the author as the current publication baseline  
`OBSERVED` → seen in actual use/data  
`EMPIRICALLY ESTABLISHED` → supported by an appropriate experiment  
`NOT ESTABLISHED` → not yet demonstrated  
`FUTURE` → documented direction, not implementation

No stronger status should be inferred from a weaker one.

## 8. Baseline decision

Escapement is currently a **stable author-qualified book and a validated interactive learning implementation**, with a reusable QA methodology around it.

The project is now in a **baseline/stabilization phase**. The immediate objective is not feature expansion; it is maintaining a clear, reproducible record of what Escapement is, what has been validated, what remains unproven, and which future tracks are explicitly deferred.
