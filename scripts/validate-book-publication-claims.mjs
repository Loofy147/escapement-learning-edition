import fs from "node:fs";

const path = "client/src/content/book.md";
const source = fs.readFileSync(path, "utf8");

const forbidden = [
  {
    text: "200–320° typical modern range",
    reason: "unbounded general amplitude range",
  },
  {
    text: "Derek Pratt / horological technical literature",
    reason: "incomplete bibliographic reference",
  },
  {
    text: "Review before publication",
    reason: "internal editorial QA must not ship in the manuscript",
  },
];

const failures = forbidden.filter((item) => source.includes(item.text));

if (failures.length) {
  for (const failure of failures) {
    console.error(`BOOK_QA_FAIL: ${failure.reason}: ${failure.text}`);
  }
  process.exit(1);
}

console.log("BOOK_QA_CLAIM_GUARD_PASS");
