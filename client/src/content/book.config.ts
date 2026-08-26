import canonicalSource from "./book.md?raw";
import { chapters, concepts, exercises, partColors } from "./model";

export const bookConfig = {
  id: "escapement",
  title: "Escapement",
  author: "Hicham Bedrani",
  language: "en",
  sourceVersion: "1.0.0",
  sourcePath: "./book.md",
  source: canonicalSource,
  routePrefix: "/read",
  anonymousProgressKey: "escapement-progress",
  chapterCount: 23,
} as const;

export const bookChapters = chapters;
export const bookConcepts = concepts;
export const bookExercises = exercises;
export const bookPartColors = partColors;
export type BookConfig = typeof bookConfig;
