import { useMemo, useState } from "react";
import { ArrowRight, Brain, RefreshCw, TriangleAlert } from "lucide-react";
import { bookChapters, bookConcepts, bookExercises } from "../content/book.config";
import { learningActivitiesFromCatalog } from "./activityConceptMap";
import { buildConceptGraph, buildMisconceptionState } from "./conceptGraph";
import { activityLearningState, buildConceptLearningStates, recommendNextLearningAction } from "./learningIntelligence";
import { misconceptions } from "./learningAnnotations";
import { scheduleConceptReviews } from "./spacing";
import { transferReadiness, transferTasks } from "./transfer";
import type { LearningProgressInput } from "./learningIntelligence";

const emptyProgress: LearningProgressInput = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", evidence: {} };

function readProgress(): LearningProgressInput {
  try {
    const raw = localStorage.getItem("escapement-progress");
    return raw ? { ...emptyProgress, ...JSON.parse(raw) } : emptyProgress;
  } catch { return emptyProgress; }
}

const activityInputs = learningActivitiesFromCatalog(bookExercises, bookConcepts);
const conceptGraph = buildConceptGraph(bookConcepts, bookExercises);
const conceptInputs = conceptGraph.map((concept) => ({ id: concept.id, label: concept.label, chapterId: concept.chapterId }));

export default function LearningIntelligencePage() {
  const progress = useMemo(readProgress, []);
  const [selectedConceptId, setSelectedConceptId] = useState(conceptGraph[0]?.id ?? "");
  const states = useMemo(() => buildConceptLearningStates(conceptInputs, activityInputs, progress), [progress]);
  const misconceptionStates = useMemo(() => buildMisconceptionState(conceptGraph, progress.evidence?.misconception || {}), [progress]);
  const action = useMemo(() => recommendNextLearningAction(conceptInputs, activityInputs, progress), [progress]);
  const reviews = useMemo(() => scheduleConceptReviews(activityInputs.map((item) => item.id), progress), [progress]);
  const transfer = useMemo(() => transferTasks.map((task) => ({ task, readiness: transferReadiness(task, progress) })), [progress]);
  const attention = useMemo(() => activityInputs.map((activity) => activityLearningState(activity.id, progress)).filter((state) => state.attempts > 0 && state.needsRemediation).sort((a, b) => a.score - b.score).slice(0, 5), [progress]);
  const selectedConcept = conceptGraph.find((concept) => concept.id === selectedConceptId) ?? conceptGraph[0];
  const selectedState = states.find((state) => state.conceptId === selectedConcept?.id);
  const misconceptionById = new Map(misconceptions.map((item) => [item.id, item]));

  const bandLabel: Record<string, string> = { unseen: "Not yet encountered", introduced: "Needs support", developing: "Developing", stable: "Stable", mastered: "Repeated evidence" };
  const actionLabel = action.kind === "remediate" ? "Remediate a weak point" : action.kind === "retrieve" ? "Retrieve before advancing" : action.kind === "advance" ? "Advance to a new chapter" : action.kind === "introduce" ? "Introduce a new concept" : "Test transfer";

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10 text-slate-900">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Learning intelligence</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">What you understand, and what to do next.</h1><p className="mt-3 max-w-3xl text-slate-600">Recorded evidence now drives concept state, remediation, retrieval, transfer readiness, and spaced review. The model remains deterministic and inspectable.</p></div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">Learner model v1</div>
      </header>

      <section className="mb-8 grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start gap-3"><div className="rounded-2xl bg-slate-100 p-3"><Brain size={20} /></div><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Next best action</p><h2 className="mt-1 text-2xl font-semibold">{actionLabel}</h2><p className="mt-2 text-slate-600">{action.reason}</p></div></div><div className="mt-5 flex flex-wrap items-center gap-3"><span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm">Priority {action.priority.toFixed(2)}</span>{action.chapterId && <span className="rounded-full border border-slate-200 px-3 py-1.5 text-sm">Chapter {bookChapters.find((chapter) => chapter.id === action.chapterId)?.number ?? "—"}</span>}{action.activityId && <span className="rounded-full border border-slate-200 px-3 py-1.5 text-sm">Activity {action.activityId}</span>}</div></article>
        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Model interpretation</p><p className="mt-3 text-lg leading-7">Mastery is a conservative evidence signal. Hints, retries, misconceptions, and source returns are interpreted as information about support needs.</p><div className="mt-5 flex items-center gap-2 text-sm text-slate-600"><RefreshCw size={15} /> Evidence is read from the current saved learner state.</div></article>
      </section>

      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Concept graph</p><h2 className="mt-1 text-2xl font-semibold">See the dependencies, not just the topics.</h2></div><span className="text-sm text-slate-500">{conceptGraph.length} canonical concepts</span></div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conceptGraph.map((concept) => {
              const state = states.find((item) => item.conceptId === concept.id);
              const selected = concept.id === selectedConcept?.id;
              return <button key={concept.id} onClick={() => setSelectedConceptId(concept.id)} aria-pressed={selected} className={`rounded-2xl border p-4 text-left transition ${selected ? "border-slate-800 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 hover:bg-white"}`}><div className="flex items-start justify-between gap-3"><strong>{concept.label}</strong><span className={`text-xs ${selected ? "text-slate-300" : "text-slate-500"}`}>{Math.round((state?.score ?? 0) * 100)}%</span></div><span className={`mt-2 block text-xs ${selected ? "text-slate-300" : "text-slate-500"}`}>{bandLabel[state?.band ?? "unseen"]}</span><span className={`mt-3 block text-xs ${selected ? "text-slate-300" : "text-slate-500"}`}>{concept.prerequisites.length} prerequisite · {concept.relatedConcepts.length} related</span></button>;
            })}
          </div>
          {selectedConcept && <aside className="rounded-2xl bg-slate-50 p-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Selected concept</p><h3 className="mt-1 text-xl font-semibold">{selectedConcept.label}</h3><p className="mt-2 text-sm text-slate-600">{bandLabel[selectedState?.band ?? "unseen"]} · {Math.round((selectedState?.score ?? 0) * 100)}% evidence score</p><div className="mt-5 space-y-3 text-sm"><div><strong>Prerequisites</strong><p className="text-slate-600">{selectedConcept.prerequisites.map((id) => conceptGraph.find((item) => item.id === id)?.label ?? id).join(", ") || "None"}</p></div><div><strong>Related</strong><p className="text-slate-600">{selectedConcept.relatedConcepts.map((id) => conceptGraph.find((item) => item.id === id)?.label ?? id).join(", ") || "None"}</p></div><div><strong>Applications</strong><p className="text-slate-600">{selectedConcept.applications.join(" ")}</p></div><div><strong>Misconception</strong><p className="text-slate-600">{selectedConcept.misconceptionIds.map((id) => misconceptionById.get(id)?.label ?? id).join(" ")}</p></div><div><strong>Transfer</strong><p className="text-slate-600">{selectedConcept.transferTasks.join(" ")}</p></div></div></aside>}
        </div>
      </section>

      <section className="mb-8"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Spaced retrieval</p><h2 className="mt-1 text-2xl font-semibold">Review pressure follows evidence.</h2></div><span className="text-sm text-slate-500">{reviews.filter((review) => review.priority === "now").length} need attention now</span></div><div className="grid gap-3 md:grid-cols-3">{reviews.map((review) => <article key={review.activityId} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-center justify-between gap-3"><strong>{review.activityId}</strong><span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{review.priority}</span></div><p className="mt-2 text-sm text-slate-600">{review.reason}</p><p className="mt-3 text-xs text-slate-500">Suggested interval: {review.intervalDays === 0 ? "immediate" : `${review.intervalDays} day${review.intervalDays === 1 ? "" : "s"}`}</p></article>)}</div></section>

      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Transfer tasks</p><h2 className="mt-1 text-2xl font-semibold">Use the idea somewhere new.</h2></div><div className="grid gap-4 md:grid-cols-3">{transfer.map(({ task, readiness }) => <article key={task.id} className="rounded-2xl border border-slate-200 p-5"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{task.skill}</span><span className={`text-xs font-semibold ${readiness.ready ? "text-slate-900" : "text-slate-500"}`}>{readiness.ready ? "Ready" : "Prerequisites"}</span></div><h3 className="mt-3 font-semibold">{task.id.replaceAll("transfer-", "").replaceAll("-", " ")}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{task.prompt}</p><details className="mt-4"><summary className="cursor-pointer text-sm font-semibold">See expected reasoning</summary><p className="mt-2 text-sm leading-6 text-slate-600">{task.expectedReasoning}</p></details></article>)}</div></section>

      <section className="mb-8"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Concept states</p><h2 className="mt-1 text-2xl font-semibold">Your current evidence map</h2></div><span className="text-sm text-slate-500">{states.filter((state) => state.band === "mastered").length} repeated-evidence concepts</span></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{states.map((state) => <article key={state.conceptId} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold">{state.label}</h3><span className="text-xs font-medium text-slate-500">{Math.round(state.score * 100)}%</span></div><p className="mt-2 text-sm text-slate-500">{bandLabel[state.band]}</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-slate-700" style={{ width: `${Math.round(state.score * 100)}%` }} /></div>{state.remediationActivities.length > 0 && <p className="mt-3 text-xs text-slate-600">Needs attention: {state.remediationActivities.length} activity signal{state.remediationActivities.length === 1 ? "" : "s"}</p>}</article>)}</div></section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6"><div className="flex items-start gap-3"><TriangleAlert size={20} className="mt-0.5" /><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Evidence needing attention</p><h2 className="mt-1 text-xl font-semibold">Where the current model sees uncertainty</h2></div></div><div className="mt-3 text-xs text-amber-800">Tracked misconceptions: {misconceptionStates.map((state) => `${state.id}${state.occurrences ? ` (${state.occurrences})` : ""}`).join(", ")}</div><div className="mt-5 grid gap-3 md:grid-cols-2">{attention.length === 0 ? <p className="text-slate-700">No remediation signals have been recorded yet.</p> : attention.map((state) => <div key={state.activityId} className="flex items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-white px-4 py-3"><div><strong className="block">{state.activityId}</strong><span className="text-sm text-slate-600">{state.misconceptions} misconception signal{state.misconceptions === 1 ? "" : "s"}, {state.hintUse} hint use, {state.retries} retr{state.retries === 1 ? "y" : "ies"}</span></div><span className="text-sm font-semibold">{Math.round(state.score * 100)}%</span></div>)}</div></section>
      <div className="mt-8"><a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 underline underline-offset-4" href="/progress">Return to progress <ArrowRight size={15} /></a></div>
    </main>
  );
}
