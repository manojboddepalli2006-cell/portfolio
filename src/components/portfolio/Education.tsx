import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    school: "Godavari Institute of Engineering & Technology, Rajahmundry",
    year: "2023 – Present",
    score: "CGPA: 7.21",
    notes: ["Strong in communication systems", "Electronics fundamentals", "AI & IoT focused learning"],
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College, Vizag",
    year: "2021 – 2023",
    score: "CGPA: 7.74",
    notes: [],
  },
  {
    degree: "SSC (10th Standard)",
    school: "MPL High School, Amadalavalasa",
    year: "2020 – 2021",
    score: "CGPA: 9.95",
    notes: [],
  },
];

export const Education = () => (
  <Section
    id="education"
    eyebrow="04 — Journey"
    title="Education"
    subtitle="A foundation built across communication systems, electronics, and modern AI."
  >
    <div className="relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
      <div className="space-y-10">
        {items.map((it, i) => (
          <div
            key={it.degree}
            className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
          >
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow-blue ring-4 ring-background" />
            <div className="sm:w-1/2 sm:px-10 ml-12 sm:ml-0">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-mono text-xs text-primary">{it.year}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{it.degree}</h3>
                <p className="text-sm text-muted-foreground mb-2">{it.school}</p>
                <p className="text-sm font-mono text-gradient-primary mb-3">{it.score}</p>
                {it.notes.length > 0 && (
                  <ul className="space-y-1">
                    {it.notes.map((n) => (
                      <li key={n} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" /> {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
