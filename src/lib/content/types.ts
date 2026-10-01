export type CalloutTone = "prova" | "clinica" | "atencao" | "memo";

export type FigureSpec = {
  src: string;
  caption: string;
  alt: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "figure"; figure: FigureSpec }
  | { type: "figures"; figures: FigureSpec[] }
  | { type: "callout"; tone: CalloutTone; title: string; text: string };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  readingMin: number;
  date: string;
  sources: string;
  objectives: string[];
  sections: Section[];
};

export type QuizQuestion = {
  id: string;
  chapter: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};
