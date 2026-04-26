import { Briefcase, Cpu, Layers, Sparkles, Users } from "lucide-react";
import { Section } from "./Section";

const responsibilities = [
  { icon: Users, text: "Led project teams across multi-disciplinary IoT initiatives" },
  { icon: Cpu, text: "Managed end-to-end hardware and software integration" },
  { icon: Layers, text: "Developed real-time IoT systems with sensor networks" },
  { icon: Sparkles, text: "Mentored teammates in development workflows and best practices" },
];

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="06 — Leadership"
    title="Experience"
    subtitle="Hands-on leadership building real systems, not just slides."
  >
    <div className="glass-card p-8 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-blue">
            <Briefcase className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-2xl">IoT Club — Team Lead</h3>
            <p className="text-muted-foreground text-sm">GIET, Rajahmundry</p>
          </div>
        </div>
        <span className="self-start font-mono text-xs text-primary glass px-3 py-1.5 rounded-full">
          Current Role
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {responsibilities.map((r) => (
          <div key={r.text} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 hover:bg-muted/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary-soft border border-primary/30 flex items-center justify-center shrink-0">
              <r.icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-foreground/90">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
