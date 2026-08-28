# Escapement — Book QA Register v1

This register audits **the book manuscript itself**. It deliberately excludes the web reader, learning runtime, learner model, CI, and product UX except where they expose or preserve the book source.

## Status vocabulary

- `KEEP` — retain as written after verification.
- `QUALIFY` — substantially correct, but scope/caveat must be explicit.
- `REWRITE` — conceptual wording or structure needs correction.
- `DELETE` — remove the claim because it is too broad, unsupported, or unnecessarily numeric.
- `RESEARCH` — insufficient evidence; do not publish the claim until primary/authoritative sources are obtained.
- `MOVE` — valid editorial material, but belongs outside the public manuscript.
- `STYLE` — editorial improvement without a substantive factual correction.

## P0 — Publication blockers

| ID | Location | Finding | Action | Evidence / rationale |
|---|---|---|---|---|
| BQ-001 | Ch. 5, escapement taxonomy | Recoil/deadbeat/detached/direct-impulse dimensions are partially conflated. `Detached lever` should not be presented as simply an example of a deadbeat escapement. | `REWRITE` | Use orthogonal dimensions: recoil/deadbeat locking; detached/non-detached; sliding/direct impulse. Seiko Museum explains the lever development from the Graham deadbeat escapement without making the categories synonymous. |
| BQ-002 | Ch. 1, terms table | `200–320° typical modern range` is an unbounded numeric generalization. Amplitude is setup/caliber/lift-angle dependent. | `DELETE` | Replace with manufacturer/caliber/setup-specific interpretation. |
| BQ-003 | Ch. 11, accuracy example | `+3 s/d` is called accuracy rather than observed rate deviation. | `REWRITE` | State that +3 s/d is an observed rate deviation under specified conditions; accuracy is a broader relationship to a reference over an interval. |
| BQ-004 | Ch. 1–15, publication notes | `Review before publication` notes expose unresolved editorial uncertainty inside the manuscript. | `MOVE` | Keep these in this register, not the final book. |
| BQ-005 | Bibliography | `[9] Derek Pratt / horological technical literature...` is not a complete bibliographic record. | `RESEARCH` | Replace with an exact work or remove the citation. |
| BQ-006 | TOC vs chapter headings | Several TOC labels do not exactly match body headings. | `STYLE` | Generate the TOC from a single canonical heading source. |

## P1 — Technical/mechanical correctness

| ID | Location | Finding | Action | Evidence / rationale |
|---|---|---|---|---|
| BQ-007 | Ch. 4, free-sprung balances | Free-sprung design is described too close to a guarantee of lower isochronal error. | `QUALIFY` | It removes/changes curb-pin interaction; total isochronism still depends on spring geometry, oscillator, escapement and amplitude behavior. |
| BQ-008 | Ch. 4, overcoil | Overcoil is linked too directly to tighter vertical/horizontal performance. | `QUALIFY` | State intended concentric development and possible reduction of some errors when properly formed; avoid universal performance guarantees. |
| BQ-009 | Ch. 4, beat error | Definition is too narrowly tied to roller-jewel rest/banking. | `REWRITE` | Define it as timing asymmetry of the two directional events relative to escapement unlocking/impulse; then list possible geometric causes. |
| BQ-010 | Ch. 3, multiple barrels | Series/parallel characterization is oversimplified. | `REWRITE` | Describe architectures as methods for shaping torque/reserve/load; avoid one-to-one claims such as series = low average torque. |
| BQ-011 | Ch. 4, beat rate | Higher beat rate is described with an implied generic precision benefit. | `QUALIFY` | Present frequency as a system trade-off involving disturbance response, escapement events, power, lubrication and wear. |
| BQ-012 | Ch. 5, English vs Swiss lever | Historical/practical comparison is more categorical than the evidence supports. | `QUALIFY` | Keep as a historical comparison unless stronger primary quantitative evidence is added. |
| BQ-013 | Ch. 5, detent | `Very high efficiency` is presented as broad fact without explicit comparative scope. | `QUALIFY` | Tie comparison to the specific designs and operating conditions. |
| BQ-014 | Ch. 5, coaxial lubrication | General statement about lubrication can be read as universal. | `QUALIFY` | Cite design/manufacturer-specific lubrication practice; do not convert Daniels' concept into universal servicing instructions. |
| BQ-015 | Ch. 6, tourbillon | Modern wristwatch benefit is described with insufficient quantitative qualification. | `QUALIFY` | Distinguish historical purpose from modern use-case-dependent performance. |
| BQ-016 | Ch. 9, cap jewels | Positional friction/function explanation is imprecise. | `REWRITE` | Distinguish radial wall loading in vertical orientations from axial/endstone behavior in horizontal orientations. |
| BQ-017 | Ch. 7–10, materials | Material-property claims occasionally jump directly to system-performance claims. | `QUALIFY` | Use `property → design consequence → possible effect → measurement` chain. |
| BQ-018 | Ch. 10, silicon | Silicon density/stiffness/amagnitism is used to imply improved amplitude/precision generally. | `REWRITE` | Present these as design-relevant properties whose measured system benefit depends on architecture. |
| BQ-019 | Ch. 10, magnetism | Magnetized hairspring symptom is written close to a diagnosis. | `QUALIFY` | Call it a diagnostic clue, not proof; verify by magnetism test/demagnetization and observation. |
| BQ-020 | Ch. 10, informal thermal tests | Cool/warm pack procedure can be read as a standardized test. | `QUALIFY` | Explicitly label as informal screening, not certification or standardized metrology. |
| BQ-021 | Ch. 3, barrel grease / failure modes | Some workshop symptom→cause mappings are stated too deterministically. | `QUALIFY` | Use hypothesis language unless the observed symptom is diagnostic by design. |
| BQ-022 | Ch. 16–18 | Bench procedures sometimes read as universal despite movement/caliber dependence. | `QUALIFY` | Repeatedly defer movement-specific geometry, oils, tolerances and setting procedures to manufacturer data. |

## P1 — Standards and current-industry correctness

| ID | Location | Finding | Action | Evidence / rationale |
|---|---|---|---|---|
| BQ-023 | Ch. 12, ISO 3159 | Bibliography omits edition/status detail. | `REWRITE` | Identify `ISO 3159:2009`, edition 2. ISO currently lists it as the published edition and says it remains current while under systematic review. citeturn735730search1 |
| BQ-024 | Ch. 12, COSC | Traditional COSC scope must remain explicitly movement-level. | `KEEP + CLARIFY` | Current COSC materials distinguish the traditional movement certification from finished-watch Excellence certification. |
| BQ-025 | Ch. 14/23, COSC Excellence | Current details were previously left partially as review-needed. | `UPDATE` | Use current COSC primary material, including finished-watch scope and published current test characteristics. |
| BQ-026 | Ch. 13, METAS | Current text underuses primary-source evidence. | `UPDATE` | Replace industry-described wording where supported by current METAS documentation; retain scope/date qualifications where implementation can evolve. |
| BQ-027 | Ch. 13, Rolex | 2026 Superlative Chronometer changes are missing. | `UPDATE` | Rolex now states three additional criteria: magnetism, reliability and sustainability, supplementing precision, waterproofness, self-winding and autonomy; the finished-watch precision target remains -2/+2 s/day. citeturn735730search0turn735730search5 |
| BQ-028 | Ch. 13, JLC | 1000 Hours description is too tentative. | `UPDATE` | JLC states testing for up to six weeks with extensive checks on positions, power reserve, temperature, movement and water resistance. citeturn735730search4 |
| BQ-029 | Appendix A | Certification comparison risks reducing each program to headline numbers. | `REWRITE` | Keep object, conditions, duration, measurement and authority alongside tolerances. |
| BQ-030 | Ch. 13–14 | Proprietary brand programs can be mistaken for ISO/COSC standards. | `REWRITE` | Label public standard, third-party certification, and proprietary manufacturer program separately. |

## P1 — Historical correctness

| ID | Location | Finding | Action | Evidence / rationale |
|---|---|---|---|---|
| BQ-031 | Ch. 2, H4 narrative | Jamaica trial is compressed into a simple success story. | `RESTRUCTURE` | RMG documents the 1761 Jamaica trial, subsequent dispute, 1763–64 Barbados trial, 1766 Royal Observatory test, and the fact that H4 did not perform well in the latter. citeturn375422search0 |
| BQ-032 | Ch. 2, H4 outcome | Wording can imply one successful voyage permanently settled the longitude question. | `QUALIFY` | Say H4 demonstrated feasibility under relevant trials; do not imply that one trial instantly ended the technical/institutional story. RMG describes continued testing and dispute. citeturn375422search0 |
| BQ-033 | Ch. 15, Observatory Trials | Kew/Neuchâtel/scoring claims are intentionally incomplete. | `RESEARCH OR REDUCE` | Either build a source-backed historical chapter or reduce it to the verified general lineage of competition → testing → standardization. |
| BQ-034 | Ch. 2, longitude history | The role of lunar distance and Jupiter's satellites is compressed. | `QUALIFY` | Preserve as context; avoid implying the chronometer approach was the only serious route. RMG explicitly describes rival astronomical methods. citeturn375422search0 |

## P2 — Editorial architecture

| ID | Location | Finding | Action |
|---|---|---|---|
| BQ-035 | Whole book | `Accuracy / rate / precision / amplitude / positional behavior` are redefined repeatedly. | `REDUCE` | Establish canonical definitions once, then cross-reference. |
| BQ-036 | Whole book | `What to carry to the bench` is useful but formulaic in some chapters. | `EDIT` | Keep where the tool list adds chapter-specific utility; remove generic repetitions. |
| BQ-037 | Whole book | Reader scope shifts between enthusiast, student, practitioner, and career entrant. | `CLARIFY` | State that the book is a practitioner-oriented technical guide, not a caliber-specific service manual or accredited training text. |
| BQ-038 | Whole book | Some prose patterns are repetitive and reveal template generation. | `EDIT` | Vary or remove repeated framing phrases where they do not add meaning. |
| BQ-039 | Chapter transitions | Several chapters restate the same central thesis rather than advancing it. | `REDUCE` | Preserve the evidence/measurement thesis, but make each recurrence add a new dimension. |
| BQ-040 | Conclusion | Strong synthesis, but future-standard ideas need clear separation from current facts. | `QUALIFY` | Label proposals as author proposals / possible future criteria. |

## Editorial disposition rule

No claim is allowed to remain merely because it is plausible. Each material claim must have either:

1. a primary/authoritative source;
2. a clearly identified practitioner source;
3. a clearly marked interpretation/inference; or
4. explicit removal/qualification.

## Current publication gate

`NOT YET — Book QA-1 required before publication.`

The manuscript architecture is retained. The required work is a factual, source, terminology, and editorial correction pass rather than a wholesale rewrite.
