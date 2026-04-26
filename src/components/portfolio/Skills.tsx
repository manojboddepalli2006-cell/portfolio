import { Section } from "./Section";
import {
  Brain, Cpu, Code2, Wrench, Users, Monitor, Search, X,
} from "lucide-react";
import { useMemo, useState } from "react";

type Skill = { name: string; level: number };
type Group = { title: string; icon: typeof Brain; color: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "C Programming", level: 78 },
    ],
  },
  {
    title: "Web Development",
    icon: Monitor,
    color: "from-secondary to-secondary-glow",
    skills: [
      { name: "React", level: 82 },
      { name: "Responsive Design", level: 88 },
      { name: "UI/UX Basics", level: 75 },
    ],
  },
  {
    title: "AI / Data",
    icon: Brain,
    color: "from-primary to-secondary",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "NLP", level: 78 },
      { name: "OCR", level: 82 },
      { name: "Data Analysis", level: 80 },
    ],
  },
  {
    title: "IoT / Hardware",
    icon: Cpu,
    color: "from-secondary to-primary",
    skills: [
      { name: "Arduino", level: 88 },
      { name: "Embedded Systems", level: 82 },
      { name: "Sensor Integration", level: 85 },
      { name: "Circuit Design", level: 78 },
      { name: "Wireless Communication", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-primary-glow to-primary",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-secondary-glow to-secondary",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Teamwork", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

export const Skills = () => {
  const [query, setQuery] = useState("");

  const q = query.trim();

  const filtered = useMemo(() => {
    const ql = q.toLowerCase();
    if (!ql) return groups;
    return groups
      .map((g) => ({
        ...g,
        skills: g.skills.filter((s) => s.name.toLowerCase().includes(ql)),
      }))
      .filter((g) => g.skills.length > 0);
  }, [q]);

  const highlight = (text: string) => {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-primary/30 text-primary-foreground rounded px-0.5">
          {text.slice(idx, idx + q.length)}
        </mark>
        {text.slice(idx + q.length)}
      </>
    );
  };

  return (
    <Section
    id="skills"
    eyebrow="02 — Skills"
    title="Technical Arsenal"
    subtitle="Tools, languages, and concepts I use to build intelligent products."
  >
    <div className="mb-8 max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills..."
          className="w-full pl-11 pr-11 py-3 rounded-full bg-muted/40 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:bg-muted/60 transition-all"
          aria-label="Search skills"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.length === 0 && (
        <p className="col-span-full text-center text-muted-foreground">
          No skills match "{query}".
        </p>
      )}
      {filtered.map((g) => (
        <div key={g.title} className="glass-card p-6 group">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center shadow-glow-blue`}>
              <g.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg">{g.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {g.skills.map((s) => (
              <span
                key={s.name}
                className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-foreground"
              >
                {highlight(s.name)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </Section>
  );
};
