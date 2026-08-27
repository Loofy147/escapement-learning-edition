import { describe, expect, it } from "vitest";
import { concepts, exercises } from "../content/model";
import { activityAnnotations, misconceptions, validateLearningAnnotations } from "./learningAnnotations";

describe("learning annotations", () => {
  it("annotates every catalog activity with a known misconception contract", () => {
    expect(validateLearningAnnotations(exercises, concepts)).toBe(true);
    for (const exercise of exercises) expect(activityAnnotations[exercise.id]?.misconceptionId).toBeTruthy();
  });

  it("uses stable misconception IDs rather than free-form labels", () => {
    expect(misconceptions.map((item) => item.id)).toEqual([
      "M-PRECISION-001",
      "M-ESCAPEMENT-001",
      "M-POSITION-001",
    ]);
  });

  it("fails when an unknown misconception is referenced", () => {
    const original = activityAnnotations["ex-rate"].misconceptionId;
    activityAnnotations["ex-rate"].misconceptionId = "M-UNKNOWN-999";
    expect(() => validateLearningAnnotations(exercises, concepts)).toThrow(/unknown misconception/);
    activityAnnotations["ex-rate"].misconceptionId = original;
  });
});
