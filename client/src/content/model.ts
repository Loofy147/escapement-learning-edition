export type Chapter = {
  id: string;
  number: number;
  title: string;
  part: string;
  minutes: number;
  summary: string;
  objectives: string[];
  prerequisites: string[];
  concepts: string[];
};

export type Exercise = {
  id: string;
  chapterId: string;
  type: "choice" | "sequence" | "classification" | "experiment" | "prediction";
  prompt: string;
  options?: string[];
  answer?: string | number | number[];
  explanation: string;
  misconception: string;
  hint: string;
};

export type Section = { id: string; chapterId: string; title: string; anchor: string; order: number; };
export type ValidationRule = { activityId: string; kind: Exercise["type"]; accepted: string | number | number[]; misconception: string; };
export type Feedback = { activityId: string; correct: string; incorrect: string; hint: string; sourceAnchor: string; };
export type Relationship = { from: string; to: string; kind: "prerequisite" | "related" | "application"; };

export type Concept = {
  id: string;
  label: string;
  definition: string;
  chapterId: string;
  related: string[];
  prerequisite?: string;
};

export const chapters: Chapter[] = [
  { id: "ch-01", number: 1, part: "Foundations", title: "Equal Seconds: Physics Meets the Bench", minutes: 18, summary: "Why equal intervals are an engineered achievement rather than a natural default.", objectives: ["Distinguish rate, accuracy, and precision", "Explain why temperature and position disturb a timekeeper"], prerequisites: ["A working idea of a clock as an oscillator"], concepts: ["isochronism", "rate", "position"] },
  { id: "ch-02", number: 2, part: "Foundations", title: "The Longitude Problem: Accuracy Only When Proved", minutes: 16, summary: "How navigation turned timekeeping into a public test of evidence.", objectives: ["Connect time error to longitude error", "Recognize why independent testing matters"], prerequisites: ["Equal intervals"], concepts: ["longitude", "chronometer", "evidence"] },
  { id: "ch-03", number: 3, part: "Mechanics", title: "Energy In, Work Out: Mainspring, Barrel, and Train", minutes: 22, summary: "Follow energy from the wound spring through the going train.", objectives: ["Trace the path of power", "Identify where friction and torque variation enter"], prerequisites: ["Rate and amplitude"], concepts: ["mainspring", "barrel", "going train"] },
  { id: "ch-04", number: 4, part: "Mechanics", title: "The Oscillator: Balance, Hairspring, Isochronism, and Positions", minutes: 25, summary: "The oscillator turns a flow of energy into a repeatable reference.", objectives: ["Describe the balance and hairspring as one system", "Predict how position changes rate"], prerequisites: ["Energy path"], concepts: ["balance", "hairspring", "isochronism"] },
  { id: "ch-05", number: 5, part: "Mechanics", title: "The Escapement: Dosing Energy and Keeping Order", minutes: 21, summary: "The escapement meters power and sustains oscillation.", objectives: ["Sequence locking, impulse, and release", "Relate geometry to reliability"], prerequisites: ["Oscillator"], concepts: ["escapement", "pallet", "impulse"] },
  { id: "ch-06", number: 6, part: "Mechanics", title: "Complications as Engineering Problems", minutes: 20, summary: "Calendars, chronographs, and tourbillons add loads, interfaces, and new failure modes.", objectives: ["Separate indication from timekeeping", "Reason about added torque and friction"], prerequisites: ["Going train and escapement"], concepts: ["calendar", "chronograph", "tourbillon"] },
  { id: "ch-07", number: 7, part: "Materials & Precision", title: "Metals and Alloys in the Movement", minutes: 17, summary: "Materials are selected for behavior, not appearance alone.", objectives: ["Connect material properties to use", "Identify tradeoffs in movement construction"], prerequisites: ["Movement architecture"], concepts: ["alloy", "hardness", "wear"] },
  { id: "ch-08", number: 8, part: "Materials & Precision", title: "Hairsprings: Evolution, Geometry, and Control", minutes: 22, summary: "Spring geometry and attachment determine the oscillator’s behavior.", objectives: ["Explain spring stiffness and breathing", "Recognize the effect of attachment and centering"], prerequisites: ["Balance oscillator"], concepts: ["hairspring", "breathing", "stud"] },
  { id: "ch-09", number: 9, part: "Materials & Precision", title: "Jewels, Friction, and Energy", minutes: 15, summary: "Jewels manage contact, but they do not make friction disappear.", objectives: ["Explain jewel bearing function", "Diagnose friction as a system problem"], prerequisites: ["Going train"], concepts: ["jewel", "friction", "endshake"] },
  { id: "ch-10", number: 10, part: "Materials & Precision", title: "Thermal Compensation, Magnetic Resistance, and Silicon", minutes: 19, summary: "Modern precision is a story of controlling environmental sensitivity.", objectives: ["Identify thermal and magnetic failure modes", "Compare traditional and non-ferrous components"], prerequisites: ["Materials and oscillator"], concepts: ["temperature", "magnetism", "silicon"] },
  { id: "ch-11", number: 11, part: "Standards", title: "Chronometer Is Not Chronograph", minutes: 14, summary: "A function and a performance claim are different things.", objectives: ["Define chronometer and chronograph", "Read a certification claim critically"], prerequisites: ["Rate and precision"], concepts: ["chronometer", "chronograph", "certification"] },
  { id: "ch-12", number: 12, part: "Standards", title: "ISO 3159 and the COSC Regime", minutes: 18, summary: "How a movement-only test turns rate into a comparable result.", objectives: ["Describe the five-position regime", "Distinguish movement testing from cased-watch testing"], prerequisites: ["Chronometer"], concepts: ["ISO 3159", "COSC", "positions"] },
  { id: "ch-13", number: 13, part: "Standards", title: "Beyond COSC: First-Party and Composite Regimes", minutes: 18, summary: "The scope of a claim matters as much as its number.", objectives: ["Compare third-party and internal regimes", "Ask what object and conditions were tested"], prerequisites: ["COSC regime"], concepts: ["METAS", "first-party test", "scope"] },
  { id: "ch-14", number: 14, part: "Standards", title: "COSC Excellence Chronometer: From Movement to Finished Watch", minutes: 19, summary: "Finished-watch evaluation closes the gap between movement and wear.", objectives: ["Explain why casing changes the measurement problem", "Map the certification workflow"], prerequisites: ["Movement-only testing"], concepts: ["finished watch", "magnetic resistance", "power reserve"] },
  { id: "ch-15", number: 15, part: "Standards", title: "Observatory Trials: The Ancestry of Modern Testing", minutes: 16, summary: "Public trials shaped the culture of proof that standards formalize.", objectives: ["Connect historical trials to modern protocols", "Identify the value of independent comparison"], prerequisites: ["Certification"], concepts: ["observatory trial", "comparison", "proof"] },
  { id: "ch-16", number: 16, part: "Practice", title: "Tools and Workspace", minutes: 14, summary: "The bench is a measurement environment, not merely a place to manipulate parts.", objectives: ["Set up a clean, repeatable workspace", "Choose tools by the observation they enable"], prerequisites: ["Movement architecture"], concepts: ["bench", "tool control", "cleanliness"] },
  { id: "ch-17", number: 17, part: "Practice", title: "Service Cycles", minutes: 17, summary: "Service is a sequence of decisions about wear, oil, seals, and evidence.", objectives: ["Build a service diagnosis", "Separate preventive work from unnecessary replacement"], prerequisites: ["Workspace"], concepts: ["service", "wear", "inspection"] },
  { id: "ch-18", number: 18, part: "Practice", title: "Timing and Regulation in Practice", minutes: 23, summary: "Regulation is controlled iteration: measure, change one variable, measure again.", objectives: ["Design a timing observation", "Use position and amplitude to choose a next action"], prerequisites: ["Rate, amplitude, positions"], concepts: ["timing machine", "regulation", "amplitude"] },
  { id: "ch-19", number: 19, part: "Practice", title: "Restoration Ethics", minutes: 13, summary: "A restored watch carries both a technical history and a responsibility to the owner.", objectives: ["State what should be preserved", "Document interventions honestly"], prerequisites: ["Service cycle"], concepts: ["restoration", "provenance", "disclosure"] },
  { id: "ch-20", number: 20, part: "Practice", title: "Getting Into the Trade", minutes: 12, summary: "A practical path into watchmaking is built from disciplined observation and patient repetition.", objectives: ["Identify early learning loops", "Choose practice that creates reliable feedback"], prerequisites: ["Bench practice"], concepts: ["apprenticeship", "practice loop", "judgment"] },
  { id: "ch-21", number: 21, part: "Context & Future", title: "Mechanical, Quartz, and Atomic", minutes: 15, summary: "Different timekeeping technologies optimize different constraints.", objectives: ["Compare reference mechanisms", "Avoid treating one technology as universally superior"], prerequisites: ["Standards"], concepts: ["mechanical", "quartz", "atomic"] },
  { id: "ch-22", number: 22, part: "Context & Future", title: "The Independent Watchmaking Movement", minutes: 14, summary: "Independence changes the scale, language, and economics of craft.", objectives: ["Recognize the value of small-scale experimentation", "Read originality alongside maintainability"], prerequisites: ["Practice and materials"], concepts: ["independent", "craft", "maintainability"] },
  { id: "ch-23", number: 23, part: "Context & Future", title: "Where the Standards Go Next", minutes: 16, summary: "The future of standards will be shaped by traceability, wear realism, and honest scope.", objectives: ["Propose a useful future test", "Balance measurement depth with practical cost"], prerequisites: ["Certification regimes"], concepts: ["traceability", "wear simulation", "future standard"] },
];

export const concepts: Concept[] = [
  { id: "isochronism", label: "Isochronism", definition: "The tendency of an oscillator to keep equal periods despite changes in amplitude or available energy.", chapterId: "ch-01", related: ["rate", "amplitude"], prerequisite: "rate" },
  { id: "rate", label: "Rate", definition: "The gain or loss of time expressed over a defined interval, commonly seconds per day.", chapterId: "ch-01", related: ["precision", "position"] },
  { id: "amplitude", label: "Amplitude", definition: "The angular excursion of the balance; a diagnostic signal about energy, friction, and health.", chapterId: "ch-18", related: ["rate", "friction"] },
  { id: "escapement", label: "Escapement", definition: "The mechanism that meters energy from the train and sustains the oscillator’s motion.", chapterId: "ch-05", related: ["pallet", "impulse"] },
  { id: "chronometer", label: "Chronometer", definition: "A timekeeper whose performance has been tested against a defined protocol and tolerances.", chapterId: "ch-11", related: ["COSC", "certification"] },
  { id: "COSC", label: "COSC", definition: "The Swiss organization associated with a public movement chronometer certification regime.", chapterId: "ch-12", related: ["ISO 3159", "chronometer"] },
  { id: "position", label: "Position", definition: "The orientation of a watch during observation; gravity and friction change behavior across positions.", chapterId: "ch-18", related: ["rate", "amplitude"] },
  { id: "friction", label: "Friction", definition: "Resistance at interfaces that consumes energy and can destabilize rate or amplitude.", chapterId: "ch-09", related: ["jewel", "amplitude"] },
];

export const exercises: Exercise[] = [
  { id: "ex-rate", chapterId: "ch-01", type: "choice", prompt: "A movement measures +3, +3, +3 seconds per day in the same position. Which statement is strongest?", options: ["It is precise, but accuracy still depends on the reference", "It is inaccurate and imprecise", "It has no measurable rate"], answer: 0, explanation: "The readings cluster tightly, so repeatability is strong. The +3 offset is an accuracy question that can be regulated.", misconception: "Confusing a stable error with random instability.", hint: "Separate closeness to zero from consistency between readings." },
  { id: "ex-sequence", chapterId: "ch-05", type: "sequence", prompt: "Put the escapement actions in the order that best describes one impulse cycle.", options: ["Impulse", "Locking", "Unlocking and release"], answer: [1, 0, 2], explanation: "A tooth is first held at lock, the balance unlocks the system, and impulse transfers energy before the next tooth is released.", misconception: "Treating the escapement as a continuous gear mesh rather than a timed gate.", hint: "Ask what must happen before energy can be delivered." },
  { id: "ex-experiment", chapterId: "ch-18", type: "experiment", prompt: "If a watch is +8 s/d dial-up and −4 s/d crown-down, what should you investigate before simply averaging the two numbers?", answer: "position", explanation: "The spread is positional behavior. Investigate poise, pivots, hairspring centering, and orientation-specific friction before celebrating the average.", misconception: "Believing an average erases a real wear-time experience.", hint: "The wearer does not keep the watch in one ideal orientation." },
];

export const partColors: Record<string, string> = {
  Foundations: "#b7793e",
  Mechanics: "#50788b",
  "Materials & Precision": "#9b6b52",
  Standards: "#725c8e",
  Practice: "#4e7664",
  "Context & Future": "#4b6b91",
};

export function gradeExercise(exercise: Exercise, answer: string | number | number[] | null) {
  const correct = exercise.type === "choice" || exercise.type === "prediction"
    ? answer === exercise.answer
    : exercise.type === "sequence" || exercise.type === "classification"
      ? JSON.stringify(answer) === JSON.stringify(exercise.answer)
      : experimentResult(Number(answer))?.correct === true;
  return {
    correct,
    explanation: correct ? exercise.explanation : `${exercise.misconception} ${exercise.hint}`,
    state: correct ? "correct" as const : "misconception" as const,
  };
}

export function searchChapters(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return chapters;
  return chapters.filter((chapter) => `${chapter.title} ${chapter.part} ${chapter.summary}`.toLowerCase().includes(normalized));
}

export function completionPercent(completedIds: string[]) {
  return Math.round((completedIds.filter((id) => chapters.some((chapter) => chapter.id === id)).length / chapters.length) * 100);
}


export const validationRules: ValidationRule[] = [
  { activityId: "ex-rate", kind: "choice", accepted: 0, misconception: "Confusing precision with accuracy." },
  { activityId: "ex-sequence", kind: "sequence", accepted: [1, 0, 2], misconception: "Treating the escapement as a continuous gear mesh." },
  { activityId: "ex-classify", kind: "classification", accepted: [0, 1, 1, 0], misconception: "Classifying a component by appearance instead of function." },
  { activityId: "ex-experiment", kind: "experiment", accepted: "position", misconception: "Believing an average erases positional behavior." },
];
export const feedbackLibrary: Feedback[] = [
  { activityId: "ex-rate", correct: "The readings cluster tightly: repeatability is strong.", incorrect: "A stable error is not the same as random instability.", hint: "Separate closeness to zero from consistency.", sourceAnchor: "ch-01-section-1" },
  { activityId: "ex-sequence", correct: "The escapement meters energy in a timed cycle.", incorrect: "The order matters because energy cannot be delivered before unlocking.", hint: "Ask what must happen before impulse.", sourceAnchor: "ch-05-section-1" },
  { activityId: "ex-classify", correct: "Function is the useful classifier here.", incorrect: "Look at what each part does in the system.", hint: "Classify by role, not by material.", sourceAnchor: "ch-03-section-1" },
  { activityId: "ex-experiment", correct: "Position is the next variable to investigate.", incorrect: "The spread points to orientation-specific behavior.", hint: "The wearer does not keep one ideal orientation.", sourceAnchor: "ch-18-section-1" },
  ...exercises.filter((activity) => !["ex-rate", "ex-sequence", "ex-classify", "ex-experiment"].includes(activity.id)).map((activity) => ({ activityId: activity.id, correct: activity.explanation, incorrect: `${activity.misconception} ${activity.hint}`, hint: activity.hint, sourceAnchor: `${activity.chapterId}-section-1` })),
];
export const relationships: Relationship[] = [
  { from: "rate", to: "isochronism", kind: "prerequisite" },
  { from: "isochronism", to: "escapement", kind: "related" },
  { from: "escapement", to: "chronometer", kind: "application" },
  { from: "position", to: "amplitude", kind: "related" },
];

exercises.splice(2, 0, { id: "ex-classify", chapterId: "ch-03", type: "classification", prompt: "Classify each statement as describing stored energy or regulated motion.", options: ["The mainspring holds torque", "The balance returns through an arc", "The barrel releases power", "The oscillator sets an interval"], answer: [0, 1, 0, 1], explanation: "The mainspring and barrel belong to stored energy; the balance and oscillator belong to regulated motion.", misconception: "Classifying a component by appearance instead of function.", hint: "Ask whether the statement stores power or measures time." });

export function sectionizeChapter(markdown: string, chapterId: string): Section[] {
  const headings = markdown.split("\n").filter((line) => line.startsWith("### "));
  return headings.map((line, order) => {
    const title = line.replace(/^###\s+/, "").trim();
    return { id: `${chapterId}-section-${order + 1}`, chapterId, title, anchor: `${chapterId}-section-${order + 1}`, order: order + 1 };
  });
}


export const chapterGuidance: Record<string, { explanation: string; nextStep: string }> = Object.fromEntries(chapters.map((chapter) => [chapter.id, {
  explanation: chapter.number <= 5 ? "Read this chapter as a chain: a physical condition creates a measurable effect, and the effect tells you what to inspect next." : chapter.number <= 15 ? "The useful question here is scope: what object was tested, under which conditions, and what does the result actually support?" : "Treat the bench as a reasoning environment. Make one change, record the result, and preserve enough evidence to explain the decision later.",
  nextStep: chapter.number < 5 ? "Continue to the next mechanism chapter and watch how energy becomes a timed event." : chapter.number < 16 ? "Compare this idea with the standards chapters and ask what a fair test would include." : "Apply the idea in Practice, then return to the chapter if your observation is unstable."
}]));

export function experimentResult(positionalSpread: number) {
  if (positionalSpread <= 2) return { label: "stable across positions", tone: "strong", correct: false, guidance: "Keep the observation protocol constant and verify against a calibrated reference." };
  if (positionalSpread <= 6) return { label: "worth investigating", tone: "watch", correct: true, guidance: "Compare amplitude, poise, pivots, and hairspring centering before regulating." };
  return { label: "large positional spread", tone: "urgent", correct: false, guidance: "Do not average this away; inspect orientation-specific friction and balance geometry." };
}

export function readingPositionKey(chapterId: string) { return `escapement-scroll-${chapterId}`; }
export function masteryAfterAttempt(masteredIds: string[], activityId: string, correct: boolean) { return correct && !masteredIds.includes(activityId) ? [...masteredIds, activityId] : masteredIds; }
export function saveReadingPosition(storage: Pick<Storage, "setItem">, chapterId: string, scrollY: number) { storage.setItem(readingPositionKey(chapterId), String(Math.max(0, Math.round(scrollY)))); }
export function restoreReadingPosition(storage: Pick<Storage, "getItem">, chapterId: string) { return Number(storage.getItem(readingPositionKey(chapterId)) || 0); }
export function restoreSectionPosition(progress: LearningProgress, chapterId: string) { return progress.positions[chapterId]?.sectionId || ""; }

export function recommendedChapter(currentId: string, completedIds: string[]) {
  const index = chapters.findIndex((chapter) => chapter.id === currentId);
  if (index < 0) return chapters[0];
  if (!completedIds.includes(currentId)) return chapters[index];
  return chapters[Math.min(index + 1, chapters.length - 1)];
}


const authoredGuidance: Record<string, { explanation: string; nextStep: string }> = {
  "ch-01": { explanation: "Begin by separating a repeatable reading from a correct reading; that distinction governs every later claim.", nextStep: "Carry the precision-versus-accuracy distinction into the longitude problem." },
  "ch-02": { explanation: "Longitude made time a practical instrument: an error that looks small in a workshop can become distance at sea.", nextStep: "Follow the historical pressure into the energy chain that keeps a clock alive." },
  "ch-03": { explanation: "The mainspring, barrel, and train do not create time; they deliver the energy that a regulator can shape.", nextStep: "Inspect the oscillator as the next place where energy becomes a reference." },
  "ch-04": { explanation: "The oscillator is where gravity, elasticity, and geometry meet, so position is part of the mechanism rather than a nuisance.", nextStep: "Read the escapement as the gate that meters each exchange of energy." },
  "ch-05": { explanation: "An escapement succeeds by controlling when energy is admitted, not by transmitting it continuously.", nextStep: "Use the locking, impulse, and release sequence in the practice checkpoint." },
  "ch-06": { explanation: "Complication is an engineering trade: every added indication introduces interfaces, loads, and more ways to diagnose behavior.", nextStep: "Ask how materials and tolerances keep added functions serviceable." },
  "ch-07": { explanation: "A material is useful only in relation to the load, friction, temperature, and service environment it must survive.", nextStep: "Trace those material choices into the small geometry of jewels and pivots." },
  "ch-08": { explanation: "Manufacturing precision is not an abstract virtue; it is the repeatability that lets parts cooperate without excessive correction.", nextStep: "Move from production tolerance to the friction it is meant to manage." },
  "ch-09": { explanation: "Friction changes the energy budget and can turn a clean-looking mechanism into an unstable timing system.", nextStep: "Study how lubrication makes friction a controlled variable rather than a mystery." },
  "ch-10": { explanation: "Amplitude is evidence about the oscillator’s energy and health, but it is meaningful only with position and time context.", nextStep: "Use amplitude as one input in a disciplined measurement protocol." },
  "ch-11": { explanation: "A chronometer is a claim about tested performance, while a chronograph is a function for recording intervals; similar words hide different jobs.", nextStep: "Read the certification regime with the object of the test in mind." },
  "ch-12": { explanation: "The COSC regime creates comparability through prescribed positions, temperatures, and a defined test object: the movement.", nextStep: "Compare movement-only proof with finished-watch evaluation." },
  "ch-13": { explanation: "Different regimes can produce different truths because scope, conditions, and independence change the meaning of a number.", nextStep: "Map what casing, magnetism, and power reserve add to the test problem." },
  "ch-14": { explanation: "Finished-watch testing asks whether the object a wearer carries behaves like the movement that was originally tested.", nextStep: "Look backward to the public trials that made independent comparison culturally important." },
  "ch-15": { explanation: "Observatory trials turned precision into public comparison, creating a lineage for modern certification language.", nextStep: "Bring that culture of proof to the practical bench." },
  "ch-16": { explanation: "A clean bench protects the observation: tool control, lighting, and order reduce variables before any part is touched.", nextStep: "Turn workspace discipline into a repeatable service cycle." },
  "ch-17": { explanation: "Service is diagnosis before intervention; wear, oil, seals, and evidence each deserve a separate decision.", nextStep: "Use measured timing to decide whether regulation is warranted." },
  "ch-18": { explanation: "Regulation is an experiment with one controlled change at a time, not an attempt to force a pretty number quickly.", nextStep: "Record the ethical boundary between improvement and historical erasure." },
  "ch-19": { explanation: "Restoration preserves an object’s story as well as its function, so disclosure is part of technical competence.", nextStep: "Consider the patient repetition required to make that judgment a trade." },
  "ch-20": { explanation: "Entry into the trade is built from short feedback loops: observe, attempt, inspect, and repeat without skipping the record.", nextStep: "Compare mechanical judgment with the constraints of other timekeeping technologies." },
  "ch-21": { explanation: "Mechanical, quartz, and atomic systems answer different questions about energy, reference, scale, and cost.", nextStep: "Return to craft and ask what independence adds beyond performance." },
  "ch-22": { explanation: "Independent watchmaking makes originality visible, but sustainable craft also depends on repairability and honest scale.", nextStep: "Use those tensions to imagine the next generation of standards." },
  "ch-23": { explanation: "Future standards will matter when they model real wear, preserve traceability, and state their limits plainly.", nextStep: "Finish by proposing the smallest test that would make a future claim more useful." },
};
export const authoredChapterGuidance = authoredGuidance;


export function sourceAnchorFor(activityId: string) {
  return feedbackLibrary.find((item) => item.activityId === activityId)?.sourceAnchor || null;
}
export function learnerStateAfterAttempt(state: { attempts: Record<string, number>; mastered: string[] }, activityId: string, correct: boolean) {
  return {
    attempts: { ...state.attempts, [activityId]: (state.attempts[activityId] || 0) + 1 },
    mastered: masteryAfterAttempt(state.mastered, activityId, correct),
    feedbackState: correct ? "correct" as const : "misconception" as const,
  };
}


exercises.push(
  { id: "ex-chronometer", type: "choice", chapterId: "ch-11", prompt: "Which statement best separates a chronometer from a chronograph?", options: ["A chronometer is a tested performance claim; a chronograph records intervals.", "A chronometer always has a stopwatch hand.", "They are two names for the same complication."], answer: 0, explanation: "The words describe different categories: one concerns tested timekeeping performance, the other an interval-recording function.", misconception: "You are treating a performance designation as if it were a display complication.", hint: "Ask whether the word describes evidence or an added function." },
  { id: "ex-cosc-scope", type: "choice", chapterId: "ch-12", prompt: "What is the most important scope question when reading a COSC claim?", options: ["Was the finished watch tested in every possible activity?", "Was the movement tested under the prescribed regime?", "Was the dial made by hand?"], answer: 1, explanation: "The traditional regime evaluates a movement under defined conditions; the object and conditions define what the result supports.", misconception: "You are extending a movement-level result beyond its stated test object.", hint: "Name the object that enters the test laboratory." },
  { id: "ex-material-role", type: "classification", chapterId: "ch-07", prompt: "Classify each observation by the role it plays in material selection.", options: ["Resists repeated bending", "Limits sliding loss", "Survives temperature change", "Matches a decorative finish"], answer: [1, 1, 1, 0], explanation: "Load, friction, and temperature are engineering requirements; decoration may matter, but it does not substitute for a service property.", misconception: "Aesthetic or familiar material labels are replacing the actual load case.", hint: "Classify by the failure mode the observation helps control." },
  { id: "ex-service", type: "sequence", chapterId: "ch-17", prompt: "Put the service diagnosis in the order that preserves evidence.", options: ["Record the symptom", "Inspect and measure", "Intervene once", "Measure again"], answer: [0, 1, 2, 3], explanation: "A baseline makes the intervention legible; one controlled change followed by a second measurement preserves the causal story.", misconception: "You are changing several variables before establishing what the watch was doing.", hint: "The first measurement should describe the problem, not the solution." },
  { id: "ex-restoration", type: "choice", chapterId: "ch-19", prompt: "What is the most responsible restoration note?", options: ["Describe the intervention and distinguish original from replaced material.", "Remove all visible wear so the watch looks new.", "Keep the intervention undocumented to preserve mystery."], answer: 0, explanation: "Disclosure protects provenance and lets a future owner understand both the object and the work performed.", misconception: "You are treating appearance as more important than the object’s history.", hint: "Ask what a future custodian needs to know." },
  { id: "ex-technology", type: "choice", chapterId: "ch-21", prompt: "Why is it weak to call one timekeeping technology universally superior?", options: ["Each technology optimizes a different combination of reference, energy, scale, and cost.", "All technologies produce exactly the same behavior.", "Mechanical systems cannot be measured."], answer: 0, explanation: "A fair comparison begins by naming the constraint: a mechanical watch, quartz oscillator, and atomic reference solve different problems.", misconception: "You are comparing systems without stating the criterion of success.", hint: "Superior for which task, under which constraint?" },
  { id: "ex-future-test", type: "experiment", chapterId: "ch-23", prompt: "Adjust the simulated wear-related spread and decide whether the proposed future test is useful.", options: [], answer: 5, explanation: "A moderate spread is a useful investigation signal: it invites a realistic wear protocol without pretending that one number settles the whole claim.", misconception: "An average or an extreme value is being treated as the entire story.", hint: "A useful standard makes the next question clearer." },
);


export type SyncMeta = { revision: number; updatedAt: number; deviceId: string };
export type LearnerEvidence = { misconception?: Record<string, number>; hintUse?: Record<string, number>; retries?: Record<string, number>; sourceReturns?: Record<string, number>; confidence?: Record<string, number> };
export type LearningProgress = { viewed: string[]; completed: string[]; attempts: Record<string, number>; mastered: string[]; current: string; positions: Record<string, { scrollY: number; sectionId: string }>; evidence?: LearnerEvidence; syncMeta?: SyncMeta };
export type SyncConflict = "none" | "remote-newer" | "local-newer" | "diverged";
export function classifyProgressConflict(local: LearningProgress, remote: LearningProgress): SyncConflict {
  if (!local.syncMeta || !remote.syncMeta || local.syncMeta.revision === remote.syncMeta.revision) return "none";
  if (local.syncMeta.deviceId === remote.syncMeta.deviceId) return local.syncMeta.revision > remote.syncMeta.revision ? "local-newer" : "remote-newer";
  if (local.syncMeta.updatedAt === remote.syncMeta.updatedAt) return "diverged";
  return local.syncMeta.updatedAt > remote.syncMeta.updatedAt ? "local-newer" : "remote-newer";
}
export function resolveProgressConflict(local: LearningProgress, remote: LearningProgress, choice: "local" | "remote" | "merge") {
  if (choice === "local") return local;
  if (choice === "remote") return remote;
  return mergeProgressStates(local, remote);
}
export function mergeProgressStates(local: LearningProgress, remote: LearningProgress): LearningProgress {
  const attempts = { ...local.attempts };
  Object.entries(remote.attempts || {}).forEach(([id, count]) => { attempts[id] = Math.max(attempts[id] || 0, count); });
  const mergeCounts = (key: keyof LearnerEvidence) => {
    const merged: Record<string, number> = { ...((local.evidence?.[key] || {}) as Record<string, number>) };
    Object.entries((remote.evidence?.[key] || {}) as Record<string, number>).forEach(([id, count]) => { merged[id] = key === "confidence" ? Math.max(merged[id] || 0, count) : (merged[id] || 0) + count; });
    return merged;
  };
  return {
    viewed: Array.from(new Set([...local.viewed, ...(remote.viewed || [])])),
    completed: Array.from(new Set([...local.completed, ...(remote.completed || [])])),
    attempts,
    mastered: Array.from(new Set([...local.mastered, ...(remote.mastered || [])])),
    current: remote.current || local.current,
    positions: { ...(local.positions || {}), ...(remote.positions || {}) },
    evidence: { misconception: mergeCounts("misconception"), hintUse: mergeCounts("hintUse"), retries: mergeCounts("retries"), sourceReturns: mergeCounts("sourceReturns"), confidence: mergeCounts("confidence") },
    syncMeta: remote.syncMeta || local.syncMeta,
  };
}


validationRules.push(
  { activityId: "ex-chronometer", kind: "choice", accepted: 0, misconception: "Confusing a performance designation with a display complication." },
  { activityId: "ex-cosc-scope", kind: "choice", accepted: 1, misconception: "Extending a movement-level result beyond its stated test object." },
  { activityId: "ex-material-role", kind: "classification", accepted: [1, 1, 1, 0], misconception: "Replacing the actual load case with an aesthetic or familiar material label." },
  { activityId: "ex-service", kind: "sequence", accepted: [0, 1, 2, 3], misconception: "Changing several variables before establishing a baseline." },
  { activityId: "ex-restoration", kind: "choice", accepted: 0, misconception: "Treating appearance as more important than an object’s history." },
  { activityId: "ex-technology", kind: "choice", accepted: 0, misconception: "Comparing systems without stating the criterion of success." },
  { activityId: "ex-future-test", kind: "experiment", accepted: "position", misconception: "Treating an average or extreme value as the entire story." },
);
feedbackLibrary.push(
  { activityId: "ex-chronometer", correct: "The distinction is between tested performance and interval recording.", incorrect: "A chronometer claim is not the same thing as a stopwatch function.", hint: "Ask whether the word describes evidence or an added function.", sourceAnchor: "ch-11-section-1" },
  { activityId: "ex-cosc-scope", correct: "Scope names the object and conditions that the result supports.", incorrect: "Do not extend a movement-level result to every finished-watch condition.", hint: "Name the object that enters the laboratory.", sourceAnchor: "ch-12-section-1" },
  { activityId: "ex-material-role", correct: "Load, friction, and temperature describe engineering requirements.", incorrect: "Classify by the failure mode the observation helps control.", hint: "Separate service properties from decoration.", sourceAnchor: "ch-07-section-1" },
  { activityId: "ex-service", correct: "A baseline makes the intervention legible.", incorrect: "The order protects the causal story of the service.", hint: "Measure before you change one variable.", sourceAnchor: "ch-17-section-1" },
  { activityId: "ex-restoration", correct: "Disclosure preserves provenance for the next custodian.", incorrect: "A polished surface cannot replace an honest intervention record.", hint: "Ask what a future owner needs to know.", sourceAnchor: "ch-19-section-1" },
  { activityId: "ex-technology", correct: "A fair comparison names the constraint first.", incorrect: "Different technologies optimize different combinations of reference, energy, scale, and cost.", hint: "Superior for which task and under which constraint?", sourceAnchor: "ch-21-section-1" },
  { activityId: "ex-future-test", correct: "The modeled spread is an investigation signal, not a final verdict.", incorrect: "Use the spread to define a more realistic wear protocol.", hint: "A useful standard makes the next question clearer.", sourceAnchor: "ch-23-section-1" },
);

// One additional practice checkpoint for each chapter not covered by the original activity set.
exercises.push(
  { id: "ex-longitude", type: "choice", chapterId: "ch-02", prompt: "Why did the longitude problem turn clock performance into a public engineering question?", options: ["A small time error becomes a navigational distance error.", "Ships cannot carry clocks.", "Longitude is determined only by the color of a dial."], answer: 0, explanation: "At sea, elapsed time is a proxy for position, so timekeeping error has geographic consequences.", misconception: "Treating accuracy as a cosmetic property rather than a navigational variable.", hint: "Connect elapsed time to position on a moving vessel." },
  { id: "ex-oscillator", type: "choice", chapterId: "ch-04", prompt: "What is the most useful first question when a rate changes between positions?", options: ["Which orientation changes the balance’s geometry, friction, or spring behavior?", "Which dial color is most attractive?", "How can the average hide the difference?"], answer: 0, explanation: "Position changes the forces and interfaces acting on the oscillator, so the orientation-specific evidence matters.", misconception: "Treating position as noise that can be erased by averaging.", hint: "The watch is a physical system in a gravitational field." },
  { id: "ex-complication", type: "classification", chapterId: "ch-06", prompt: "Classify each addition as an indication function or a timekeeping load.", options: ["Chronograph recording hand", "Additional switching friction", "Calendar display", "Extra torque demand"], answer: [0, 1, 0, 1], explanation: "The display functions indicate information; switching friction and torque demand change the mechanical load.", misconception: "Confusing what a complication shows with what it asks the movement to do.", hint: "Ask whether the item describes information or mechanical demand." },
  { id: "ex-hairspring", type: "sequence", chapterId: "ch-08", prompt: "Put the hairspring inspection sequence in a useful order.", options: ["Observe breathing and centering", "Check attachment and stud", "Measure behavior in positions", "Change one variable"], answer: [0, 1, 2, 3], explanation: "Observation precedes inspection, measurement establishes a baseline, and only then should one controlled change be made.", misconception: "Regulating before understanding the spring’s geometry and attachment.", hint: "Start with evidence, then isolate one cause." },
  { id: "ex-jewels", type: "choice", chapterId: "ch-09", prompt: "What does a jewel bearing primarily contribute to a movement?", options: ["A controlled, durable contact interface that limits wear and energy loss.", "A guarantee that friction disappears.", "A decorative substitute for lubrication."], answer: 0, explanation: "Jewels manage contact and wear; they remain part of a friction and lubrication system rather than eliminating it.", misconception: "Treating jewels as magic friction-proof components.", hint: "A bearing controls an interface; it does not repeal physics." },
  { id: "ex-environment", type: "choice", chapterId: "ch-10", prompt: "Which pairing best describes an environmental sensitivity and its control strategy?", options: ["Magnetism — use non-ferrous or resistant components.", "Temperature — ignore it because rate is constant.", "Silicon — increase magnetic pickup deliberately."], answer: 0, explanation: "Modern components and materials aim to reduce predictable sensitivity to magnetism and temperature.", misconception: "Treating environmental effects as unrelated to material choice.", hint: "Match the disturbance to a material or design response." },
  { id: "ex-composite-scope", type: "choice", chapterId: "ch-13", prompt: "What should a reader compare before ranking two certification regimes?", options: ["The test object, conditions, independence, and claim scope.", "Only the number printed in a brochure.", "The case finish and marketing vocabulary."], answer: 0, explanation: "A result is meaningful only in relation to what was tested, how it was tested, and what the issuer claims it proves.", misconception: "Comparing numbers while ignoring the regimes that produced them.", hint: "Scope is part of the result." },
  { id: "ex-finished-watch", type: "sequence", chapterId: "ch-14", prompt: "Put a finished-watch evaluation in the order that keeps the claim honest.", options: ["Define the wear-relevant conditions", "Test the cased watch", "Record the result and limits", "State what the claim supports"], answer: [0, 1, 2, 3], explanation: "The test becomes credible when conditions, observations, limits, and interpretation remain connected.", misconception: "Treating a finished-watch claim as if casing and wear cannot change behavior.", hint: "Define the test before interpreting its number." },
  { id: "ex-observatory", type: "choice", chapterId: "ch-15", prompt: "What did observatory trials add to the culture of precision?", options: ["Public comparison under demanding, shared conditions.", "A reason to avoid measurement.", "A guarantee that every watch would behave identically in daily life."], answer: 0, explanation: "Trials made performance comparable and visible while still leaving room to state the limits of the test.", misconception: "Confusing a demanding comparison with a promise of universal behavior.", hint: "Think about shared conditions and public evidence." },
  { id: "ex-bench", type: "classification", chapterId: "ch-16", prompt: "Classify each bench choice as reducing contamination or improving observation.", options: ["Covered parts tray", "Stable task lighting", "Finger cots", "Magnification at the point of inspection"], answer: [0, 1, 0, 1], explanation: "Trays and finger cots protect cleanliness; lighting and magnification improve what the watchmaker can see.", misconception: "Treating workspace choices as cosmetic rather than evidentiary controls.", hint: "Ask whether the choice protects the object or improves the observation." },
  { id: "ex-apprenticeship", type: "choice", chapterId: "ch-20", prompt: "Which practice loop most reliably builds early trade judgment?", options: ["Observe, attempt, inspect, record, and repeat.", "Copy a result without inspecting the cause.", "Change several variables and remember only the final impression."], answer: 0, explanation: "Short, documented feedback loops turn repetition into transferable judgment rather than muscle memory alone.", misconception: "Equating repetition with learning without inspection or records.", hint: "A useful loop makes the next attempt more informed." },
  { id: "ex-independent", type: "choice", chapterId: "ch-22", prompt: "What should be considered alongside originality in independent watchmaking?", options: ["Maintainability, service access, and the honesty of the production scale.", "Only visual novelty.", "Whether the mechanism can avoid all future service."], answer: 0, explanation: "Independent work can be original and still be judged by whether owners and future watchmakers can understand and maintain it.", misconception: "Treating originality as a substitute for durable responsibility.", hint: "Craft has a future custodian." },
);

validationRules.push(
  { activityId: "ex-longitude", kind: "choice", accepted: 0, misconception: "Treating accuracy as cosmetic rather than navigational." },
  { activityId: "ex-oscillator", kind: "choice", accepted: 0, misconception: "Treating position as noise that can be erased." },
  { activityId: "ex-complication", kind: "classification", accepted: [0, 1, 0, 1], misconception: "Confusing display function with mechanical load." },
  { activityId: "ex-hairspring", kind: "sequence", accepted: [0, 1, 2, 3], misconception: "Regulating before understanding spring geometry." },
  { activityId: "ex-jewels", kind: "choice", accepted: 0, misconception: "Treating jewels as friction-proof components." },
  { activityId: "ex-environment", kind: "choice", accepted: 0, misconception: "Ignoring the link between environment and materials." },
  { activityId: "ex-composite-scope", kind: "choice", accepted: 0, misconception: "Comparing numbers without comparing regimes." },
  { activityId: "ex-finished-watch", kind: "sequence", accepted: [0, 1, 2, 3], misconception: "Assuming casing cannot change behavior." },
  { activityId: "ex-observatory", kind: "choice", accepted: 0, misconception: "Confusing demanding comparison with universal behavior." },
  { activityId: "ex-bench", kind: "classification", accepted: [0, 1, 0, 1], misconception: "Treating workspace choices as cosmetic." },
  { activityId: "ex-apprenticeship", kind: "choice", accepted: 0, misconception: "Repeating without inspection or records." },
  { activityId: "ex-independent", kind: "choice", accepted: 0, misconception: "Treating originality as a substitute for responsibility." },
);

feedbackLibrary.push(
  { activityId: "ex-longitude", correct: "Time error becomes navigational distance error.", incorrect: "Accuracy is a practical variable when time is used to locate a vessel.", hint: "Connect elapsed time to position.", sourceAnchor: "ch-02-section-1" },
  { activityId: "ex-oscillator", correct: "Position is evidence about geometry, friction, and spring behavior.", incorrect: "Do not erase orientation-specific behavior with an average.", hint: "Ask what gravity changes at the interface.", sourceAnchor: "ch-04-section-1" },
  { activityId: "ex-complication", correct: "Indication and mechanical load are different categories.", incorrect: "A complication shows information but also changes what the movement must do.", hint: "Classify information versus demand.", sourceAnchor: "ch-06-section-1" },
  { activityId: "ex-hairspring", correct: "Evidence should precede a controlled adjustment.", incorrect: "Inspect breathing, attachment, and positions before regulating.", hint: "Start with observation.", sourceAnchor: "ch-08-section-1" },
  { activityId: "ex-jewels", correct: "Jewels manage contact; they do not abolish friction.", incorrect: "Keep the bearing inside the larger lubrication and wear system.", hint: "A bearing controls an interface.", sourceAnchor: "ch-09-section-1" },
  { activityId: "ex-environment", correct: "Material and design choices can reduce environmental sensitivity.", incorrect: "Match each disturbance with a physical control strategy.", hint: "Start with magnetism and non-ferrous components.", sourceAnchor: "ch-10-section-1" },
  { activityId: "ex-composite-scope", correct: "Scope belongs beside every certification number.", incorrect: "Compare object, conditions, independence, and claim.", hint: "Scope is part of the result.", sourceAnchor: "ch-13-section-1" },
  { activityId: "ex-finished-watch", correct: "Conditions and interpretation keep a finished-watch claim honest.", incorrect: "Casing and wear belong inside the test definition.", hint: "Define before interpreting.", sourceAnchor: "ch-14-section-1" },
  { activityId: "ex-observatory", correct: "Shared conditions make public comparison possible.", incorrect: "A trial creates evidence, not a universal daily-life promise.", hint: "Think shared conditions.", sourceAnchor: "ch-15-section-1" },
  { activityId: "ex-bench", correct: "The bench controls both cleanliness and observation.", incorrect: "Workspace decisions are evidentiary controls.", hint: "Protect the object or improve the observation.", sourceAnchor: "ch-16-section-1" },
  { activityId: "ex-apprenticeship", correct: "Documented feedback turns repetition into judgment.", incorrect: "Repeat only after inspecting what the last attempt taught.", hint: "Make the next attempt more informed.", sourceAnchor: "ch-20-section-1" },
  { activityId: "ex-independent", correct: "Originality is strongest when it remains maintainable.", incorrect: "A future custodian is part of the design problem.", hint: "Think beyond the first owner.", sourceAnchor: "ch-22-section-1" },
);
