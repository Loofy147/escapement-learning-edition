import type { Exercise, Concept } from "../content/model";

export type Misconception = {
  id: string;
  conceptIds: string[];
  label: string;
  correction: string;
};

export type ActivityAnnotation = {
  conceptIds: string[];
  misconceptionId: string | null;
};

export const misconceptions: Misconception[] = [
  { id: "M-PRECISION-001", conceptIds: ["rate"], label: "Stable error is mistaken for random instability.", correction: "Separate consistency between readings from closeness to the reference." },
  { id: "M-ESCAPEMENT-001", conceptIds: ["escapement"], label: "The escapement is treated as a continuous gear mesh.", correction: "Treat locking, release, and impulse as a timed energy-gating sequence." },
  { id: "M-POSITION-001", conceptIds: ["position", "rate", "amplitude"], label: "A positional average is treated as if it removes positional behavior.", correction: "Inspect the spread between positions before treating an average rate as representative." },
  { id: "M-ISOCHRONISM-001", conceptIds: ["isochronism"], label: "One amplitude reading is treated as proof of isochronism.", correction: "Compare period stability across changing amplitude rather than inferring it from one observation." },
  { id: "M-AMPLITUDE-001", conceptIds: ["amplitude"], label: "Amplitude is treated as a decorative number rather than a diagnostic signal.", correction: "Interpret amplitude alongside energy delivery, friction, and positional behavior." },
  { id: "M-CHRONOMETER-001", conceptIds: ["chronometer"], label: "A certification label is treated as a universal performance guarantee.", correction: "Read the tested object, protocol, conditions, and tolerances before extending the claim." },
  { id: "M-COSC-001", conceptIds: ["COSC"], label: "A movement-level regime is assumed to describe every finished-watch condition.", correction: "Keep the certification scope aligned with what was actually measured." },
  { id: "M-FRICTION-001", conceptIds: ["friction"], label: "A timing error is attributed to regulation before considering friction.", correction: "Use amplitude, positional behavior, and inspection evidence to distinguish causes." },
];

export const activityAnnotations: Record<string, ActivityAnnotation> = {
  "ex-apprenticeship": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-oscillator": { conceptIds: ["isochronism"], misconceptionId: "M-ISOCHRONISM-001" },
  "ex-rate": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-longitude": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-sequence": { conceptIds: ["escapement"], misconceptionId: "M-ESCAPEMENT-001" },
  "ex-classify": { conceptIds: ["escapement"], misconceptionId: "M-ESCAPEMENT-001" },
  "ex-complication": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-hairspring": { conceptIds: ["isochronism"], misconceptionId: "M-ISOCHRONISM-001" },
  "ex-jewels": { conceptIds: ["friction"], misconceptionId: "M-FRICTION-001" },
  "ex-environment": { conceptIds: ["amplitude"], misconceptionId: "M-AMPLITUDE-001" },
  "ex-material-role": { conceptIds: ["friction"], misconceptionId: "M-FRICTION-001" },
  "ex-chronometer": { conceptIds: ["chronometer"], misconceptionId: "M-CHRONOMETER-001" },
  "ex-cosc-scope": { conceptIds: ["COSC"], misconceptionId: "M-COSC-001" },
  "ex-observatory": { conceptIds: ["chronometer"], misconceptionId: "M-CHRONOMETER-001" },
  "ex-bench": { conceptIds: ["friction"], misconceptionId: "M-FRICTION-001" },
  "ex-finished-watch": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-service": { conceptIds: ["friction"], misconceptionId: "M-FRICTION-001" },
  "ex-restoration": { conceptIds: ["friction"], misconceptionId: "M-FRICTION-001" },
  "ex-technology": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-composite-scope": { conceptIds: ["chronometer"], misconceptionId: "M-CHRONOMETER-001" },
  "ex-independent": { conceptIds: ["rate"], misconceptionId: "M-PRECISION-001" },
  "ex-future-test": { conceptIds: ["amplitude"], misconceptionId: "M-AMPLITUDE-001" },
  "ex-experiment": { conceptIds: ["position", "rate", "amplitude"], misconceptionId: "M-POSITION-001" },
};

export function validateLearningAnnotations(exercises: Exercise[], concepts: Concept[]) {
  const conceptIds = new Set(concepts.map((concept) => concept.id));
  const misconceptionIds = new Set(misconceptions.map((item) => item.id));
  for (const exercise of exercises) {
    const annotation = activityAnnotations[exercise.id];
    if (!annotation) throw new Error(`Missing learning annotation for activity: ${exercise.id}`);
    const unknownConcept = annotation.conceptIds.filter((id) => !conceptIds.has(id));
    if (unknownConcept.length) throw new Error(`Activity ${exercise.id} references unknown concepts: ${unknownConcept.join(", ")}`);
    if (!annotation.misconceptionId || !misconceptionIds.has(annotation.misconceptionId)) throw new Error(`Activity ${exercise.id} references unknown misconception: ${annotation.misconceptionId ?? "missing"}`);
  }
  return true;
}
