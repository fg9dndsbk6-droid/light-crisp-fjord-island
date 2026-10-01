import type { Chapter } from "./types";
import { capitulo1 } from "./capitulo-1";
import { capitulo2 } from "./capitulo-2";
import { capitulo3 } from "./capitulo-3";
import { capitulo4 } from "./capitulo-4";

export const chapters: Chapter[] = [capitulo1, capitulo2, capitulo3, capitulo4];

export function getChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export function getChapterIndex(slug: string) {
  return chapters.findIndex((c) => c.slug === slug);
}

export { quizQuestions } from "./quiz";
export { references, glossary } from "./refs";
export type { Chapter, Block, Section, QuizQuestion, FigureSpec, CalloutTone } from "./types";
