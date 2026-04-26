import { Section } from "./Section";
import { ArrowUpRight, Github, ShieldCheck, Search, BatteryCharging, HeartPulse, Sun, Utensils } from "lucide-react";

const projects = [
  {
    icon: ShieldCheck,
    title: "AI-Powered Fake Certificate Detection",
    description: "Intelligent certificate verification platform using OCR, NLP, and Machine Learning to detect fake or manipulated certificates.",
    features: ["Upload system", "OCR extraction", "NLP validation", "Admin dashboard", "Real-time results"],
    tech: ["Python", "OCR", "NLP", "ML"],
    accent: "from-primary to-secondary",
  },
  {
    icon: Search,
    title: "Missing Child Rescue AI",
    description: "AI-powered system to identify missing children using face recognition, alert systems, and smart matching technology.",
    features: ["Face recognition", "Person database", "Alert notifications", "Search dashboard"],
    tech: ["Python", "AI", "Computer Vision"],
    accent: "from-secondary to-primary",
  },
  {
    icon: BatteryCharging,
    title: "Wireless EV Charging System",
    description: "High-efficiency wireless EV charging system using resonant inductive coupling with IoT monitoring & renewable forecasting.",
    features: ["96.63% efficiency", "Smart control", "IoT monitoring", "Grid integration"],
    tech: ["MATLAB", "Embedded C", "IoT", "PCB"],
    accent: "from-primary to-primary-glow",
    badge: "Research",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Data Automation",
    description: "OCR-based healthcare automation system to reduce manual entry errors and improve hospital workflow.",
    features: ["+82% data accuracy", "-70% entry time", "Automated pipeline"],
    tech: ["Python", "OCR", "Database", "Automation"],
    accent: "from-secondary to-secondary-glow",
  },
  {
    icon: Sun,
    title: "Solar Energy Forecasting & IoT Grid",
    description: "ML forecasting models and live IoT dashboards for renewable energy monitoring at the grid edge.",
    features: ["ARIMA + LSTM models", "Live dashboards", "NodeMCU sensors"],
    tech: ["ML", "ARIMA", "LSTM", "NodeMCU"],
    accent: "from-primary to-secondary",
  },
  {
    icon: Utensils,
    title: "Aunty's Kitchen — Restaurant Site",
    description: "Modern responsive restaurant website with menu showcase, smooth UI, and mobile friendly design.",
    features: ["Menu showcase", "Smooth UI", "Mobile-first"],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    accent: "from-secondary to-primary",
  },
];

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="03 — Work"
    title="Featured Projects"
    subtitle="A selection of products, research, and experiments I've built across AI, IoT, and the web."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <article
          key={p.title}
          className="glass-card p-7 group relative overflow-hidden"
        >
          <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500`} />

          <div className="flex items-start justify-between gap-4 mb-5 relative">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-glow-blue`}>
              <p.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex items-center gap-2">
              {p.badge && (
                <span className="text-xs font-mono px-2.5 py-1 rounded-full glass text-secondary">
                  {p.badge}
                </span>
              )}
              <button
                aria-label="Open project"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/60 transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-gradient-primary transition-all">
            {p.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
            {p.features.map((f) => (
              <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gradient-primary" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <a
        href="https://github.com/manojboddepalli2006-cell/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl hover:border-primary/60 hover:text-primary transition-all"
      >
        <Github className="w-4 h-4" /> Explore more on GitHub <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </Section>
);
