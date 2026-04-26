import { Award, Trophy, Rocket, Globe, Users } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Trophy, title: "1st Place — Electronics Design Competition", sub: "Wireless EV Charging System" },
  { icon: Award, title: "Hackathon Winner", sub: "Healthcare Data Automation System" },
  { icon: Rocket, title: "Participant — Mumbai Hacks 2025", sub: "National AI Hackathon" },
  { icon: Globe, title: "International Virtual Expo Presenter", sub: "EV Charging Innovation" },
  { icon: Users, title: "IoT Club — Team Lead", sub: "Project & Hardware Leadership" },
];

export const Achievements = () => (
  <Section
    id="achievements"
    eyebrow="05 — Recognition"
    title="Achievements"
    subtitle="Wins, milestones, and the moments that pushed me forward."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((a) => (
        <div key={a.title} className="glass-card p-6 flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow-blue">
            <a.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold leading-tight mb-1">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.sub}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
