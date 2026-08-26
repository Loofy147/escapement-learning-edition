import { describe, expect, it } from "vitest";
import { chapters, exercises, completionPercent, gradeExercise, searchChapters } from "./model";

describe("interactive learning model", () => {
  it("grades a correct multiple-choice answer with explanatory feedback", () => {
    const result = gradeExercise(exercises[0], exercises[0].answer ?? null);
    expect(result.correct).toBe(true);
    expect(result.state).toBe("correct");
    expect(result.explanation.length).toBeGreaterThan(20);
  });

  it("detects the misconception path for an incorrect answer", () => {
    const result = gradeExercise(exercises[0], 2);
    expect(result.correct).toBe(false);
    expect(result.state).toBe("misconception");
    expect(result.explanation).toContain("Confusing");
  });

  it("finds chapters by title, part, and summary", () => {
    expect(searchChapters("escapement").some((chapter) => chapter.id === "ch-05")).toBe(true);
    expect(searchChapters("standards").length).toBeGreaterThan(0);
    expect(searchChapters("")).toHaveLength(chapters.length);
  });

  it("calculates completion only from real chapter ids", () => {
    expect(completionPercent(["ch-01", "ch-02", "not-a-chapter"])).toBe(9);
    expect(completionPercent([])).toBe(0);
  });
});
