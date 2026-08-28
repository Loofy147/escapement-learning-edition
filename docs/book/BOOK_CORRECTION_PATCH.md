# Escapement — Book Correction Patch v1

These are the exact editorial directions for the current manuscript. They are intentionally separate from `book.md` so the manuscript is never silently altered without a traceable claim disposition.

## P0

### CP-001 — Chapter 5 taxonomy

Replace the shortcut classification with:

> Escapements can be compared along several independent dimensions: whether the locking action permits recoil or is deadbeat; whether the oscillator is detached from the train between impulses; and whether impulse is predominantly sliding or direct. These dimensions should not be treated as synonyms.

Then classify the principal examples against those dimensions.

### CP-002 — Chapter 1 amplitude range

Delete:

> 200–320° typical modern range (context-dependent)

Replace with:

> Amplitude is a measured or inferred angular swing whose interpretation depends on the caliber, escapement, lift-angle setting, winding state, position, and instrument method. Use the manufacturer's specification where available.

### CP-003 — Chapter 11 accuracy example

Replace:

> If the rate averages +3 s/d against a standard time signal, accuracy is +3 s/d.

With:

> If the observed rate deviation averages +3 s/d against a defined time reference, the measured rate deviation is +3 s/d. Whether the watch should be described as accurate depends on the reference, interval, conditions, and acceptance criterion.

### CP-004 — Publication notes

Remove all `Review before publication` sections from the public manuscript. Retain their substance in `BOOK_QA_REGISTER.md`.

### CP-005 — Bibliography [9]

Do not publish `Derek Pratt / horological technical literature` as a bibliography entry. Replace it with a specific, identifiable work or remove all citations that depend on it.

## P1 technical

### CP-006 — Free-sprung balances

Replace universal language such as:

> Free-sprung balances reduce isochronal error.

With:

> Free-sprung regulation removes or reduces dependence on curb-pin adjustment, eliminating one source of regulator interaction. Overall isochronism remains dependent on spring geometry, oscillator design, escapement behavior, amplitude and adjustment.

### CP-007 — Overcoil

Replace causal certainty with:

> A properly formed terminal curve or overcoil is intended to improve the concentric development of the spring. Its effect on positional and isochronal behavior depends on the complete oscillator and escapement design.

### CP-008 — Beat error

Replace the narrow definition with:

> Beat error expresses asymmetry in the timing of the oscillator's two directional events relative to the escapement's unlocking and impulse geometry. Collet, roller, stud, fork, and escapement geometry can all contribute.

### CP-009 — Multiple barrels

Replace the series/parallel shortcut with:

> Multiple-barrel architectures can be used to reshape available torque, extend reserve, or supply particular loads. The resulting torque profile depends on spring characteristics and the gearing arrangement.

### CP-010 — Beat rate

Replace performance-implying wording with:

> Beat rate is a system trade-off involving oscillator design, escapement event frequency, disturbance response, power consumption, lubrication, wear, and robustness. No single beat-rate value is universally superior.

### CP-011 — Materials

Where the manuscript uses `property → guaranteed performance`, rewrite using:

> material property → design consequence → possible system effect → measured result

### CP-012 — Silicon

Replace generic performance claims with material-property language and explicitly distinguish intrinsic properties from measured performance of a particular movement architecture.

### CP-013 — Magnetism

Change diagnostic statements from `diagnosis` to `diagnostic clue` unless independently verified.

### CP-014 — Thermal screening

Label cool/warm-pack procedures as informal screening only. They are not substitutes for a standardized temperature test or certification protocol.

## P1 historical

### CP-015 — Chapter 2 H4 sequence

Rewrite the narrative as:

`H1 Lisbon trial → H2 no trial because of discovered flaw → H3 development → H4 Jamaica trial (1761) → dispute → Barbados trial (1763–1764) → Board consideration in 1765 → Royal Observatory testing beginning 1766 → continued controversy and later reward.`

Do not compress this into a single successful Jamaica voyage.

### CP-016 — Chapter 2 H4 claim scope

Use `demonstrated feasibility under the relevant trials` rather than language implying that one voyage permanently settled longitude.

### CP-017 — Chapter 15 observatory trials

Either research Kew/Neuchâtel and exact scoring from primary historical sources, or reduce the chapter to verified historical lineage. Do not leave named venues and scoring details in an explicitly incomplete state.

## P1 standards

### CP-018 — ISO 3159

Identify the current publication as `ISO 3159:2009, Edition 2`. State that ISO currently lists it as published/current while it is under systematic review. Do not imply that a new edition already exists.

### CP-019 — COSC

Keep movement-level scope explicit for the traditional certification and distinguish it from finished-watch programs.

### CP-020 — COSC Excellence

Update Chapter 14/23 from provisional wording to current COSC primary-source wording and retain only details currently published by COSC.

### CP-021 — METAS

Upgrade supported statements to primary-source status while marking any implementation-specific or time-sensitive detail with a source date.

### CP-022 — Rolex

Update Chapter 13/23 for the 2026 Superlative Chronometer expansion. Preserve the -2/+2 s/day finished-watch precision claim and add the three new criteria: magnetism, reliability, and sustainability. Clearly label Rolex's program as a manufacturer certification, not ISO/COSC.

### CP-023 — JLC

Update 1000 Hours Control to the current manufacturer-stated description: up to six weeks with checks including positions, power reserve, temperature, movement and water resistance. Label it as a proprietary manufacturer program.

## P2 editorial

### CP-024 — Definitions

Create one canonical definitions block for accuracy, rate, precision/repeatability, amplitude, positional behavior and beat error. Later chapters may apply the terms but should not redefine them in conflicting ways.

### CP-025 — Titles

Generate the contents list from the canonical heading list. Eliminate title drift between the TOC and body chapters.

### CP-026 — Tool lists

Retain `What to carry to the bench` only when it adds chapter-specific tools or decisions. Remove generic repetitions.

### CP-027 — Reader scope

State explicitly that the book is a practitioner-oriented technical guide, not an accredited training course, caliber-specific service manual, or complete professional reference.

### CP-028 — Generated prose patterns

Edit repeated phrases such as `The practical lesson`, `The bench lesson`, and generic `What to carry` transitions where they add no new information. Preserve the author's evidence-centered voice.

## Final verification rule

After applying these patches, re-run the adversarial, practitioner, engineering, historical, standards, current-industry, bibliographic and LLM-forensics lenses against every modified claim.
