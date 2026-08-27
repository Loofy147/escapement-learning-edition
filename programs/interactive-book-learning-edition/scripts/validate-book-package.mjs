#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || process.cwd();
const required = ["book.config.json", "chapters.json", "concepts.json", "activities.json"];
const errors = [];
for (const file of required) {
  const target = path.join(root, file);
  if (!fs.existsSync(target)) errors.push(`Missing required file: ${file}`);
}
const configPath = path.join(root, "book.config.json");
if (fs.existsSync(configPath)) {
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  for (const field of ["id", "title", "author", "language", "sourceVersion"]) {
    if (!config[field] || String(config[field]).startsWith("replace-with")) errors.push(`Book config needs a real ${field}.`);
  }
}
for (const file of ["chapters.json", "concepts.json", "activities.json"]) {
  const target = path.join(root, file);
  if (!fs.existsSync(target)) continue;
  const rows = JSON.parse(fs.readFileSync(target, "utf8"));
  if (!Array.isArray(rows) || rows.length === 0) errors.push(`${file} must be a non-empty JSON array.`);
  for (const row of rows || []) {
    if (!row.id) errors.push(`${file} contains a record without id.`);
    if (file === "activities.json") {
      const allowed = ["choice", "sequence", "classification", "experiment", "prediction"];
      if (!allowed.includes(row.type)) errors.push(`${file} activity ${row.id || "(unknown)"} has unsupported type: ${row.type}.`);
      for (const field of ["chapterId", "prompt", "explanation", "misconception", "hint", "sourceAnchor"]) if (!row[field]) errors.push(`${file} activity ${row.id || "(unknown)"} needs ${field}.`);
      if (["choice", "prediction", "sequence", "classification"].includes(row.type) && (!Array.isArray(row.options) || row.options.length === 0)) errors.push(`${file} activity ${row.id || "(unknown)"} needs non-empty options.`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Book package ready: ${root}`);
