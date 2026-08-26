# Interactive Book Learning Edition Program

This program is a repeatable production system for turning a canonical book into a public, responsive learning experience. It keeps the source book authoritative while adding a separate learning layer for concepts, activities, validation, feedback, relationships, and learner progress.

## Operating principle

> Preserve the book as the source of truth; build learning interactions as a detachable interpretation layer.

The implementation is deliberately split into six phases. Each phase has an output, a verification gate, and a clear handoff to the next phase.

## Phase 1 — Source and audience definition

Collect the canonical source in a stable Markdown or structured format. Record the title, author, audience, language, edition, rights status, chapter count, vocabulary, citations, and accessibility requirements. Do not begin UI work until every chapter has a stable identifier and every section can be addressed by an anchor.

**Output:** `book.config.json`, canonical source files, chapter inventory, terminology ledger.

**Gate:** The source parser can list every chapter, section, summary, and reference without manual correction.

## Phase 2 — Learning architecture

Define concepts separately from chapters. For every concept, capture a definition, chapter context, prerequisite concepts, related concepts, and one observable learner outcome. Define activity records with a type, prompt, answer model, validation rule, misconception, hint, explanation, and exact source anchor. Keep activity data independent from rendering components so new exercises do not require rewriting the reader.

**Output:** concept records, activity records, validation records, feedback records, relationship graph, progress schema.

**Gate:** Every activity points to a real source passage and can be graded by a pure deterministic function.

## Phase 3 — Reader and discovery

Build the public shell first: book entry, roadmap, chapter library, reader, concept explorer, glossary, references, search, practice, and progress. Make the reader accessible before adding visual polish. Include hierarchical contents, section anchors, previous/next navigation, reading-position restore, and direct links from concepts and feedback to source passages.

**Output:** browseable reader and discovery surfaces.

**Gate:** A new visitor can enter from the home page, open any chapter, search for a term, and return from a concept or activity to the exact relevant section.

## Phase 4 — Practice and validation

Start with a small high-value activity set covering different reasoning modes: prediction, multiple choice, sequence, classification, and parameter experiment. Model feedback as an explanation of the learner’s reasoning, not merely a right/wrong label. Include a hint, retry path, misconception state, and return-to-source link. Add activities chapter by chapter only after the validation contract is stable.

**Output:** practice library and deterministic grading helpers.

**Gate:** Correct, incorrect, incomplete, and misconception states are distinguishable; the learner can retry without losing the chapter context.

## Phase 5 — Progress and synchronization

Use anonymous local progress as a frictionless fallback. When a learner authenticates, merge local and remote state rather than overwriting it. Union viewed, completed, and mastered identifiers; take the maximum attempt count per activity; preserve a stable current chapter; and debounce authenticated upserts. Scope every remote snapshot to the authenticated user.

**Output:** local progress adapter, account progress table, protected read/upsert procedures, sync affordance.

**Gate:** A learner can read anonymously, sign in later, see local progress retained, continue on another device, and receive a recommended next step.

## Phase 6 — Visual system, QA, and release

Apply a visual language that belongs to the subject. For technical books, use calibrated marks, diagrams, measured labels, restrained motion, and a clear hierarchy. Validate mobile, tablet, desktop, keyboard navigation, focus states, contrast, reduced motion, deep links, empty states, malformed-source resilience, and production build output.

**Output:** production-ready web edition, test suite, release notes, and reusable package.

**Gate:** Tests, typecheck, production build, visual review, and a manual critical-path walkthrough all pass.

## Recommended implementation order

Implement the data model before the UI, the reader before practice, practice before progress dashboards, and synchronization before account polish. Do not hardcode one book’s chapter names into generic components. Keep a book-specific content configuration and a book-agnostic product shell.

## Minimum reusable data contracts

| Record | Required fields |
|---|---|
| Book | `id`, `title`, `author`, `language`, `sourceVersion` |
| Chapter | `id`, `number`, `part`, `title`, `summary`, `objectives`, `prerequisites`, `minutes` |
| Section | `id`, `chapterId`, `title`, `order`, `sourceAnchor` |
| Concept | `id`, `label`, `definition`, `chapterId`, `prerequisites` |
| Activity | `id`, `type`, `chapterId`, `prompt`, `answer`, `sourceAnchor` |
| Validation | `activityId`, `rule`, `accepted`, `explanation` |
| Feedback | `activityId`, `misconception`, `hint`, `sourceAnchor` |
| Progress | `viewed`, `completed`, `attempts`, `mastered`, `current` |

## Definition of done

A book implementation is complete when the canonical reader exposes the full source; every activity has a deterministic validation path and exact source link; progress works anonymously and for authenticated accounts; the product is responsive and accessible; and the release passes tests, typecheck, build, and visual verification.
