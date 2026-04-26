import { Github, Linkedin, Mail } from "lucide-react";

const items = [
  { icon: Mail, href: "mailto:manojboddepalli2006@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/manoj-boddepalli/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/manojboddepalli2006-cell/", label: "GitHub" },
];

export const FloatingSocial = () => (
  <aside className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
    {items.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target={s.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={s.label}
        className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 hover:border-primary/60 transition-all"
      >
        <s.icon className="w-5 h-5" />
      </a>
    ))}
    <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-2" />
  </aside>
);
