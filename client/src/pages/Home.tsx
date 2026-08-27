import { useEffect, useMemo, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import { ArrowRight, BookOpen, Check, ChevronLeft, ChevronRight, Compass, Search, Sparkles, Target, Timer, RotateCcw, Lightbulb, Link2, Menu, X } from "lucide-react";
import { bookConfig, bookChapters, bookConcepts, bookExercises, bookPartColors } from "../content/book.config";
import { sectionizeChapter, gradeExercise, experimentResult, authoredChapterGuidance, feedbackLibrary, sourceAnchorFor, readingPositionKey, saveReadingPosition, restoreReadingPosition, restoreSectionPosition, masteryAfterAttempt, learnerStateAfterAttempt, mergeProgressStates, classifyProgressConflict, resolveProgressConflict, recommendedChapter, type Chapter, type Exercise, type LearnerEvidence, type LearningProgress } from "../content/model";
const chapters = bookChapters;
const concepts = bookConcepts;
const exercises = bookExercises;
const partColors = bookPartColors;

const cover = "/manus-storage/cover-art_f5bf4d3e.jpg";
const escapementImage = "/manus-storage/escapement-macro_92bf54e9.jpg";
const benchImage = "/manus-storage/watchmaker-bench_6e1308e1.jpg";
const diagram = "/manus-storage/claim-to-measurement_3a0b1f2c.png";

type View = "home" | "book" | "concepts" | "practice" | "progress" | "glossary" | "roadmap" | "references";
type Progress = { viewed: string[]; completed: string[]; attempts: Record<string, number>; mastered: string[]; current: string; positions: Record<string, { scrollY: number; sectionId: string }>; evidence?: Required<LearnerEvidence>; syncMeta?: { revision: number; updatedAt: number; deviceId: string } };
const deviceId = typeof window !== "undefined" ? (localStorage.getItem("escapement-device-id") || (() => { const id = crypto.randomUUID(); localStorage.setItem("escapement-device-id", id); return id; })()) : "browser";
const emptyEvidence: Required<LearnerEvidence> = { misconception: {}, hintUse: {}, retries: {}, sourceReturns: {}, confidence: {} };
const blankProgress: Progress = { viewed: [], completed: [], attempts: {}, mastered: [], current: "ch-01", positions: {}, evidence: emptyEvidence, syncMeta: { revision: 0, updatedAt: 0, deviceId } };

function loadProgress(): Progress {
  try { return { ...blankProgress, ...JSON.parse(localStorage.getItem(bookConfig.anonymousProgressKey) || "null") }; } catch { return blankProgress; }
}


function chapterBody(chapter: Chapter) {
  const lines = bookConfig.source.split("\n");
  const marker = `## Chapter ${chapter.number} —`;
  const start = lines.findIndex((line) => line.startsWith(marker));
  if (start < 0) return "The canonical chapter text is being prepared for this reader.";
  const end = lines.findIndex((line, index) => index > start && (line.startsWith("## Chapter ") || line.startsWith("# Part ")));
  return lines.slice(start, end < 0 ? lines.length : end).join("\n").replace(/^## Chapter[^\n]*\n/, "").trim();
}

function markdownToBlocks(text: string, sections: { id: string; title: string }[] = []) {
  return text.split(/\n\s*\n/).filter(Boolean).map((block, index) => {
    const clean = block.replace(/^#+\s*/, "").trim();
    if (block.startsWith("- ")) return <ul key={index}>{block.split("\n").map((item) => <li key={item}>{item.replace(/^- /, "")}</li>)}</ul>;
    if (block.startsWith(">")) return <blockquote key={index}>{clean.replace(/^>\s*/, "")}</blockquote>;
    if (block.startsWith("|")) return null;
    if (block.startsWith("### ")) {
      const title = clean.replace(/^###\s*/, "");
      const section = sections.find((item) => item.title === title);
      return <h3 id={section?.id} key={index}>{title}</h3>;
    }
    return <p key={index}>{clean}</p>;
  });
}

export default function Home() {
  const [location] = useLocation();
  const [, readParams] = useRoute("/read/:chapter");
  const [view, setView] = useState<View>(() => location === "/practice" ? "practice" : location === "/progress" ? "progress" : location === "/explore" ? "concepts" : location.startsWith("/read/") ? "book" : "home");
  const [selectedId, setSelectedId] = useState("ch-01");
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState<Progress>(loadProgress);
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const remoteProgress = trpc.progress.get.useQuery(undefined, { enabled: isAuthenticated, staleTime: 60_000 });
  const syncProgress = trpc.progress.upsert.useMutation();
  const [mobileNav, setMobileNav] = useState(false);
  const [remoteSnapshot, setRemoteSnapshot] = useState<Progress | null>(null);
  const [syncConflict, setSyncConflict] = useState<"none" | "remote-newer" | "local-newer" | "diverged">("none");
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | number | number[] | null>>({});
  const [feedbackById, setFeedbackById] = useState<Record<string, "correct" | "misconception" | null>>({});
  const [hintById, setHintById] = useState<Record<string, boolean>>({});
  const [sectionId, setSectionId] = useState("");
  const [experimentValue, setExperimentValue] = useState(5);
  const selected = chapters.find((chapter) => chapter.id === selectedId) ?? chapters[0];
  const viewedChapter = progress.viewed.includes(selected.id);
  const completion = Math.round((progress.completed.length / chapters.length) * 100);
  const syncedSection = progress.positions[selected.id]?.sectionId || "";

  useEffect(() => { localStorage.setItem(bookConfig.anonymousProgressKey, JSON.stringify(progress)); }, [progress]);
  useEffect(() => {
    const state = remoteProgress.data?.state;
    if (!state) return;
    try { const remote = JSON.parse(state) as Progress; setRemoteSnapshot(remote); setSyncConflict(classifyProgressConflict(progress, remote)); updateProgress((current) => mergeProgressStates(current, remote)); } catch { /* preserve local progress if a legacy snapshot is malformed */ }
  }, [remoteProgress.data?.state]);
  useEffect(() => {
    if (!isAuthenticated || authLoading) return;
    const timer = window.setTimeout(() => syncProgress.mutate({ state: JSON.stringify(progress) }), 500);
    return () => window.clearTimeout(timer);
  }, [progress, isAuthenticated, authLoading]);
  useEffect(() => {
    if (readParams?.chapter) {
      const match = chapters.find((chapter) => chapter.id === readParams.chapter || `ch-${chapter.number}` === readParams.chapter);
      if (match) setSelectedId(match.id);
    }
  }, [readParams?.chapter]);
  useEffect(() => {
    if (view !== "book") return;
    const savedSection = syncedSection || localStorage.getItem(`escapement-section-${selected.id}`) || "";
    setSectionId(savedSection);
    updateProgress((current) => ({ ...current, current: selected.id, viewed: current.viewed.includes(selected.id) ? current.viewed : [...current.viewed, selected.id], positions: current.positions || {} }));
  }, [view, selected.id, syncedSection]);
  useEffect(() => {
    if (view !== "book") return;
    const save = () => { saveReadingPosition(localStorage, selected.id, window.scrollY); updateProgress((current) => ({ ...current, positions: { ...current.positions, [selected.id]: { scrollY: Math.round(window.scrollY), sectionId: current.positions[selected.id]?.sectionId || sectionId } } })); };
    window.addEventListener("scroll", save, { passive: true });
    const saved = progress.positions[selected.id]?.scrollY || restoreReadingPosition(localStorage, selected.id);
    if (saved > 0) window.setTimeout(() => window.scrollTo({ top: saved }), 80);
    const savedAnchor = restoreSectionPosition(progress, selected.id) || localStorage.getItem(`escapement-section-${selected.id}`);
    if (savedAnchor) window.setTimeout(() => document.getElementById(savedAnchor)?.scrollIntoView({ behavior: "auto", block: "start" }), 120);
    return () => window.removeEventListener("scroll", save);
  }, [view, selected.id, syncedSection, remoteProgress.data?.state]);

  const filteredChapters = useMemo(() => chapters.filter((c) => `${c.title} ${c.part} ${c.summary}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const filteredConcepts = useMemo(() => concepts.filter((c) => `${c.label} ${c.definition}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const currentIndex = chapters.findIndex((c) => c.id === selected.id);
  const partNumber = Array.from(new Set(chapters.map((chapter) => chapter.part))).indexOf(selected.part) + 1;
  const chapterSections = useMemo(() => sectionizeChapter(chapterBody(selected), selected.id), [selected]);
  const guidance = authoredChapterGuidance[selected.id];
  const nextChapter = recommendedChapter(progress.current, progress.completed);

  function normalizeProgress(next: LearningProgress): Progress { return { ...blankProgress, ...next, evidence: { ...emptyEvidence, ...(next.evidence || {}), misconception: { ...emptyEvidence.misconception, ...(next.evidence?.misconception || {}) }, hintUse: { ...emptyEvidence.hintUse, ...(next.evidence?.hintUse || {}) }, retries: { ...emptyEvidence.retries, ...(next.evidence?.retries || {}) }, sourceReturns: { ...emptyEvidence.sourceReturns, ...(next.evidence?.sourceReturns || {}) }, confidence: { ...emptyEvidence.confidence, ...(next.evidence?.confidence || {}) } } }; }
  function updateProgress(updater: (current: Progress) => LearningProgress) { setProgress((current) => ({ ...normalizeProgress(updater(current)), syncMeta: { revision: (current.syncMeta?.revision || 0) + 1, updatedAt: Date.now(), deviceId } })); }
  function resolveConflict(choice: "local" | "remote" | "merge") { if (!remoteSnapshot) return; const resolved = resolveProgressConflict(progress, remoteSnapshot, choice); setProgress({ ...normalizeProgress(resolved), syncMeta: { revision: Math.max(progress.syncMeta?.revision || 0, remoteSnapshot.syncMeta?.revision || 0) + 1, updatedAt: Date.now(), deviceId } }); setSyncConflict("none"); }
  function openChapter(id: string, section?: string) { setSelectedId(id); setView("book"); setSectionId(section || ""); setMobileNav(false); if (section) localStorage.setItem(`escapement-section-${id}`, section); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function markComplete() { updateProgress((current) => ({ ...current, completed: current.completed.includes(selected.id) ? current.completed : [...current.completed, selected.id] })); }
  function setActivityAnswer(ex: Exercise, value: string | number | number[] | null) { setAnswers((current) => ({ ...current, [ex.id]: value })); }
  function grade(ex: Exercise) {
    const attempts = (progress.attempts[ex.id] || 0) + 1;
    const evaluated = gradeExercise(ex, ex.type === "experiment" ? experimentValue : answers[ex.id] ?? null);
    updateProgress((current) => ({ ...current, attempts: { ...current.attempts, [ex.id]: attempts }, mastered: masteryAfterAttempt(current.mastered, ex.id, evaluated.correct), evidence: { ...(current.evidence || emptyEvidence), misconception: evaluated.state === "misconception" ? { ...(current.evidence || emptyEvidence).misconception, [ex.id]: ((current.evidence || emptyEvidence).misconception[ex.id] || 0) + 1 } : (current.evidence || emptyEvidence).misconception, confidence: { ...(current.evidence || emptyEvidence).confidence, [ex.id]: evaluated.correct ? 1 : 0 } } }));
    setFeedbackById((current) => ({ ...current, [ex.id]: evaluated.state }));
  }
  function resetExercise() { if (activeExercise) { setActivityAnswer(activeExercise, null); updateProgress((current) => ({ ...current, evidence: { ...(current.evidence || emptyEvidence), retries: { ...(current.evidence || emptyEvidence).retries, [activeExercise.id]: ((current.evidence || emptyEvidence).retries[activeExercise.id] || 0) + 1 } } })); } if (activeExercise) setFeedbackById((current) => ({ ...current, [activeExercise.id]: null })); if (activeExercise) setHintById((current) => ({ ...current, [activeExercise.id]: false })); }
  function sequenceValue(ex: Exercise) { return Array.isArray(answers[ex.id]) ? answers[ex.id] as number[] : []; }
  function toggleSequence(ex: Exercise, index: number) { const current = sequenceValue(ex); setActivityAnswer(ex, current.includes(index) ? current.filter((value) => value !== index) : [...current, index]); setActiveExercise(ex); setFeedbackById((current) => ({ ...current, [ex.id]: null })); }
  function moveSequence(ex: Exercise, position: number, delta: number) { const current = sequenceValue(ex); const target = position + delta; if (target < 0 || target >= current.length) return; const next = [...current]; [next[position], next[target]] = [next[target], next[position]]; setActivityAnswer(ex, next); setActiveExercise(ex); }
  function setClassification(ex: Exercise, index: number, category: number) { const next = [...(Array.isArray(answers[ex.id]) ? answers[ex.id] as number[] : [])]; next[index] = category; setActivityAnswer(ex, next); setActiveExercise(ex); setFeedbackById((current) => ({ ...current, [ex.id]: null })); }

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={() => setView("home")} aria-label="Go to home"><span className="brand-mark">E</span><span><strong>ESCAPEMENT</strong><small>INTERACTIVE LEARNING EDITION</small></span></button>
      <button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X /> : <Menu />}</button>
      <nav className={mobileNav ? "nav open" : "nav"} aria-label="Primary navigation">
        {[ ["book", "Read the book"], ["roadmap", "Roadmap"], ["concepts", "Explore concepts"], ["practice", "Practice"], ["progress", "Your progress"]].map(([id, label]) => <button key={id} className={view === id ? "active" : ""} onClick={() => { setView(id as View); setMobileNav(false); }}>{label}</button>)}
      </nav>
      <div className="top-actions"><button className="icon-btn" aria-label="Search" onClick={() => setView("book")}><Search size={18} /></button><button className="progress-pill" onClick={() => setView("progress")}><span>{completion}%</span> journey</button>{isAuthenticated ? <span className="sync-status" title="Progress syncs across your devices"><span className="sync-dot"></span>{syncProgress.isPending ? "Saving" : user?.name || "Synced"}</span> : <button className="sync-button" onClick={() => startLogin()}>Sign in to sync</button>}</div>
    </header>
    {isAuthenticated && syncConflict !== "none" && remoteSnapshot && <div className="sync-conflict" role="status"><strong>Progress changed on another device.</strong><span>Choose which record to keep, or merge completed reading and practice history.</span><div><button onClick={() => resolveConflict("merge")}>Merge both</button><button onClick={() => resolveConflict("local")}>Keep this device</button><button onClick={() => resolveConflict("remote")}>Use other device</button></div></div>}

    {view === "home" && <main>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">THE BOOK, WITH A BENCH BESIDE IT</p><h1>Learn to read the<br /><em>life</em> inside a watch.</h1><p className="hero-lede">A calm, guided way into horology: read the complete book, test your understanding, and follow the evidence from mainspring to measured result.</p><div className="hero-actions"><button className="primary" onClick={() => openChapter(progress.current)}>Continue the journey <ArrowRight size={17} /></button><button className="text-button" onClick={() => setView("book")}>Browse all 23 chapters</button></div><div className="hero-meta"><span><Timer size={15} /> 6 parts · {bookConfig.chapterCount} chapters</span><span><BookOpen size={15} /> 24,500 words</span><span><Target size={15} /> Learn at your pace</span></div></div>
        <div className="hero-visual"><img src={cover} alt="Macro view of a balance and escapement" /><div className="visual-caption"><span>01 / THE OSCILLATOR</span><strong>Where a claim<br />becomes a number.</strong></div></div>
      </section>
      <section className="intro-band"><div><p className="eyebrow">A BOOK + A COURSE + A KNOWLEDGE EXPLORER</p><h2>Good horology rewards<br /><em>patient attention.</em></h2></div><p>Escapement is built around a simple promise: the original book remains the source of truth. The learning layer helps you notice what matters, try a concept, see why an answer works, and return to the exact passage that explains it.</p></section>
      <section className="path-section"><div className="section-head"><div><p className="eyebrow">CHOOSE YOUR NEXT MOVE</p><h2>A deliberate path through<br />small, precise ideas.</h2></div><button className="text-button" onClick={() => setView("progress")}>View progress <ArrowRight size={16} /></button></div><div className="path-grid"><button className="path-card featured" onClick={() => openChapter(progress.current)}><span className="path-number">01</span><BookOpen /><h3>Continue reading</h3><p>{selected.title}</p><span className="card-link">{viewedChapter ? "Return to your place" : "Begin with foundations"} <ArrowRight size={15} /></span></button><button className="path-card" onClick={() => setView("concepts")}><span className="path-number">02</span><Compass /><h3>Explore the ideas</h3><p>Move from prerequisites to applications through the concept map.</p><span className="card-link">Open explorer <ArrowRight size={15} /></span></button><button className="path-card" onClick={() => setView("practice")}><span className="path-number">03</span><Sparkles /><h3>Test yourself</h3><p>Prediction prompts, sequences, and practical decisions with explanations.</p><span className="card-link">Go to practice <ArrowRight size={15} /></span></button></div></section>
      <section className="feature-split"><div className="feature-image"><img src={benchImage} alt="Watchmaker working at a clean bench" /></div><div className="feature-copy"><p className="eyebrow">THE LEARNING LAYER</p><h2>Every interaction should earn its place.</h2><p>Not gamification for its own sake. Each activity answers a useful question: can you predict the effect of position, sequence an escapement cycle, or choose the next measurement at the bench?</p><div className="mini-list"><span><strong>01</strong> Read the source passage</span><span><strong>02</strong> Make a prediction</span><span><strong>03</strong> Get a diagnosis, not a red mark</span></div></div></section>
      <section className="quote-band"><img src={diagram} alt="Diagram showing a claim becoming a measurement" /><blockquote>“A number is only useful when you can say what was measured, under which conditions, and why it matters.”</blockquote></section>
    </main>}

    {view === "book" && <main className="reader-layout"><aside className="library"><div className="library-title"><p className="eyebrow">THE CANONICAL BOOK</p><h2>Chapter library</h2></div><label className="search-box"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search chapters…" /></label><div className="chapter-list">{filteredChapters.map((chapter) => <button key={chapter.id} className={chapter.id === selected.id ? "chapter-item selected" : "chapter-item"} onClick={() => openChapter(chapter.id)}><span className="chapter-dot" style={{ background: partColors[chapter.part] }}></span><span><small>{String(chapter.number).padStart(2, "0")} · {chapter.part}</small><strong>{chapter.title}</strong></span>{progress.completed.includes(chapter.id) && <Check size={15} className="completed" />}</button>)}</div></aside><article className="reader"><div className="reader-top"><span className="eyebrow">PART {partNumber} · {selected.part.toUpperCase()}</span><span>{currentIndex + 1} / {chapters.length}</span></div><h1>{selected.title}</h1><p className="reader-deck">{selected.summary}</p><div className="guidance-grid"><div><span className="label">OBJECTIVES</span>{selected.objectives.map((x) => <p key={x}>↗ {x}</p>)}</div><div><span className="label">BEFORE YOU BEGIN</span><p>{selected.prerequisites[0]}</p><span className="label effort"><Timer size={14} /> {selected.minutes} min read</span></div></div><div className="concept-row"><span className="label">CONCEPTS IN THIS CHAPTER</span>{selected.concepts.map((x) => <button key={x} onClick={() => { setQuery(x); setView("concepts"); }}>{x}</button>)}</div>{chapterSections.length > 0 && <nav className="section-toc" aria-label="Chapter sections"><span className="label">IN THIS CHAPTER</span>{chapterSections.map((section) => <button key={section.id} onClick={() => { setSectionId(section.id); localStorage.setItem(`escapement-section-${selected.id}`, section.id); updateProgress((current) => ({ ...current, positions: { ...current.positions, [selected.id]: { scrollY: current.positions[selected.id]?.scrollY || 0, sectionId: section.id } } })); document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" }); }}>{section.title}</button>)}</nav>}<div className="chapter-guidance"><div><span className="label">KEY IDEA</span><p>{selected.summary}</p></div><div><span className="label">WHY THIS MATTERS</span><p>{guidance.explanation}</p></div><div><span className="label">NEXT STEP</span><p>{guidance.nextStep}</p></div></div><div className="reader-content">{markdownToBlocks(chapterBody(selected), chapterSections)}</div><div className="chapter-check"><div><span className="eyebrow">BEFORE YOU LEAVE THIS CHAPTER</span><h3>Can you explain the idea in your own words?</h3><p>Mark this chapter complete when you can connect its central claim to a measurement, mechanism, or decision.</p></div><button className={progress.completed.includes(selected.id) ? "complete-button done" : "complete-button"} onClick={markComplete}>{progress.completed.includes(selected.id) ? <><Check size={17} /> Completed</> : <>Mark complete <ArrowRight size={16} /></>}</button></div><div className="reader-nav"><button disabled={currentIndex <= 0} onClick={() => openChapter(chapters[currentIndex - 1].id)}><ChevronLeft size={16} /> Previous</button><button disabled={currentIndex >= chapters.length - 1} onClick={() => openChapter(chapters[currentIndex + 1].id)}>Next chapter <ChevronRight size={16} /></button></div></article></main>}

    {view === "concepts" && <main className="explorer-page"><div className="page-intro"><p className="eyebrow">NON-LINEAR EXPLORATION</p><h1>Follow the thread<br /><em>between ideas.</em></h1><p>Concepts are the connective tissue of the book. Start with a definition, see what it depends on, then return to the chapter where the author develops it.</p><label className="search-box wide"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search concepts, definitions, or chapters…" /></label></div><div className="concept-map"><div className="map-line"></div><div className="map-node root"><span>FOUNDATION</span><strong>Rate & precision</strong></div><div className="map-node mid"><span>MECHANISM</span><strong>Escapement</strong></div><div className="map-node end"><span>PROOF</span><strong>Chronometer</strong></div></div><div className="concept-grid">{filteredConcepts.map((concept) => <article className="concept-card" key={concept.id}><div className="concept-card-top"><span className="concept-index">{String(concepts.indexOf(concept) + 1).padStart(2, "0")}</span><Link2 size={16} /></div><h3>{concept.label}</h3><p>{concept.definition}</p><div className="concept-footer"><span>Chapter {chapters.find((c) => c.id === concept.chapterId)?.number}</span><button onClick={() => openChapter(concept.chapterId)}>Read context <ArrowRight size={14} /></button></div></article>)}</div></main>}

    {view === "practice" && <main className="practice-page"><div className="page-intro compact"><p className="eyebrow">PRACTICE WITH FEEDBACK</p><h1>Make a prediction.<br /><em>Then inspect the result.</em></h1><p>These checkpoints are small on purpose. A useful answer changes what you notice in the next passage.</p></div><div className="practice-grid">{exercises.map((ex, index) => <article className="exercise-card" key={ex.id}><div className="exercise-meta"><span>CHECKPOINT 0{index + 1}</span><span>{ex.type === "choice" ? "MULTIPLE CHOICE" : ex.type === "prediction" ? "PREDICTION" : ex.type === "sequence" ? "SEQUENCE" : ex.type === "classification" ? "CLASSIFICATION" : "EXPERIMENT"}</span></div><h2>{ex.prompt}</h2>{(ex.type === "choice" || ex.type === "prediction") && <div className="options">{ex.options?.map((option, i) => <button key={option} className={(answers[ex.id] ?? null) === i ? "option chosen" : "option"} onClick={() => { setActiveExercise(ex); setActivityAnswer(ex, i); setFeedbackById((current) => ({ ...current, [ex.id]: null })); }}>{String.fromCharCode(65 + i)} <span>{option}</span></button>)}</div>}{ex.type === "sequence" && <div className="sequence-builder"><div className="sequence-pool"><span className="label">CHOOSE EACH STEP ONCE</span>{ex.options?.map((option, i) => <button key={option} className={sequenceValue(ex).includes(i) ? "option chosen" : "option"} onClick={() => toggleSequence(ex, i)} aria-pressed={sequenceValue(ex).includes(i)}>{i + 1} <span>{option}</span></button>)}</div><ol className="sequence-order" aria-label="Your sequence">{sequenceValue(ex).map((optionIndex, position) => <li key={`${ex.id}-${optionIndex}`}><span>{position + 1}. {ex.options?.[optionIndex]}</span><button onClick={() => moveSequence(ex, position, -1)} aria-label={`Move ${ex.options?.[optionIndex]} up`}>↑</button><button onClick={() => moveSequence(ex, position, 1)} aria-label={`Move ${ex.options?.[optionIndex]} down`}>↓</button><button onClick={() => toggleSequence(ex, optionIndex)} aria-label={`Remove ${ex.options?.[optionIndex]}`}>×</button></li>)}</ol></div>}{ex.type === "classification" && <div className="classification-builder"><span className="label">ASSIGN EACH ITEM</span>{ex.options?.map((option, i) => <div className="classification-row" key={option}><strong>{option}</strong><div role="group" aria-label={`Category for ${option}`}><button className={(answers[ex.id] as number[] | undefined)?.[i] === 0 ? "category chosen" : "category"} onClick={() => setClassification(ex, i, 0)}>Stored energy</button><button className={(answers[ex.id] as number[] | undefined)?.[i] === 1 ? "category chosen" : "category"} onClick={() => setClassification(ex, i, 1)}>Regulated motion</button></div></div>)}</div>}{ex.type === "experiment" && <div className="experiment-input"><label htmlFor="amplitude-slider">Adjust the observed positional spread: <strong>{experimentValue} s/d</strong></label><input id="amplitude-slider" type="range" min="0" max="12" value={experimentValue} onChange={(e) => { setExperimentValue(Number(e.target.value)); setActivityAnswer(ex, Number(e.target.value)); setFeedbackById((current) => ({ ...current, [ex.id]: null })); }} /><output className={`experiment-result ${experimentResult(experimentValue).tone}`}><strong>{experimentResult(experimentValue).label}</strong><span>{experimentResult(experimentValue).guidance}</span></output></div>}<div className="exercise-actions"><button className="primary small" onClick={() => { setActiveExercise(ex); grade(ex); }}>Check answer</button><button className="hint-button" onClick={() => { setActiveExercise(ex); setHintById((current) => ({ ...current, [ex.id]: !current[ex.id] })); if (!hintById[ex.id]) updateProgress((current) => ({ ...current, evidence: { ...(current.evidence || emptyEvidence), hintUse: { ...(current.evidence || emptyEvidence).hintUse, [ex.id]: ((current.evidence || emptyEvidence).hintUse[ex.id] || 0) + 1 } } })); }}><Lightbulb size={15} /> Hint</button>{feedbackById[ex.id] && <button className="reset-button" onClick={resetExercise}><RotateCcw size={15} /> Retry</button>}</div>{hintById[ex.id] && <div className="hint-box"><Lightbulb size={15} /> {ex.hint}</div>}{feedbackById[ex.id] && <div className={feedbackById[ex.id] === "correct" ? "feedback correct" : "feedback misconception"}><strong>{feedbackById[ex.id] === "correct" ? "Good reading." : "Misconception to inspect."}</strong><p>{feedbackById[ex.id] === "correct" ? (ex.type === "experiment" ? experimentResult(experimentValue).guidance : ex.explanation) : (ex.type === "experiment" ? experimentResult(experimentValue).guidance : `${ex.misconception} ${ex.hint}`)}</p>{feedbackById[ex.id] !== "correct" && <button onClick={() => { const source = sourceAnchorFor(ex.id) || `${ex.chapterId}-section-1`; updateProgress((current) => ({ ...current, evidence: { ...(current.evidence || emptyEvidence), sourceReturns: { ...(current.evidence || emptyEvidence).sourceReturns, [ex.id]: ((current.evidence || emptyEvidence).sourceReturns[ex.id] || 0) + 1 } } })); openChapter(ex.chapterId, source); }}>Return to source passage <ArrowRight size={14} /></button>}</div>}</article>)}</div></main>}

    {view === "progress" && <main className="progress-page"><div className="progress-hero"><div><p className="eyebrow">YOUR LEARNING STATE</p><h1>Progress is a<br /><em>place to begin.</em></h1><p>Use this page as a quiet orientation point, not a scoreboard. The next step is the one that makes the book more useful.</p></div><div className="progress-ring"><strong>{completion}%</strong><span>complete</span></div></div><div className="stats-grid"><div><span>CHAPTERS VIEWED</span><strong>{progress.viewed.length}<small> / {chapters.length}</small></strong></div><div><span>CHAPTERS COMPLETED</span><strong>{progress.completed.length}<small> / {chapters.length}</small></strong></div><div><span>EXERCISES MASTERED</span><strong>{progress.mastered.length}<small> / {exercises.length}</small></strong></div></div><section className="next-step"><div><p className="eyebrow">RECOMMENDED NEXT STEP</p><h2>{nextChapter.title}</h2><p>{progress.completed.includes(progress.current) ? "You have completed this chapter. Continue to the next idea when you are ready." : "Return to your current chapter and look for the sentence that turns an observation into a test."}</p></div><button className="primary" onClick={() => openChapter(nextChapter.id)}>Continue <ArrowRight size={17} /></button></section><section className="progress-list"><div className="section-head"><div><p className="eyebrow">THE FULL JOURNEY</p><h2>Six parts, one connected practice.</h2></div><span>{progress.completed.length} of {chapters.length} complete</span></div>{chapters.map((chapter) => <button className="progress-row" key={chapter.id} onClick={() => openChapter(chapter.id)}><span className="row-number">{String(chapter.number).padStart(2, "0")}</span><span className="row-title"><small>{chapter.part}</small>{chapter.title}</span><span className={progress.completed.includes(chapter.id) ? "row-status done" : "row-status"}>{progress.completed.includes(chapter.id) ? <Check size={15} /> : ""}</span></button>)}</section></main>}

    {view === "roadmap" && <main className="roadmap-page"><div className="page-intro compact"><p className="eyebrow">THE LEARNING ROADMAP</p><h1>From first principles<br /><em>to measured judgment.</em></h1><p>Six connected parts move from the difficulty of equal seconds to the future of standards. Take the linear path or enter anywhere through the chapter library.</p></div><div className="roadmap-list">{Array.from(new Set(chapters.map((c) => c.part))).map((part, i) => <section className="roadmap-part" key={part}><span className="part-number">0{i + 1}</span><div><span className="eyebrow">PART {i + 1}</span><h2>{part}</h2><p>{chapters.filter((c) => c.part === part).map((c) => c.title).join(" · ")}</p></div><button className="primary small" onClick={() => openChapter(chapters.find((c) => c.part === part)?.id || "ch-01")}>Enter part <ArrowRight size={15} /></button></section>)}</div></main>}

    {view === "references" && <main className="explorer-page"><div className="page-intro compact"><p className="eyebrow">REFERENCE DESK</p><h1>Sources for<br /><em>careful claims.</em></h1><p>The learning layer keeps the book’s evidence close to the reading experience. Return to the standards chapters for context and consult the primary organizations before practice.</p></div><div className="reference-list"><article><span className="reference-number">01</span><div><h2>COSC</h2><p>Official certification information, test scope, and published chronometer criteria.</p><a href="https://www.cosc.swiss" target="_blank" rel="noreferrer">cosc.swiss <ArrowRight size={14} /></a></div></article><article><span className="reference-number">02</span><div><h2>METAS</h2><p>Institutional metrology context for finished-watch and magnetic-resistance claims.</p><a href="https://www.metas.ch" target="_blank" rel="noreferrer">metas.ch <ArrowRight size={14} /></a></div></article><article><span className="reference-number">03</span><div><h2>Return to the book</h2><p>Read the chapters where measurement scope, testing, and evidence are treated in detail.</p><button onClick={() => openChapter("ch-12")}>Open standards <ArrowRight size={14} /></button></div></article></div></main>}

    {view === "glossary" && <main className="explorer-page"><div className="page-intro compact"><p className="eyebrow">REFERENCE DESK</p><h1>Glossary &<br /><em>source notes.</em></h1><p>Keep the working vocabulary close. Every definition points back to a chapter where the term does real work.</p></div><div className="concept-grid">{concepts.map((concept) => <article className="concept-card" key={concept.id}><h3>{concept.label}</h3><p>{concept.definition}</p><div className="concept-footer"><span>Source chapter {chapters.find((c) => c.id === concept.chapterId)?.number}</span><button onClick={() => openChapter(concept.chapterId)}>Open chapter <ArrowRight size={14} /></button></div></article>)}</div></main>}

    <footer className="footer"><div><span className="brand-mark">E</span><strong>ESCAPEMENT</strong></div><p>The Interactive Learning Edition · The canonical book by Hicham Bedrani</p><div className="footer-links"><button onClick={() => setView("roadmap")}>Roadmap</button><button onClick={() => setView("glossary")}>Glossary</button><button onClick={() => setView("references")}>References</button><button onClick={() => setView("concepts")}>Concept explorer</button><button onClick={() => setView("progress")}>Progress</button></div></footer>
  </div>;
}
