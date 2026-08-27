import type { Exercise, Concept } from "../content/model";

/**
 * Canonical, explicit activity → concept mapping.
 *
 * Do not infer concept membership from chapter membership: a chapter can
 * contain several ideas, while an activity should measure a deliberately
 * chosen subset of them.
 */
export const activityConceptMap: Record<string, string[]> = {
  "ex-apprenticeship": ["rate"],
  "ex-oscillator": ["isochronism"],
  "ex-rate": ["rate"],
  "ex-longitude": ["rate"],
  "ex-sequence": ["escapement"],
  "ex-classify": ["escapement"],
  "ex-complication": ["rate"],
  "ex-hairspring": ["isochronism"],
  "ex-jewels": ["friction"],
  "ex-environment": ["amplitude"],
  "ex-material-role": ["friction"],
  "ex-chronometer": ["chronometer"],
  "ex-cosc-scope": ["COSC"],
  "ex-observatory": ["chronometer"],
  "ex-bench": ["friction"],
  "ex-finished-watch": ["rate"],
  "ex-service": ["friction"],
  "ex-restoration": ["friction"],
  "ex-technology": ["rate"],
  "ex-composite-scope": ["chronometer"],
  "ex-independent": ["rate"],
  "ex-future-test": ["amplitude"],
  "ex-experiment": ["position", "rate", "amplitude"],
};

export function learningActivitiesFromCatalog(exercises: Exercise[], concepts: Concept[]) {
  const validConceptIds = new Set(concepts.map((concept) => concept.id));
  return exercises.map((exercise) => {
    const conceptIds = activityConceptMap[exercise.id];
    if (!conceptIds || conceptIds.length === 0) throw new Error(`Missing explicit concept mapping for activity: ${exercise.id}`);
    const unknown = conceptIds.filter((conceptId) => !validConceptIds.has(conceptId));
    if (unknown.length > 0) throw new Error(`Activity ${exercise.id} references unknown concepts: ${unknown.join(", ")}`);
    return { id: exercise.id, chapterId: exercise.chapterId, conceptIds };
  });
}
