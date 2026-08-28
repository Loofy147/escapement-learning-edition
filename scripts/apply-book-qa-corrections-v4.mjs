import fs from "node:fs";

const path = "client/src/content/book.md";
let book = fs.readFileSync(path, "utf8");

function replaceExact(label, oldText, newText) {
  const n = book.split(oldText).length - 1;
  const m = book.split(newText).length - 1;
  if (n === 0 && m === 1) return;
  if (n !== 1) throw new Error(`${label}: expected source once or target once; source=${n}, target=${m}`);
  book = book.replace(oldText, newText);
}

replaceExact(
  "longitude methods context",
  "A reliable portable timekeeper set to a known reference could, in principle, give longitude from the time difference. But the sea punished every defect in a watch: constant motion, temperature swings, humidity, and the inability to mount a pendulum [4][8].",
  "A reliable portable timekeeper set to a known reference could, in principle, give longitude from the time difference. But this was not the only serious route: astronomical methods such as lunar-distance observations remained important alternatives. The sea punished every defect in a watch, exposing the practical trade-off between portable timekeeping and astronomical observation [4][8]."
);

replaceExact(
  "bench scope guardrail",
  "A movement is not repaired by enthusiasm. It is repaired by observation, cleanliness, controlled force, and a willingness to stop when the evidence is insufficient.",
  "A movement is not repaired by enthusiasm. It is repaired by observation, cleanliness, controlled force, and a willingness to stop when the evidence is insufficient. The procedures in this part are illustrative practitioner guidance, not universal service specifications; movement-specific tolerances, oils, tools, safety procedures, and adjustment methods must come from the applicable manufacturer documentation and qualified training."
);

replaceExact(
  "future standards qualifier",
  "The next generation of standards may become more continuous and more transparent.",
  "The following are possible future directions proposed by the author; they are not presented as announced policy by standards bodies or manufacturers. The next generation of standards may become more continuous and more transparent."
);

replaceExact(
  "conclusion future qualifier",
  "The future standard may also include maintainability.",
  "A possible future standard could also include maintainability. This is a proposal for discussion, not a current published requirement."
);

// Idempotency and publication-hygiene guards for repeated workflow runs.
book = book.replace(/7\. Metals and Alloys in the Movement(?: in the Movement)+/g, "7. Metals and Alloys in the Movement");

const futureQualifier = "The following are possible future directions proposed by the author; they are not presented as announced policy by standards bodies or manufacturers.";
book = book.replace(new RegExp(`(?:${futureQualifier.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s*){2,}`, "g"), `${futureQualifier} `);

const benchGuardrail = "The procedures in this part are illustrative practitioner guidance, not universal service specifications; movement-specific tolerances, oils, tools, safety procedures, and adjustment methods must come from the applicable manufacturer documentation and qualified training.";
book = book.replace(new RegExp(`(?:${benchGuardrail.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s*){2,}`, "g"), `${benchGuardrail} `);

book = book.replace(/\n## Review before publication[\s\S]*?(?=\n# Part V — Practice: At the Bench)/, "\n");
book = book.replace(/[ \t]+\n/g, "\n");

fs.writeFileSync(path, book);
console.log("Applied or confirmed Escapement Book QA v4 contextual, scope, and publication-hygiene corrections.");
