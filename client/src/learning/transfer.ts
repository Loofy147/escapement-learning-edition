import type { LearningProgressInput } from "./learningIntelligence";
import { activityAnnotations } from "./learningAnnotations";

export type TransferOption = { label: string; rationale: string; correct?: boolean };
export type TransferReasoningRubric = { requiredSignals: string[]; misconceptionId: string };
export type TransferTask = { id: string; conceptIds: string[]; chapterId: string; prompt: string; expectedReasoning: string; skill: "diagnose" | "predict" | "compare" | "justify"; options: TransferOption[]; correctOption: number; reasoningRubric?: TransferReasoningRubric };

export const transferTasks: TransferTask[] = [
  { id: "transfer-rate-position", conceptIds: ["rate", "position"], chapterId: "ch-18", prompt: "A watch gains 6 s/d dial-up, loses 3 s/d crown-down, and shows stable amplitude in both positions. What does the spread suggest, and what should you inspect next?", expectedReasoning: "Treat the positional spread as evidence of orientation-dependent behavior rather than cancelling it with an average; inspect poise, pivots, hairspring centering, and position-specific friction.", skill: "diagnose", correctOption: 0, options: [
    { label: "Investigate position-dependent behavior before averaging the rates.", rationale: "Correct: the spread itself is diagnostic evidence.", correct: true },
    { label: "Average the two rates and regulate only the mean.", rationale: "An average can hide the wear-time behavior the spread reveals." },
    { label: "Ignore position because amplitude is stable.", rationale: "Stable amplitude does not prove position has no effect on rate." },
  ] },
  { id: "transfer-escapement-energy", conceptIds: ["escapement", "rate"], chapterId: "ch-05", prompt: "After service, amplitude falls while the escapement still locks and releases correctly. Which relationship should you investigate before changing regulation?", expectedReasoning: "Distinguish timing regulation from energy delivery; investigate friction, lubrication, banking, and impulse efficiency before treating rate adjustment as the primary fix.", skill: "diagnose", correctOption: 0, options: [
    { label: "Energy delivery and losses in the impulse/friction path.", rationale: "Correct: reduced amplitude points first toward the energy path.", correct: true },
    { label: "Only the regulator setting.", rationale: "Regulation changes rate; it does not explain every amplitude loss." },
    { label: "The dial typography.", rationale: "The display has no causal relationship to amplitude." },
  ] },
  { id: "transfer-certification-scope", conceptIds: ["chronometer", "COSC"], chapterId: "ch-12", prompt: "A movement passes a movement-only chronometer test but performs differently after casing. What claim is supported, and what claim needs additional evidence?", expectedReasoning: "The movement-level certification supports the defined movement test claim; it does not by itself prove identical finished-watch performance under wear conditions.", skill: "justify", correctOption: 0, reasoningRubric: { requiredSignals: ["movement", "test", "finished", "watch"], misconceptionId: "M-COSC-001" }, options: [
    { label: "The movement test result is supported; finished-watch performance needs its own evidence.", rationale: "Correct: claim scope follows the object and conditions tested.", correct: true },
    { label: "The certification proves identical behavior after casing.", rationale: "That extends a movement-only result beyond its stated scope." },
    { label: "No timing claim can ever be made from certification.", rationale: "The defined movement-level claim is precisely what the test supports." },
  ] },
];

export type TransferReadiness = { taskId: string; ready: boolean; reason: string; prerequisiteScore: number };
export type TransferEvaluation = { taskId: string; selectedOption: number; correct: boolean; score: number; feedback: string; mode?: "choice" | "reasoning"; matchedSignals?: string[] };
export function transferReadiness(task: TransferTask, progress: LearningProgressInput): TransferReadiness {
  const conceptEvidence = task.conceptIds.map((conceptId) => {
    const activityIds = Object.entries(activityAnnotations).filter(([, annotation]) => annotation.conceptIds.includes(conceptId)).map(([activityId]) => activityId);
    if (!activityIds.length) return 0;
    return Math.max(...activityIds.map((activityId) => progress.evidence?.confidence?.[activityId] ?? 0));
  });
  const prerequisiteScore = conceptEvidence.length ? conceptEvidence.reduce((sum, value) => sum + value, 0) / conceptEvidence.length : 0;
  const ready = prerequisiteScore >= 0.67;
  return { taskId: task.id, ready, prerequisiteScore, reason: ready ? "Core concept evidence is strong enough to attempt a novel-context task." : "Strengthen prerequisite concept evidence before using transfer as the primary next step." };
}
export function gradeTransferTask(task: TransferTask, selectedOption: number | null): TransferEvaluation {
  const correct = selectedOption === task.correctOption;
  return { taskId: task.id, selectedOption: selectedOption ?? -1, correct, score: correct ? 1 : 0, mode: "choice", feedback: correct ? task.options[task.correctOption].rationale : "Reconsider the evidence. " + task.options[task.correctOption].rationale };
}

export function gradeTransferReasoning(task: TransferTask, response: string): TransferEvaluation {
  const rubric = task.reasoningRubric;
  if (!rubric) return { taskId: task.id, selectedOption: -1, correct: false, score: 0, mode: "reasoning", matchedSignals: [], feedback: "No reasoning rubric is defined for this task." };
  const normalized = response.trim().toLowerCase();
  const matchedSignals = rubric.requiredSignals.filter((signal) => normalized.includes(signal.toLowerCase()));
  const score = rubric.requiredSignals.length ? matchedSignals.length / rubric.requiredSignals.length : 0;
  const correct = score >= 0.75;
  return {
    taskId: task.id, selectedOption: -1, correct, score, mode: "reasoning", matchedSignals,
    feedback: correct ? "The response includes the core evidence signals required by the rubric." : "The response is missing key evidence signals. Revisit the tested object, conditions, and claim scope.",
  };
}