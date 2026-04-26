import { Code2, Lightbulb, Rocket, Users, Wrench } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Wrench, label: "Strong Project Builder" },
  { icon: Rocket, label: "Fast Learner" },
  { icon: Lightbulb, label: "Innovation Focused" },
  { icon: Users, label: "Team Leader" },
  { icon: Code2, label: "Practical Problem Solver" },
];

const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "5+", label: "Awards & Wins" },
  { value: "3", label: "Years of Learning" },
  { value: "10+", label: "Technologies" },
];

export const About = () => (
  <Section id="about" eyebrow="01 — About" title="About Me">
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
      <div className="glass-card p-8 sm:p-10 space-y-5">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I am <span className="text-foreground font-semibold">Manoj Boddepalli</span>, a passionate
          3rd-year Electronics and Communication Engineering student with strong interest in{" "}
          <span className="text-gradient-primary font-semibold">Artificial Intelligence, IoT,
          Embedded Systems, and Full Stack Development</span>.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I enjoy building real-world projects that solve practical problems using machine learning,
          automation, sensors, and smart software systems.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          My goal is to become a high-impact engineer creating innovative products that improve lives
          through technology.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {highlights.map((h) => (
            <span
              key={h.label}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm hover:border-primary/60 hover:text-primary transition-all"
            >
              <h.icon className="w-4 h-4 text-primary" />
              {h.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass-card p-6 flex flex-col justify-center items-start"
          >
            <p className="text-4xl sm:text-5xl font-display font-bold text-gradient-primary">
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
