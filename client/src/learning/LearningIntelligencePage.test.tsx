import { describe, expect, it } from "vitest";
import { bookChapters, bookConcepts, bookExercises } from "../content/book.config";

describe("learning intelligence dashboard contracts", () => {
  it("has an activity-input mapping for every canonical exercise", () => {
    const ids = bookExercises.map((activity) => activity.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
    expect(bookExercises.every((activity) => bookChapters.some((chapter) => chapter.id === activity.chapterId))).toBe(true);
  });

  it("only renders concept ids that exist in the canonical concept catalog", () => {
    const known = new Set(bookConcepts.map((concept) => concept.id));
    const conceptIdsByChapter = new Map(bookChapters.map((chapter) => [chapter.id, chapter.concepts]));
    for (const activity of bookExercises) {
      for (const conceptId of conceptIdsByChapter.get(activity.chapterId) ?? []) {
        expect(known.has(conceptId)).toBe(true);
      }
    }
  });
});
