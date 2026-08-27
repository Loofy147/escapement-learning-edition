import type { LearningProgressInput } from "./learningIntelligence";

export type TransferTask = {
  id: string;
  conceptIds: string[];
  chapterId: string;
  prompt: string;
  expectedReasoning: string;
  skill: "diagnose" | "predict" | "compare" | "justify";
};

export const transferTasks: TransferTask[] = [
  {
    id: "transfer-rate-position",
    conceptIds: ["rate", "position"],
    chapterId: "ch-18",
    prompt: "A watch gains 6 s/d dial-up, loses 3 s/d crown-down, and shows stable amplitude in both positions. What does the spread suggest, and what would you inspect next?",
    expectedReasoning: "Treat the positional spread as evidence of orientation-dependent behavior rather than cancelling it with an average; inspect poise, pivots, hairspring centering, and position-specific friction.",
    skill: "diagnose",
  },
  {
    id: "transfer-escapement-energy",
    conceptIds: ["escapement", "rate"],
    chapterId: "ch-05",
    prompt: "After service, amplitude falls while the escapement still locks and releases correctly. Which system relationship should you investigate before changing regulation?",
    expectedReasoning: "Distinguish timing regulation from energy delivery; investigate friction, lubrication, banking, and impulse efficiency before treating rate adjustment as the primary fix.",
    skill: "diagnose",
  },
  {
    id: "transfer-certification-scope",
    conceptIds: ["chronometer", "COSC"],
    chapterId: "ch-12",
    prompt: "A movement passes a movement-only chronometer test but performs differently after casing. What claim can you safely make, and what claim needs additional evidence?",
    expectedReasoning: "The movement-level certification supports the defined movement test claim; it does not by itself prove identical finished-watch performance under wear conditions.",
    skill: "justify",
  },
];

export type TransferReadiness = {
  taskId: string;
  ready: boolean;
  reason: string;
  prerequisiteScore: number;
};

export function transferReadiness(task: TransferTask, progress: LearningProgressInput): TransferReadiness {
  const confidence = task.conceptIds.map((conceptId) => {
    const values = Object.entries(progress.evidence?.confidence ?? {}).filter(([id]) => id.includes(conceptId));
    return values.length ? Math.max(...values.map(([, value]) => value)) : 0;
  });
  const prerequisiteScore = confidence.length ? confidence.reduce((sum, value) => sum + value, 0) / confidence.length : 0;
  const ready = prerequisiteScore >= 0.67;
  return {
    taskId: task.id,
    ready,
    prerequisiteScore,
    reason: ready
      ? "Core concept evidence is strong enough to attempt a novel-context task."
      : "Strengthen prerequisite concept evidence before using transfer as the primary next step.",
  };
}
