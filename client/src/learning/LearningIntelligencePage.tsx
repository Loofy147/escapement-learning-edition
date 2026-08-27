import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Brain, CheckCircle2, Cloud, RefreshCw, TriangleAlert } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { bookChapters, bookConcepts, bookExercises } from "../content/book.config";
import { learningActivitiesFromCatalog } from "./activityConceptMap";
import { buildConceptGraph, buildMisconceptionState } from "./conceptGraph";
import { activityLearningState, buildConceptLearningStates, recommendNextLearningAction } from "./learningIntelligence";
import { misconceptions } from "./learningAnnotations";
import { gradeTransferTask, transferReadiness, transferTasks } from "./transfer";
import { emptyLearningState, mergeLearningStates, normalizeLearningState, recordRetrievalReview, recordTransferAttempt, type PersistedLearningState } from "./learningState";
import { trpc } from "@/lib/trpc";
import type { LearningProgressInput } from "./learningIntelligence";

const emptyProgress: LearningProgressInput = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", evidence: {} };
const activityInputs = learningActivitiesFromCatalog(bookExercises, bookConcepts);
const conceptGraph = buildConceptGraph(bookConcepts, bookExercises);
const conceptInputs = conceptGraph.map((concept) => ({ id: concept.id, label: concept.label, chapterId: concept.chapterId }));

function readProgress(): LearningProgressInput {
  try { const raw = localStorage.getItem("escapement-progress"); return raw ? { ...emptyProgress, ...JSON.parse(raw) } : emptyProgress; } catch { return emptyProgress; }
}
function readLearningState(): PersistedLearningState {
  try { return normalizeLearningState(JSON.parse(localStorage.getItem("escapement-learning-state") || "null")); } catch { return emptyLearningState; }
}

export default function LearningIntelligencePage() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const remoteLearning = trpc.learning.get.useQuery(undefined, { enabled: isAuthenticated, staleTime: 60_000 });
  const syncLearning = trpc.learning.upsert.useMutation();
  const [progress] = useState(readProgress);
  const [learningState, setLearningState] = useState(readLearningState);
  const [selectedConceptId, setSelectedConceptId] = useState(conceptGraph[0]?.id ?? "");
  const [transferSelections, setTransferSelections] = useState<Record<string, number | null>>({});
  const [transferFeedback, setTransferFeedback] = useState<Record<string, string>>({});

  useEffect(() => { localStorage.setItem("escapement-learning-state", JSON.stringify(learningState)); }, [learningState]);

  useEffect(() => {
    if (remoteLearning.data === undefined) return;
    const remote = normalizeLearningState(remoteLearning.data);
    setLearningState((local) => mergeLearningStates(local, remote));
  }, [remoteLearning.data]);

  useEffect(() => {
    if (!isAuthenticated || authLoading) return;
    const timer = window.setTimeout(() => syncLearning.mutate({ state: JSON.stringify(learningState) }), 400);
    return () => window.clearTimeout(timer);
  }, [learningState, isAuthenticated, authLoading]);

  const states = useMemo(() => buildConceptLearningStates(conceptInputs, activityInputs, progress), [progress]);
  const misconceptionStates = useMemo(() => buildMisconceptionState(conceptGraph, progress.evidence?.misconception || {}), [progress]);
  const action = useMemo(() => recommendNextLearningAction(conceptInputs, activityInputs, progress), [progress]);
  const attention = useMemo(() => activityInputs.map((activity) => activityLearningState(activity.id, progress)).filter((state) => state.attempts > 0 && state.needsRemediation).sort((a, b) => a.score - b.score).slice(0, 5), [progress]);
  const selectedConcept = conceptGraph.find((concept) => concept.id === selectedConceptId) ?? conceptGraph[0];
  const selectedState = states.find((state) => state.conceptId === selectedConcept?.id);

  const retrievalQueue = useMemo(() => activityInputs.map((activity) => {
    const saved = learningState.retrieval[activity.id];
    const dueAt = saved?.dueAt ?? 0;
    return {
      activityId: activity.id,
      dueAt,
      due: !saved || Date.now() >= dueAt,
      intervalDays: saved?.intervalDays ?? 0,
      reviews: saved?.reviews ?? 0,
      correctReviews: saved?.correctReviews ?? 0,
    };
  }).sort((a, b) => Number(b.due) - Number(a.due) || a.dueAt - b.dueAt), [learningState]);

  function attemptTransfer(taskId: string, option: number) {
    const task = transferTasks.find((item) => item.id === taskId);
    if (!task) return;
    const evaluation = gradeTransferTask(task, option);
    setTransferSelections((current) => ({ ...current, [taskId]: option }));
    setTransferFeedback((current) => ({ ...current, [taskId]: evaluation.feedback }));
    setLearningState((current) => recordTransferAttempt(current, taskId, evaluation.correct));
  }

  function review(activityId: string, correct: boolean) {
    setLearningState((current) => recordRetrievalReview(current, activityId, correct));
  }

  const bandLabel: Record<string, string> = { unseen: "Not yet encountered", introduced: "Needs support", developing: "Developing", stable: "Stable", mastered: "Repeated evidence" };
  const actionLabel = action.kind === "remediate" ? "Remediate a weak point" : action.kind === "retrieve" ? "Retrieve before advancing" : action.kind === "advance" ? "Advance to a new chapter" : action.kind === "introduce" ? "Introduce a new concept" : "Test transfer";

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10 text-slate-900">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Learning intelligence</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">What you understand, and what to do next.</h1><p className="mt-3 max-w-3xl text-slate-600">A deterministic learner model now connects evidence, concepts, misconceptions, transfer, and spaced retrieval.</p></div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm"><Cloud size={15} /> {isAuthenticated ? (syncLearning.isPending ? "Syncing learning state" : "Learning state synced") : "Local learning state"}</div>
      </header>

      <section className="mb-8 grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start gap-3"><div className="rounded-2xl bg-slate-100 p-3"><Brain size={20} /></div><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Next best action</p><h2 className="mt-1 text-2xl font-semibold">{actionLabel}</h2><p className="mt-2 text-slate-600">{action.reason}</p></div></div><div className="mt-5 flex flex-wrap gap-3"><span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm">Priority {action.priority.toFixed(2)}</span><span className="rounded-full border border-slate-200 px-3 py-1.5 text-sm">Chapter {bookChapters.find((chapter) => chapter.id === action.chapterId)?.number ?? "—"}</span>{action.activityId && <span className="rounded-full border border-slate-200 px-3 py-1.5 text-sm">{action.activityId}</span>}</div></article>
        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Learning state</p><p className="mt-3 text-lg leading-7">Mastery is still a conservative evidence heuristic. Transfer and retrieval are recorded separately so a correct recall does not masquerade as durable mastery.</p><div className="mt-5 flex items-center gap-2 text-sm text-slate-600"><RefreshCw size={15} /> {learningState.transfer ? Object.keys(learningState.transfer).length : 0} transfer records · {Object.keys(learningState.retrieval).length} retrieval records</div></article>
      </section>

      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Concept graph</p><h2 className="mt-1 text-2xl font-semibold">Dependencies and learning state</h2></div><span className="text-sm text-slate-500">{conceptGraph.length} canonical concepts</span></div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{conceptGraph.map((concept) => { const state = states.find((item) => item.conceptId === concept.id); const selected = concept.id === selectedConcept?.id; return <button key={concept.id} onClick={() => setSelectedConceptId(concept.id)} aria-pressed={selected} className={`rounded-2xl border p-4 text-left transition ${selected ? "border-slate-800 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 hover:bg-white"}`}><div className="flex items-start justify-between gap-3"><strong>{concept.label}</strong><span className="text-xs">{Math.round((state?.score ?? 0) * 100)}%</span></div><span className="mt-2 block text-xs opacity-75">{bandLabel[state?.band ?? "unseen"]}</span><span className="mt-3 block text-xs opacity-75">{concept.prerequisites.length} prerequisite · {concept.relatedConcepts.length} related</span></button>; })}</div>
          {selectedConcept && <aside className="rounded-2xl bg-slate-50 p-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Selected concept</p><h3 className="mt-1 text-xl font-semibold">{selectedConcept.label}</h3><p className="mt-2 text-sm text-slate-600">{bandLabel[selectedState?.band ?? "unseen"]} · {Math.round((selectedState?.score ?? 0) * 100)}%</p><div className="mt-5 space-y-3 text-sm"><div><strong>Prerequisites</strong><p className="text-slate-600">{selectedConcept.prerequisites.map((id) => conceptGraph.find((item) => item.id === id)?.label ?? id).join(", ") || "None"}</p></div><div><strong>Related</strong><p className="text-slate-600">{selectedConcept.relatedConcepts.map((id) => conceptGraph.find((item) => item.id === id)?.label ?? id).join(", ") || "None"}</p></div><div><strong>Transfer task</strong><p className="text-slate-600">{selectedConcept.transferTasks.join(" ")}</p></div></div></aside>}
        </div>
      </section>

      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Transfer</p><h2 className="mt-1 text-2xl font-semibold">Choose a diagnosis, then see why.</h2></div><span className="text-sm text-slate-500">Deterministically graded</span></div><div className="grid gap-4 lg:grid-cols-3">{transfer.map(({ task, readiness }) => { const selected = transferSelections[task.id] ?? null; const evaluation = selected === null ? null : gradeTransferTask(task, selected); return <article key={task.id} className="rounded-2xl border border-slate-200 p-5"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{task.skill}</span><span className="text-xs font-semibold">{readiness.ready ? "Ready" : "Prerequisites"}</span></div><h3 className="mt-3 font-semibold">{task.id.replace("transfer-", "").replaceAll("-", " ")}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{task.prompt}</p><div className="mt-4 space-y-2">{task.options.map((option, index) => <button key={option.label} disabled={!readiness.ready || selected !== null} onClick={() => attemptTransfer(task.id, index)} className={`w-full rounded-xl border px-3 py-3 text-left text-sm ${selected === index ? (evaluation?.correct ? "border-slate-800 bg-slate-100" : "border-amber-400 bg-amber-50") : "border-slate-200 hover:bg-slate-50"}`}><strong>{String.fromCharCode(65 + index)}.</strong> {option.label}</button>)}</div>{selected !== null && <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm"><strong>{evaluation?.correct ? "Correct transfer judgment." : "Not yet."}</strong><p className="mt-1 text-slate-600">{transferFeedback[task.id] || evaluation?.feedback}</p></div>} {!readiness.ready && <p className="mt-3 text-xs text-slate-500">Prerequisite evidence: {Math.round(readiness.prerequisiteScore * 100)}%</p>}</article>; })}</div></section>

      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Spaced retrieval</p><h2 className="mt-1 text-2xl font-semibold">Review what is due.</h2></div><span className="text-sm text-slate-500">{retrievalQueue.filter((item) => item.due).length} due now</span></div><div className="grid gap-3 md:grid-cols-3">{retrievalQueue.slice(0, 6).map((item) => <article key={item.activityId} className={`rounded-2xl border p-4 ${item.due ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"}`}><div className="flex items-center justify-between gap-3"><strong>{item.activityId}</strong><span className="text-xs uppercase tracking-wider text-slate-500">{item.reviews} reviews</span></div><p className="mt-2 text-sm text-slate-600">{item.due ? "Due now. Retrieve before moving on." : `Next review ${new Date(item.dueAt).toLocaleDateString()}`}</p><div className="mt-3 flex gap-2"><button className="rounded-lg border border-slate-300 px-3 py-2 text-sm" onClick={() => review(item.activityId, true)}><CheckCircle2 size={14} className="mr-1 inline" />I recalled it</button><button className="rounded-lg border border-slate-300 px-3 py-2 text-sm" onClick={() => review(item.activityId, false)}>Needs another pass</button></div></article>)}</div></section>

      <section className="mb-8"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Concept evidence</p><h2 className="mt-1 text-2xl font-semibold">Where the model sees uncertainty</h2></div><span className="text-sm text-slate-500">{states.filter((state) => state.band === "mastered").length} repeated-evidence concepts</span></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{states.map((state) => <article key={state.conceptId} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold">{state.label}</h3><span className="text-xs">{Math.round(state.score * 100)}%</span></div><p className="mt-2 text-sm text-slate-500">{bandLabel[state.band]}</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-slate-700" style={{ width: `${Math.round(state.score * 100)}%` }} /></div></article>)}</div></section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6"><div className="flex items-start gap-3"><TriangleAlert size={20} className="mt-0.5" /><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Misconception evidence</p><h2 className="mt-1 text-xl font-semibold">Known misconceptions in the model</h2></div></div><div className="mt-3 text-xs text-amber-800">{misconceptionStates.map((state) => `${state.id} — ${state.occurrences} occurrence${state.occurrences === 1 ? "" : "s"}`).join(" · ") || "None recorded yet."}</div><div className="mt-5 grid gap-3 md:grid-cols-2">{attention.length === 0 ? <p className="text-slate-700">No remediation signals have been recorded yet.</p> : attention.map((state) => <div key={state.activityId} className="flex items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-white px-4 py-3"><div><strong className="block">{state.activityId}</strong><span className="text-sm text-slate-600">{state.misconceptions} misconception signals · {state.hintUse} hints · {state.retries} retries</span></div><span className="text-sm font-semibold">{Math.round(state.score * 100)}%</span></div>)}</div></section>
      <div className="mt-8"><a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 underline underline-offset-4" href="/progress">Return to progress <ArrowRight size={15} /></a></div>
    </main>
  );
}
