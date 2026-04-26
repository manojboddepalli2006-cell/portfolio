import { Mail, Github, Linkedin, ArrowUpRight, Phone } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "manojboddepalli2006@gmail.com",
    href: "mailto:manojboddepalli2006@gmail.com",
    cta: "Send Email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 79896 83953",
    href: "tel:+917989683953",
    cta: "Call Now",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/manoj-boddepalli",
    href: "https://www.linkedin.com/in/manoj-boddepalli/",
    cta: "View LinkedIn",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "manojboddepalli2006-cell",
    href: "https://github.com/manojboddepalli2006-cell/",
    cta: "View GitHub",
  },
];

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="07 — Contact"
    title="Let's Connect"
    subtitle="Open for internships, collaborations, freelance work, and innovative opportunities."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="glass-card p-7 group flex flex-col"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-blue">
              <c.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </div>
          <p className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-1">
            {c.label}
          </p>
          <p className="font-display text-lg mb-6 break-all">{c.value}</p>
          <Button variant="outlineNeon" size="sm" className="mt-auto self-start">
            {c.cta}
          </Button>
        </a>
      ))}
    </div>

    <div className="mt-12">
      <ContactForm />
    </div>

    <div className="mt-12 glass-card p-8 sm:p-10 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-primary-soft opacity-60" />
      <h3 className="font-display text-2xl sm:text-3xl mb-3">
        Have an idea worth building?
      </h3>
      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        Whether it's an AI prototype, an IoT product, or a full-stack web app — let's talk.
      </p>
      <Button asChild variant="neon" size="xl">
        <a href="mailto:manojboddepalli2006@gmail.com">
          <Mail className="w-4 h-4" /> Start a Conversation
        </a>
      </Button>
    </div>
  </Section>
);
