const KEY = "fisiopatho-progress-v1";

export type Progress = {
  chapters: Record<string, boolean>;
  quizBest: number;
};

const empty = (): Progress => ({ chapters: {}, quizBest: 0 });

export function loadProgress(): Progress {
  if (typeof localStorage === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Progress;
    return {
      chapters: parsed.chapters ?? {},
      quizBest: typeof parsed.quizBest === "number" ? parsed.quizBest : 0,
    };
  } catch {
    return empty();
  }
}

export function saveProgress(next: Progress) {
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function markChapterRead(slug: string) {
  const p = loadProgress();
  p.chapters[slug] = true;
  saveProgress(p);
  return p;
}

export function saveQuizBest(score: number) {
  const p = loadProgress();
  p.quizBest = Math.max(p.quizBest, score);
  saveProgress(p);
  return p;
}
