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
  type: "choice" | "sequence" | "classification" | "experiment";
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
  const correct = exercise.type === "choice"
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
