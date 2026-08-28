import fs from "node:fs";

const path = "client/src/content/book.md";
let book = fs.readFileSync(path, "utf8");

function replaceExact(label, oldText, newText) {
  const oldCount = book.split(oldText).length - 1;
  const newCount = book.split(newText).length - 1;
  if (oldCount === 0 && newCount === 1) return;
  if (oldCount !== 1) throw new Error(`${label}: expected exactly 1 source match or 1 already-corrected match, found source=${oldCount} target=${newCount}`);
  book = book.replace(oldText, newText);
}

function replaceRegexOnce(label, pattern, replacement) {
  const matches = book.match(pattern);
  if (!matches || matches.length !== 1) {
    throw new Error(`${label}: expected exactly 1 regex match, found ${matches ? matches.length : 0}`);
  }
  book = book.replace(pattern, replacement);
}

const replacements = [
  ["amplitude range", "| Amplitude           | Angular swing of balance                            | 200–320° typical modern range (context-dependent)      | Power delivery, oil, endshake, banking/escapement      |", "| Amplitude           | Angular swing of balance                            | A measured or inferred angular swing; interpret against caliber, escapement, lift-angle setting, winding state, position, and instrument method | Power delivery, oil, endshake, banking/escapement      |"],
  ["accuracy definition", "- Accuracy: The closeness of the rate to a reference. If the rate averages +3 s/d against a standard time signal, accuracy is +3 s/d.", "- Accuracy: The closeness of indicated time to a defined reference over a stated interval and conditions. An observed rate deviation of +3 s/d is a rate result; whether the watch is accurate depends on the reference, interval, conditions, and acceptance criterion."],
  ["free sprung", "Mitigations:\n- Free-sprung balances reduce curb-pin friction and stabilize the effective length [6].", "Mitigations:\n- Free-sprung regulation removes or reduces dependence on curb-pin adjustment, eliminating one source of regulator interaction. Overall isochronism remains dependent on spring geometry, oscillator design, escapement behavior, amplitude, and adjustment [6][7]."],
  ["overcoil paragraph", "A flat spiral spring is economical of height but sensitive to vertical motion and curb-pin interference. A properly formed overcoil (Breguet overcoil) improves concentric “breathing” of the spring, aiding isochronism and positional stability by keeping the center of mass closer to the balance staff across amplitudes [6][7]. The execution of the terminal curve, not the name, does the work.", "A flat spiral spring is economical of height but can be sensitive to vertical motion and regulator interaction. A properly formed terminal curve or Breguet overcoil is intended to improve the concentric development of the spring. Its effect on positional and isochronal behavior depends on the complete oscillator and escapement design [6][7]. The execution of the terminal curve, not the name, does the work."],
  ["overcoil table", "| Breguet overcoil | Increased | Very good | Often the tightest vertical/horizontal spread at similar amplitude |", "| Breguet overcoil | Increased | Very good when properly formed | May reduce certain positional and isochronal errors; outcome depends on the complete oscillator |"],
  ["beat rate", "Beat rate (e.g., 18,000, 21,600, 28,800 vph) is a design choice balancing impulse frequency against friction and shock performance. Higher beat rates can average disturbances and improve precision at a given amplitude band, at the price of increased escapement events per hour (more oil stress and wear). Lower beat rates reduce escapement losses, help long reserves, and are gentler with marginal lubrication. The balance must be dimensioned for the chosen rate; retrofitting a higher rate to a train and escapement not intended for it is unsound [6][7].", "Beat rate (e.g., 18,000, 21,600, 28,800 vph) is a system trade-off involving oscillator design, escapement event frequency, disturbance response, power consumption, lubrication, wear, and robustness. No single beat-rate value is universally superior. The balance, train, and escapement must be designed as a coherent system; retrofitting a different rate without the corresponding engineering changes is unsound [6][7]."],
  ["beat error", "Beat error expresses asymmetry between the clockwise and counterclockwise portions of the balance’s motion as observed through the impulse sequence.", "Beat error expresses asymmetry in the timing of the oscillator’s two directional events relative to the escapement’s unlocking and impulse geometry. Collet, roller, stud, fork, and escapement geometry can all contribute."],
  ["cap jewels", "- Cap jewels (endstones) limit axial displacement and present a flat, polished plane to the pivot end. They reduce friction at low loads (vertical positions) and stabilize amplitude [6][7].", "- Cap jewels (endstones) limit axial displacement and provide a polished bearing surface for the pivot end. Their role and loading differ by orientation; in horizontal positions the pivot end can bear on the cap jewel, while in vertical positions the pivot commonly loads the wall of the hole jewel [6][7]."],
  ["multiple barrels", "Multiple barrels are used to extend reserve without excessive spring height, to reduce peak torque for a given total energy, or both. Whether in series (longer reserve, lower average torque) or parallel (higher torque for complications), the gearing and bearing loads change. Series barrels reduce peak drive to the escapement for a given reserve but demand tighter train losses for the same amplitude. These are design trades; at the bench you mostly see them as differences in amplitude margins and “stubbornness” under load.", "Multiple-barrel architectures can be used to reshape available torque, extend reserve, or supply particular loads. The resulting torque profile depends on spring characteristics and the gearing arrangement. At the bench, evaluate the actual movement’s amplitude margin, rate behavior, and reserve rather than assuming a universal series-versus-parallel outcome."],
  ["silicon", "- Material properties that matter: low density (low inertia for moving parts), high stiffness, excellent dimensional precision from microfabrication, and amagnetic behavior. These help amplitude (less mass to drive), positional precision (stable geometry), and magnetic immunity (no force coupling to the hairspring) in practice.\n- Escapement parts: Silicon escape wheels and pallets remove steel’s magnetism and, with appropriate surface finish, may reduce lubrication dependence. Geometry is cut, not worn in; damage tends to be brittle rather than ductile. Handling must respect that.\n- Hairsprings: Silicon hairsprings provide intrinsic amagnetic behavior and can be formed in geometries that encourage concentric breathing without overcoil height. Their thermal coefficient can be tailored by geometry and, in some designs, by thin surface treatments; in practice on the bench, expect good temperature behavior but verify it the same way you would with alloys—test and adjust regulator/terminal shape as needed.", "- Material properties that matter include low density, high stiffness, microfabrication precision, and amagnetic behavior. These are design inputs rather than guarantees of system-level performance.\n- Escapement parts: silicon components eliminate ferromagnetic steel in the component itself and can alter friction and lubrication requirements depending on the design and surface treatment.\n- Hairsprings: silicon hairsprings are intrinsically non-ferromagnetic and can be manufactured in complex geometries. Their actual temperature, positional, and shock performance remains a property of the complete oscillator and must be verified by measurement."],
  ["magnetism", "- Sudden large daily gain with preserved amplitude points to a magnetized spring.", "- A sudden large daily gain with relatively preserved amplitude is a diagnostic clue that should prompt a magnetism check; it is not, by itself, proof of a magnetized spring."],
  ["thermal screening", "- Temperature:\n  - Cold test: Place the cased watch in a sealed bag to prevent condensation, cool gently, let equilibrate, then measure rate and amplitude quickly after returning to room temperature.\n  - Warm test: Warm similarly and measure. Look for parallel shifts in rate across positions and for amplitude changes that differ by position (lubrication symptom).", "- Temperature (informal screening only): Gentle cool/warm exposure can be used to look for gross thermal effects after adequate equilibration and condensation control. It is not a substitute for a standardized temperature test or certification protocol. Follow the manufacturer’s handling limits and avoid thermal shock."],
  ["escapement taxonomy", "- Recoil escapements (e.g., verge, anchor variants) permit backward motion under lock; not used in modern precision watches.\n- Deadbeat escapements (e.g., detached lever, detent) avoid recoil; the escape wheel rests without pushing during lock.\n- Detached escapements isolate the balance from the train except during brief impulses. This supports precision by minimizing disturbance [6][7][8].", "Escapements can be compared along several independent dimensions: whether the locking action permits recoil or is deadbeat; whether the oscillator is detached from the train between impulses; and whether impulse is predominantly sliding or direct. These dimensions should not be treated as synonyms.\n\n- Recoil escapements permit some backward motion of the train during locking.\n- Deadbeat escapements use a locking geometry that avoids recoil during the locked interval.\n- Detached escapements isolate the oscillator from the driving train except during the intended unlocking and impulse events.\n\nThe Swiss lever is detached and predominantly uses sliding impulse. The traditional spring detent is detached and uses direct impulse. Verge escapements are recoil and non-detached. These categories describe different properties and should be kept separate [6][7][8]."],
  ["chapter 5 beat error", "Beat error in a lever escapement arises from asymmetry in the roller jewel’s rest relative to the banking: the instant of unlocking differs left to right. Set the collet on the balance staff (for fixed stud) or the stud carrier (for movable stud) to center the pallet fork’s neutral relative to the balance’s rest. Aim to correct geometry before trimming rate.", "Beat error in a lever escapement expresses asymmetry in the timing of the oscillator’s two directional events relative to the escapement’s unlocking and impulse geometry. Collet, roller, stud, fork, and escapement geometry can all contribute. The appropriate correction is movement-specific; correct the relevant geometry before using rate adjustment to mask the error."],
  ["ISO citation", "[5] ISO 3159, Wrist-chronometers with sprung balance oscillator (cite as the standard; do not invent clauses or quote inaccessible text).", "[5] International Organization for Standardization. ISO 3159:2009, *Timekeeping instruments — Wrist-chronometers with spring-balance oscillator*, Edition 2. ISO currently lists this edition as published/current; the standard is under systematic review as of 2026. Consult the licensed edition for exact clauses and definitions."],
  ["scope note", "This is a book to read in sequence and to revisit by subject. Part I establishes why timekeeping is a difficult physical problem.", "This is a practitioner-oriented technical guide for readers of mechanical horology. It is not an accredited training course, a caliber-specific service manual, or a complete professional reference. Read it in sequence and revisit it by subject. Part I establishes why timekeeping is a difficult physical problem."],
  ["Harrison sequence", "- H1. A large, complex, gimballed timekeeper with paired balances to counter motion, using a remontoire and novel anti-friction designs. It represented a bold attempt to stabilize rate aboard ship and was trialed at sea to Lisbon [4].\n- H2. An improvement on H1 aiming to address identified defects. Harrison ultimately considered it imperfect and did not seek its sea trial [4].\n- H3. A rethinking with new elements—most famously a bimetallic compensation device and caged roller bearings—seeking to solve the remaining isochronism and temperature errors. It took many years and did not achieve the performance Harrison wanted [4].\n- H4. A different approach, small and watch-like, with a fast balance and a spring, showing that a portable watch could reach the required steadiness if designed and made with extraordinary care. It was this instrument that underwent a famous long-distance test [4].", "- H1. A large, complex, gimballed timekeeper with paired balances and novel anti-friction and compensation ideas; it was trialed at sea to Lisbon [4].\n- H2. A development of H1 that Harrison did not submit to a sea trial after identifying a flaw [4].\n- H3. A further development addressing temperature compensation and oscillator behavior; Harrison continued work on it for years rather than treating it as the final solution [4].\n- H4. A smaller, watch-like timekeeper with a balance and spring. Its Jamaica trial in 1761, followed by later trials and examination, became the most famous stage in Harrison’s pursuit of the Longitude reward [4]."],
  ["Jamaica outcome", "H4 was dispatched on a voyage to the Caribbean to test its ability to carry Greenwich time across the Atlantic. Observers recorded its behavior relative to astronomical determinations at sea and at landfall. The Royal Museums Greenwich account summarizes the voyage and its assessment: H4’s performance demonstrated that a portable timekeeper could meet the Act’s criteria on a real sea passage [4]. A bench note to modern readers: the test had a route, a duration, and a method for comparing the device against reference observations. It was a chronometric trial, not a workshop boast.", "H4 was dispatched on the 1761 voyage to Jamaica. Its performance demonstrated the feasibility of using a portable timekeeper for longitude under the relevant trial conditions, but the result did not end the controversy over the reward. Further testing followed, including the Barbados trial of 1763–1764, Board consideration in 1765, and Royal Observatory testing beginning in 1766 [4]. The important historical point is not a single triumphant voyage but a sequence of increasingly demanding trials."],
];

for (const [label, oldText, newText] of replacements) replaceExact(label, oldText, newText);

replaceRegexOnce(
  "METAS section",
  /METAS Master Chronometer \(industry-described; review-needed\)[\s\S]*?(?=\nReasonable expectations at the bench)/,
  `METAS Master Chronometer (METAS requirements)

METAS is the certifying body for this program. Its published requirements describe certification of fully mechanical watches, focused on chronometric performance, water resistance, magnetic-field resistance, and power reserve. The process uses testing of the movement and finished watch, with the applicant’s testing laboratory independently monitored by METAS. The movement must first satisfy ISO 3159:2009 chronometer criteria, with the relevant tests performed by an ISO/IEC 17025-accredited laboratory.

Key published requirements include:

- The watch is tested in its final configuration as offered for sale.
- The program includes exposure to a 1.5 T (15,000 G) magnetic field; the movement and the finished watch must not stop during the relevant magnetic tests.
- Average daily precision is constrained by watch category: 0 to +5 s/day for category 1a, 0 to +6 s/day for category 1b, and 0 to +7 s/day for category 2.
- The declared power reserve is tested, and the watch must continue to operate for the declared duration.
- Positional instantaneous-rate spread and rate change across the power-reserve test are also subject to published acceptance limits.

The important distinction at the bench is scope. METAS is not merely a movement-rate label: it evaluates the finished watch and adds magnetic, power-reserve, water-resistance, and positional criteria. Exact procedures and acceptance calculations belong to the current METAS requirements document; do not infer them from a timing-machine snapshot.`
);

replaceRegexOnce(
  "brand regimes",
  /Brand-internal regimes \(manufacturer-stated; review-needed\)[\s\S]*?(?=\nTreat such marks as internal quality systems)/,
  `Brand-internal regimes

Manufacturers also operate proprietary quality and certification systems. Their scope should be described separately from ISO standards and third-party certifications.

- Rolex “Superlative Chronometer”: Rolex states that, from 2026, its certification rests on seven pillars: precision, waterproofness, self-winding, autonomy (power reserve), resistance to magnetism, reliability, and sustainability. The finished watch is subjected to the brand’s post-casing precision requirements, with a stated range of -2 to +2 seconds/day. The three additional criteria introduced in 2026 are incorporated across design and manufacturing, while the original four are validated on the finished watch.
- Jaeger-LeCoultre “1000 Hours Control”: Jaeger-LeCoultre states that every watch is tested for up to six weeks, with extensive checks covering positions, power reserve, temperature, movement, and water resistance. The program has evolved over time, so individual procedural details should not be inferred from the program name alone.`
);

replaceRegexOnce(
  "COSC Excellence current details",
  /Any detailed numerical tolerances, duration, specific environmental stresses, or a hard launch year beyond what COSC publishes on that page must be verified from COSC primary sources before publication\. The “2026” reference in industry discussions should be treated as review-needed unless and until COSC’s own communications specify it unambiguously\./,
  `COSC’s 2026 Excellence Chronometer program adds a finished-watch stage after the traditional 15-day movement certification. The Federation of the Swiss Watch Industry reports five additional days of evaluation, including semi-dynamic simulation of average wrist wear for 24 hours, followed by a -2 to +4 seconds/day rate-deviation requirement, a 200-gauss magnetic test, and verification of the declared power reserve. The program was being introduced progressively during 2026, so the exact current submission status should be checked against COSC’s latest publication when a watch is presented as Excellence-certified.`
);

replaceRegexOnce(
  "future observatory wording",
  /- By the late 19th and early 20th centuries, observatories in Europe ran formal trials of pocket and, later, wrist timepieces\. The trials influenced watchmaking practice by rewarding not just accuracy but also consistency over time and conditions\. Specific procedures, venues, and scoring methods require primary-source confirmation and are beyond the scope of the provided source packet\. Treat common references to Kew, Neuchâtel, and other observatories as review-needed pending citation to primary documentation \[9\]\./,
  `- By the late 19th and early 20th centuries, observatories in Europe ran formal timekeeping trials that influenced watchmaking by rewarding performance across defined conditions rather than a single favorable reading. Venue-specific procedures, scoring systems, dates, and participating makers vary by trial and are not summarized here without dedicated archival sourcing.`
);

replaceRegexOnce(
  "COSC Excellence appendix",
  /\| COSC Excellence Chronometer \[3\] \| COSC \| Finished, cased watch \| Review-needed \(COSC page distinguishes scope; durations not specified in provided source\) \| Review-needed \| Review-needed \| Review-needed \| Review-needed \| COSC distinguishes movement certification from finished-watch evaluation \[3\] \|/,
  `| COSC Excellence Chronometer [3] | COSC | Finished, cased watch | Traditional 15-day movement stage plus five additional days for the finished-watch stage | Semi-dynamic finished-watch evaluation includes simulated wear | Finished-watch stage includes its defined magnetic test | -2 to +4 s/day in the finished-watch stage | 200-gauss magnetic check; declared power reserve verification | Additional COSC certification layer introduced during 2026; verify latest COSC submission status when citing current availability. |`
);

replaceRegexOnce(
  "METAS appendix",
  /\| METAS Master Chronometer \(industry-described; review-needed\) \| METAS with participating manufacturers \| Finished, cased watch \| Review-needed \| Review-needed \| Review-needed \| Commonly stated target around 0 to \+5 s\/d \(manufacturer communications; review-needed\) \| Claimed anti-magnetic exposure up to approximately 15,000 gauss \(manufacturer communications; review-needed\) \| Treat all specifics as review-needed without primary sources \|/,
  `| METAS Master Chronometer | METAS with participating manufacturers | Finished, cased watch; movement must also satisfy ISO 3159:2009 chronometer criteria | Multi-cycle program; exact durations are defined in METAS requirements | Six watch positions are used for instantaneous-rate measurements | 1.5 T / 15,000 G magnetic exposure | Average daily precision 0 to +5, +6, or +7 s/day depending on category | Magnetic non-stop criteria, power reserve, rate spread, water-resistance checks, and defined measurement uncertainty | Based on METAS-N001 requirements; consult the current revision for exact cycle sequence and acceptance calculations. |`
);

replaceRegexOnce(
  "Rolex appendix",
  /\| Rolex “Superlative Chronometer” \(manufacturer-stated; review-needed\) \| Manufacturer \| Finished, cased watch \| Review-needed \| Review-needed \| Review-needed \| Commonly cited as -2\/\+2 s\/d \(manufacturer communications; review-needed\) \| Review-needed \| Internal regime; verify from primary sources before citing details \|/,
  `| Rolex “Superlative Chronometer” | Rolex | Finished watch, with additional design/manufacturing controls | Proprietary; current public procedure is brand-specific | Proprietary | Resistance to magnetism is one of the seven current pillars | -2 to +2 s/day stated for the finished watch after casing | 2026 adds magnetism, reliability, and sustainability criteria to precision, waterproofness, self-winding, and autonomy | Proprietary certification; cite Rolex’s current public specification rather than presenting it as ISO/COSC. |`
);

replaceRegexOnce(
  "JLC appendix",
  /\| Jaeger-LeCoultre “1000 Hours” \(manufacturer-stated; review-needed\) \| Manufacturer \| Finished, cased watch \| Commonly described as multi-week test \(review-needed\) \| Review-needed \| Review-needed \| Review-needed \| Review-needed \| Internal regime; verify from primary sources before citing details \|/,
  `| Jaeger-LeCoultre “1000 Hours” | Jaeger-LeCoultre | Finished watch | Up to six weeks, according to JLC | Proprietary | Temperature and environmental checks | Proprietary program-level criteria | Extensive checks of positions, power reserve, temperature, movement, and water resistance | Proprietary quality-control program; do not reduce it to a single tolerance number. |`
);

replaceRegexOnce(
  "historical appendix",
  /\| Historical observatory trials \(review-needed\) \| National observatories \(e\.g\., Kew, Neuchâtel—review-needed\) \| Typically complete watches or regulated movements \(review-needed\) \| Extended, multi-week to multi-month \(review-needed\) \| Multiple \| Multiple \| Scored across multiple parameters \(review-needed\) \| Environmental and handling controls varied by observatory \(review-needed\) \| Historical context requires primary-source verification \[9\] \|/,
  `| Historical observatory trials | National observatories and testing institutions | Varies by trial | Varies by trial | Multiple | Where specified, multiple | Multi-parameter scoring rather than a single reading | Procedures varied by institution and period | General lineage retained; venue-specific claims require dedicated archival sources. |`
);

replaceRegexOnce(
  "tourbillon review wording",
  /Historical literature and later technical analyses attribute both triumphs and disappointments to tourbillons; handle the claims with care and verify with measurements in realistic wearing patterns \(general historical context; review needed\) \[9\]\./,
  `Historical literature contains both positive and negative assessments of tourbillons. Treat modern performance claims as design- and use-case-dependent, and verify them with measurements under realistic wearing patterns.`
);

replaceRegexOnce(
  "materials bench terminology",
  /Cautions \(practitioner conventions; see Review before publication\):/,
  `Cautions (practitioner conventions):`
);

// Publication-facing manuscript must not contain internal unresolved-review sections.
book = book.replace(/\n## Review before publication\n[\s\S]*?(?=\n# Part |\n# Back Matter)/g, "\n");

// Remove obsolete placeholder citation [9] from body, then repurpose the reference slot with exact sources.
book = book.replaceAll("[9]", "");
book = book.replaceAll(
  "[9] Derek Pratt / horological technical literature where general historical context is needed; mark claims for review rather than fabricate specifics.",
  "[9] Federal Institute of Metrology (METAS). METAS-N001, Requirements for certification of movements and mechanical watches resistant to magnetic fields of 1.5 T (15,000 G), version 1.2, approved 12 December 2022."
);
book = book.replaceAll(
  "References: [1] COSC, COSC certifications; [2] COSC, FAQ; [3] COSC, Excellence Chronometer Certified; [4] Royal Museums Greenwich, Harrison’s timekeepers; [5] ISO 3159; [6] George Daniels, Watchmaking; [7] Donald de Carle, The Watch & Clock Maker’s Handbook, Dictionary and Guide; [8] F. J. Britten, The Watch & Clock Maker’s Handbook, Dictionary and Guide.",
  "References: [1] COSC, COSC certifications; [2] COSC, FAQ; [3] COSC, Excellence Chronometer Certified; [4] Royal Museums Greenwich, Harrison’s timekeepers; [5] ISO 3159; [6] George Daniels, Watchmaking; [7] Donald de Carle, Practical Watch Repair; [8] F. J. Britten, The Watch & Clock Maker’s Handbook, Dictionary and Guide; [9] METAS, METAS-N001, version 1.2; [10] Federation of the Swiss Watch Industry, COSC Excellence Chronometer announcement, 12 March 2026; [11] Rolex, New Superlative Chronometer certification, 2026; [12] Jaeger-LeCoultre, 1000 Hour Control."
);

// Replace the standalone Part III/IV bibliography [9] placeholder where present.
book = book.replaceAll(
  "[9] Derek Pratt / horological technical literature where general historical context is needed; mark claims for review rather than fabricate specifics.",
  "[9] Federal Institute of Metrology (METAS). METAS-N001, Requirements for certification of movements and mechanical watches resistant to magnetic fields of 1.5 T (15,000 G), version 1.2. [10] Federation of the Swiss Watch Industry, COSC Excellence Chronometer announcement, 12 March 2026. [11] Rolex, New Superlative Chronometer certification, 2026. [12] Jaeger-LeCoultre, 1000 Hour Control."
);

// Global cleanup of line-end whitespace without touching content.
book = book.replace(/[ \t]+\n/g, "\n");

fs.writeFileSync(path, book);
console.log(`Applied or confirmed ${replacements.length} deterministic Escapement Book QA corrections plus current standards/editorial normalization.`);
