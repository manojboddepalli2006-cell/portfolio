import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 py-10 px-6 md:px-10 lg:px-16">
    <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground">
          MB
        </span>
        <p className="text-sm text-muted-foreground">
          © 2026 Manoj Boddepalli. Built with passion and innovation.
        </p>
      </div>
      <div className="flex items-center gap-3">
        {[
          { icon: Mail, href: "mailto:manojboddepalli2006@gmail.com", label: "Email" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/manoj-boddepalli/", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/manojboddepalli2006-cell/", label: "GitHub" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 hover:border-primary/60 transition-all"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
