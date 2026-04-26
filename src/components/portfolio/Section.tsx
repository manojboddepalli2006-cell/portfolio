import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className }: Props) => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={cn("section-padding reveal relative", className)}>
      <div className="container-narrow">
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <p className="font-mono text-xs sm:text-sm text-primary uppercase tracking-[0.3em] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};
