import { describe, expect, it } from "vitest";
import { bookChapters, bookConcepts, bookExercises } from "../content/book.config";
import { learningActivitiesFromCatalog } from "./activityConceptMap";

describe("learning intelligence dashboard contracts", () => {
  it("has an activity-input mapping for every canonical exercise", () => {
    const ids = bookExercises.map((activity) => activity.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
    expect(bookExercises.every((activity) => bookChapters.some((chapter) => chapter.id === activity.chapterId))).toBe(true);
  });

  it("renders only explicit concept ids that exist in the canonical concept catalog", () => {
    const known = new Set(bookConcepts.map((concept) => concept.id));
    const mapped = learningActivitiesFromCatalog(bookExercises, bookConcepts);
    expect(mapped).toHaveLength(bookExercises.length);
    expect(mapped.every((activity) => activity.conceptIds.every((conceptId) => known.has(conceptId)))).toBe(true);
  });
});
