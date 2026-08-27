import type { Concept, Exercise } from "../content/model";
import { learningActivitiesFromCatalog } from "./activityConceptMap";
import { misconceptions } from "./learningAnnotations";

export type MisconceptionId = `M-${string}-${string}`;
export type ConceptGraphNode = {
  id: string;
  label: string;
  chapterId: string;
  prerequisites: string[];
  relatedConcepts: string[];
  applications: string[];
  activityIds: string[];
  misconceptionIds: MisconceptionId[];
  transferTasks: string[];
};

const graphMetadata: Record<string, Omit<ConceptGraphNode, "id" | "label" | "chapterId" | "activityIds">> = {
  isochronism: { prerequisites: ["rate"], relatedConcepts: ["amplitude"], applications: ["Compare period stability across changing amplitude"], misconceptionIds: ["M-ISOCHRONISM-001"], transferTasks: ["Explain why equal periods cannot be assumed from one amplitude reading"] },
  rate: { prerequisites: [], relatedConcepts: ["position"], applications: ["Read seconds-per-day observations against a reference"], misconceptionIds: ["M-PRECISION-001"], transferTasks: ["Separate accuracy from repeatability in a new measurement set"] },
  amplitude: { prerequisites: ["rate"], relatedConcepts: ["rate", "friction"], applications: ["Use positional spread as a diagnostic signal"], misconceptionIds: ["M-AMPLITUDE-001"], transferTasks: ["Propose a measurement that distinguishes energy loss from positional effect"] },
  escapement: { prerequisites: [], relatedConcepts: ["amplitude", "friction"], applications: ["Describe how energy is metered and impulse is delivered"], misconceptionIds: ["M-ESCAPEMENT-001"], transferTasks: ["Diagnose whether a timing change points to release, lock, or impulse"] },
  chronometer: { prerequisites: ["rate"], relatedConcepts: ["COSC"], applications: ["Interpret a tested performance claim within its protocol"], misconceptionIds: ["M-CHRONOMETER-001"], transferTasks: ["State what a certification result supports and what it does not"] },
  COSC: { prerequisites: ["chronometer"], relatedConcepts: ["chronometer"], applications: ["Read the scope of a movement-level certification"], misconceptionIds: ["M-COSC-001"], transferTasks: ["Compare a test protocol with a wearer-level claim"] },
  position: { prerequisites: ["rate"], relatedConcepts: ["amplitude", "friction"], applications: ["Investigate orientation-dependent timekeeping behavior"], misconceptionIds: ["M-POSITION-001"], transferTasks: ["Design a small positional test before averaging observations"] },
  friction: { prerequisites: [], relatedConcepts: ["amplitude", "escapement"], applications: ["Connect interface loss to service diagnosis"], misconceptionIds: ["M-FRICTION-001"], transferTasks: ["Choose a measurement that separates friction from a regulation error"] },
};

export function buildConceptGraph(concepts: Concept[], exercises: Exercise[]): ConceptGraphNode[] {
  const conceptIds = new Set(concepts.map((concept) => concept.id));
  const mappedActivities = learningActivitiesFromCatalog(exercises, concepts);
  const validMisconceptions = new Set(misconceptions.map((item) => item.id));
  return concepts.map((concept) => {
    const metadata = graphMetadata[concept.id];
    if (!metadata) throw new Error(`Missing concept graph metadata for concept: ${concept.id}`);
    const activityIds = mappedActivities.filter((activity) => activity.conceptIds.includes(concept.id)).map((activity) => activity.id);
    const references = [...metadata.prerequisites, ...metadata.relatedConcepts];
    const unknownConcepts = references.filter((id) => !conceptIds.has(id));
    if (unknownConcepts.length) throw new Error(`Concept ${concept.id} references unknown concepts: ${unknownConcepts.join(", ")}`);
    const unknownMisconceptions = metadata.misconceptionIds.filter((id) => !validMisconceptions.has(id));
    if (unknownMisconceptions.length) throw new Error(`Concept ${concept.id} references unknown misconceptions: ${unknownMisconceptions.join(", ")}`);
    if (!metadata.misconceptionIds.length || !metadata.transferTasks.length) throw new Error(`Concept ${concept.id} needs misconception and transfer metadata`);
    return { id: concept.id, label: concept.label, chapterId: concept.chapterId, ...metadata, activityIds };
  });
}

export function buildMisconceptionState(graph: ConceptGraphNode[], evidence: Record<string, number> = {}) {
  return graph.flatMap((concept) => concept.misconceptionIds.map((id) => ({ id, conceptId: concept.id, occurrences: concept.activityIds.reduce((sum, activityId) => sum + (evidence[activityId] || 0), 0), needsRemediation: concept.activityIds.some((activityId) => (evidence[activityId] || 0) > 0) })));
}
