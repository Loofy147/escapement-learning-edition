import { describe, expect, it } from "vitest";
import { chapters, exercises, completionPercent, gradeExercise, searchChapters, experimentResult, recommendedChapter, readingPositionKey, saveReadingPosition, restoreReadingPosition, masteryAfterAttempt, sourceAnchorFor, learnerStateAfterAttempt } from "../client/src/content/model";

describe("learning model", () => {
  it("returns explanatory feedback for correct answers", () => {
    const result = gradeExercise(exercises[0], exercises[0].answer ?? null);
    expect(result.correct).toBe(true);
    expect(result.state).toBe("correct");
    expect(result.explanation.length).toBeGreaterThan(20);
  });

  it("detects a misconception on an incorrect answer", () => {
    const result = gradeExercise(exercises[0], 2);
    expect(result.correct).toBe(false);
    expect(result.state).toBe("misconception");
    expect(result.explanation).toContain("Confusing");
  });

  it("supports contextual chapter search", () => {
    expect(searchChapters("escapement").some((chapter) => chapter.id === "ch-05")).toBe(true);
    expect(searchChapters("")).toHaveLength(chapters.length);
  });

  it("calculates progress only from known chapters", () => {
    expect(completionPercent(["ch-01", "ch-02", "unknown"])).toBe(9);
    expect(completionPercent([])).toBe(0);
  });

  it("returns modeled experiment outcomes for different positional spreads", () => {
    expect(experimentResult(1).tone).toBe("strong");
    expect(experimentResult(5).tone).toBe("watch");
    expect(experimentResult(10).tone).toBe("urgent");
  });

  it("recommends the current chapter until it is complete, then advances", () => {
    expect(recommendedChapter("ch-03", []).id).toBe("ch-03");
    expect(recommendedChapter("ch-03", ["ch-03"]).id).toBe("ch-04");
  });

  it("uses stable keys for in-chapter reading position", () => {
    expect(readingPositionKey("ch-07")).toBe("escapement-scroll-ch-07");
  });

  it("adds mastery only after a correct attempt and never duplicates it", () => {
    expect(masteryAfterAttempt([], "ex-rate", false)).toEqual([]);
    expect(masteryAfterAttempt([], "ex-rate", true)).toEqual(["ex-rate"]);
    expect(masteryAfterAttempt(["ex-rate"], "ex-rate", true)).toEqual(["ex-rate"]);
  });

  it("persists and restores an in-chapter scroll position", () => {
    const storage = new Map<string, string>();
    const adapter = { setItem: (key: string, value: string) => storage.set(key, value), getItem: (key: string) => storage.get(key) ?? null };
    saveReadingPosition(adapter, "ch-05", 842.7);
    expect(restoreReadingPosition(adapter, "ch-05")).toBe(843);
  });

  it("resolves exact source anchors and updates learner state after grading", () => {
    expect(sourceAnchorFor("ex-sequence")).toBe("ch-05-section-1");
    expect(learnerStateAfterAttempt({ attempts: {}, mastered: [] }, "ex-sequence", false)).toMatchObject({ attempts: { "ex-sequence": 1 }, mastered: [], feedbackState: "misconception" });
    expect(learnerStateAfterAttempt({ attempts: { "ex-sequence": 1 }, mastered: [] }, "ex-sequence", true)).toMatchObject({ attempts: { "ex-sequence": 2 }, mastered: ["ex-sequence"], feedbackState: "correct" });
  });
});
