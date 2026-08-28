import fs from "node:fs";

const path = "client/src/content/book.md";
let book = fs.readFileSync(path, "utf8");

function replaceRegexOnce(label, pattern, replacement) {
  const matches = book.match(pattern);
  if (!matches || matches.length !== 1) throw new Error(`${label}: expected 1 match, found ${matches ? matches.length : 0}`);
  book = book.replace(pattern, replacement);
}

function replaceExactOrAssert(label, oldText, newText) {
  const oldCount = book.split(oldText).length - 1;
  const newCount = book.split(newText).length - 1;
  if (oldCount === 0 && newCount === 1) return;
  if (oldCount !== 1) throw new Error(`${label}: expected source once or target once, source=${oldCount}, target=${newCount}`);
  book = book.replace(oldText, newText);
}

replaceRegexOnce(
  "METAS section",
  /METAS Master Chronometer \(industry-described; review-needed\)[\s\S]*?(?=\nBrand-internal regimes)/,
  `METAS Master Chronometer (METAS requirements)\n\nMETAS is the Swiss Federal Institute of Metrology and certifying body for this program. Its published requirements describe certification of fully mechanical watches covering chronometric performance, water resistance, magnetic-field resistance, and power reserve. The movement must first meet the applicable ISO 3159:2009 chronometer criteria, and the testing laboratory is subject to ISO/IEC 17025 accreditation and METAS oversight.\n\nKey published requirements include:\n\n- The watch is evaluated in its final configuration as offered for sale.\n- The program includes exposure to a 1.5 T (15,000 G) magnetic field; the movement and finished watch must meet the program’s non-stopping criteria during the relevant tests.\n- Average daily precision is constrained by watch category: 0 to +5 s/day for category 1a, 0 to +6 s/day for category 1b, and 0 to +7 s/day for category 2.\n- The declared power reserve is verified, together with positional rate behavior and other published acceptance criteria.\n\nAt the bench, the distinction is one of scope: METAS is not merely a movement-rate label. It evaluates the finished watch and combines chronometric, magnetic, water-resistance, and power-reserve requirements. Exact sequences and acceptance calculations belong to the applicable METAS requirements document.`
);

replaceRegexOnce(
  "brand regimes",
  /Brand-internal regimes \(manufacturer-stated; review-needed\)[\s\S]*?(?=\nTreat such marks as internal quality systems)/,
  `Brand-internal regimes\n\nManufacturers also operate proprietary quality and certification systems. Their scope should be described separately from ISO standards and third-party certifications.\n\n- Rolex “Superlative Chronometer”: Rolex states that its current certification rests on seven pillars: precision, waterproofness, self-winding, autonomy, resistance to magnetism, reliability, and sustainability. The finished watch has a stated precision range of -2 to +2 seconds/day after casing. The additional magnetism, reliability, and sustainability criteria were added to the earlier four pillars in 2026.\n- Jaeger-LeCoultre “1000 Hours Control”: Jaeger-LeCoultre states that every watch is tested for up to six weeks, with checks covering positions, power reserve, temperature, movement, and water resistance. It is a proprietary quality-control program, not an ISO or third-party public standard.`
);

replaceRegexOnce(
  "COSC Excellence details",
  /Any detailed numerical tolerances, duration, specific environmental stresses, or a hard launch year beyond what COSC publishes on that page must be verified from COSC primary sources before publication\. The “2026” reference in industry discussions should be treated as review-needed unless and until COSC’s own communications specify it unambiguously\./,
  `COSC’s 2026 Excellence Chronometer program adds a finished-watch stage after the traditional movement certification. The Federation of the Swiss Watch Industry describes five additional days of evaluation, including a 24-hour semi-dynamic simulation of average wrist wear, followed by a -2 to +4 seconds/day rate-deviation requirement, a 200-gauss magnetic test, and verification of the declared power reserve. The program was introduced progressively during 2026; verify the latest COSC publication when citing current availability.`
);

replaceRegexOnce(
  "observatory history",
  /- By the late 19th and early 20th centuries, observatories in Europe ran formal trials of pocket and, later, wrist timepieces\. The trials influenced watchmaking practice by rewarding not just accuracy but also consistency over time and conditions\. Specific procedures, venues, and scoring methods require primary-source confirmation and are beyond the scope of the provided source packet\. Treat common references to Kew, Neuchâtel, and other observatories as review-needed pending citation to primary documentation \[9\]\./,
  `- By the late 19th and early 20th centuries, observatories in Europe ran formal timekeeping trials that influenced watchmaking by rewarding performance across defined conditions rather than a single favorable reading. Venue-specific procedures, scoring systems, dates, and participating makers vary by trial and are not summarized here without dedicated archival sourcing.`
);

replaceRegexOnce(
  "COSC Excellence appendix",
  /\| COSC Excellence Chronometer \[3\] \| COSC \| Finished, cased watch \| Review-needed \(COSC page distinguishes scope; durations not specified in provided source\) \| Review-needed \| Review-needed \| Review-needed \| Review-needed \| COSC distinguishes movement certification from finished-watch evaluation \[3\] \|/,
  `| COSC Excellence Chronometer [3] | COSC | Finished, cased watch | Traditional 15-day movement stage plus five additional days for the finished-watch stage | Semi-dynamic finished-watch evaluation includes simulated wear | 200-gauss magnetic check in the finished-watch stage | -2 to +4 s/day in the finished-watch stage | Declared power-reserve verification and additional finished-watch evaluation | Additional COSC certification layer introduced during 2026; verify the current COSC publication for availability and exact submission status. |`
);

replaceRegexOnce(
  "METAS appendix",
  /\| METAS Master Chronometer \(industry-described; review-needed\) \| METAS with participating manufacturers \| Finished, cased watch \| Review-needed \| Review-needed \| Review-needed \| Commonly stated target around 0 to \+5 s\/d \(manufacturer communications; review-needed\) \| Claimed anti-magnetic exposure up to approximately 15,000 gauss \(manufacturer communications; review-needed\) \| Treat all specifics as review-needed without primary sources \|/,
  `| METAS Master Chronometer | METAS with participating manufacturers | Finished, cased watch; movement must also satisfy ISO 3159:2009 criteria | Multi-cycle program; consult METAS-N001 for exact sequence | Six positions are used for instantaneous-rate measurements | 1.5 T / 15,000 G magnetic exposure | 0 to +5, +6, or +7 s/day depending on category | Magnetic non-stop criteria, power reserve, positional behavior, and water-resistance requirements | Third-party metrology certification; consult the applicable current METAS requirements document for exact calculations. |`
);

replaceRegexOnce(
  "Rolex appendix",
  /\| Rolex “Superlative Chronometer” \(manufacturer-stated; review-needed\) \| Manufacturer \| Finished, cased watch \| Review-needed \| Review-needed \| Review-needed \| Commonly cited as -2\/\+2 s\/d \(manufacturer communications; review-needed\) \| Review-needed \| Internal regime; verify from primary sources before citing details \|/,
  `| Rolex “Superlative Chronometer” | Rolex | Finished watch | Proprietary | Proprietary | Magnetism is one of the current seven pillars | -2 to +2 s/day stated for the finished watch after casing | 2026 adds magnetism, reliability, and sustainability to precision, waterproofness, self-winding, and autonomy | Proprietary manufacturer certification; do not present it as ISO/COSC. |`
);

replaceRegexOnce(
  "JLC appendix",
  /\| Jaeger-LeCoultre “1000 Hours” \(manufacturer-stated; review-needed\) \| Manufacturer \| Finished, cased watch \| Commonly described as multi-week test \(review-needed\) \| Review-needed \| Review-needed \| Review-needed \| Review-needed \| Internal regime; verify from primary sources before citing details \|/,
  `| Jaeger-LeCoultre “1000 Hours” | Jaeger-LeCoultre | Finished watch | Up to six weeks | Proprietary | Temperature and environmental checks | Proprietary criteria | Checks positions, power reserve, temperature, movement, and water resistance | Proprietary quality-control program; do not reduce it to a single tolerance number. |`
);

replaceRegexOnce(
  "historical appendix",
  /\| Historical observatory trials \(review-needed\) \| National observatories \(e\.g\., Kew, Neuchâtel—review-needed\) \| Typically complete watches or regulated movements \(review-needed\) \| Extended, multi-week to multi-month \(review-needed\) \| Multiple \| Multiple \| Scored across multiple parameters \(review-needed\) \| Environmental and handling controls varied by observatory \(review-needed\) \| Historical context requires primary-source verification \[9\] \|/,
  `| Historical observatory trials | National observatories and testing institutions | Varies by trial | Varies by trial | Multiple | Where specified, multiple | Multi-parameter scoring | Procedures varied by institution and period | General lineage retained; venue-specific claims require dedicated archival sources. |`
);

replaceRegexOnce(
  "tourbillon note",
  /Historical literature and later technical analyses attribute both triumphs and disappointments to tourbillons; handle the claims with care and verify with measurements in realistic wearing patterns \(general historical context; review needed\) \[9\]\./,
  `Historical literature contains both positive and negative assessments of tourbillons. Treat modern performance claims as design- and use-case-dependent, and verify them with measurements under realistic wearing patterns.`
);

// Remove manuscript-internal production notes; those belong in BOOK_QA_REGISTER.md.
book = book.replace(/\n## Review before publication\n[\s\S]*?(?=\n# Part |\n# Back Matter)/g, "\n");

// Replace the non-bibliographic placeholder with identified sources in every occurrence.
book = book.replaceAll(
  "[9] Derek Pratt / horological technical literature where general historical context is needed; mark claims for review rather than fabricate specifics.",
  "[9] Federal Institute of Metrology (METAS), *METAS-N001*, Requirements for certification of movements and mechanical watches resistant to magnetic fields of 1.5 T (15,000 G).\n[10] Federation of the Swiss Watch Industry, COSC Excellence Chronometer announcement, 12 March 2026.\n[11] Rolex, current Superlative Chronometer specification, 2026.\n[12] Jaeger-LeCoultre, 1000 Hour Control."
);

book = book.replace(/[ \t]+\n/g, "\n");

fs.writeFileSync(path, book);
console.log("Applied Escapement Book QA v2 current-source, historical, appendix, and publication-note corrections.");
