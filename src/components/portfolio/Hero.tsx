import { Download, Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTyping } from "@/hooks/use-typing";
import avatar from "@/assets/manoj-photo.png";

const roles = [
  "AI Developer",
  "IoT Engineer",
  "Web Developer",
  "Problem Solver",
  "Future Tech Creator",
];

export const Hero = () => {
  const typed = useTyping(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute inset-0 -z-10 neon-grid opacity-40" />
      <div className="absolute top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] rounded-full bg-secondary/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container-narrow grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <div className="space-y-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Available for internships & collaborations</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
              <span className="text-gradient">Manoj</span>{" "}
              <span className="text-gradient-primary">Boddepalli</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-display">
              Student Innovator & AI Builder
            </p>
          </div>

          <div className="flex items-center gap-3 text-lg sm:text-xl">
            <span className="text-muted-foreground">I'm a</span>
            <span className="font-mono font-semibold text-gradient-primary min-h-[1.6em] inline-flex items-center">
              {typed}
              <span className="ml-1 inline-block w-[2px] h-6 bg-primary animate-blink" />
            </span>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Creating intelligent solutions with AI, IoT, and modern technology. Passionate about
            building real-world products that improve lives.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="neon" size="xl">
              <a href="#projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outlineNeon" size="xl">
              <a href="#contact">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" /> Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/manojboddepalli2006-cell/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 hover:border-primary/60 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-boddepalli/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 hover:border-primary/60 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:manojboddepalli2006@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 hover:border-primary/60 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="relative flex items-center justify-center animate-scale-in">
          <div className="absolute inset-0 m-auto w-[80%] aspect-square rounded-full bg-gradient-primary opacity-30 blur-3xl animate-glow-pulse" />
          <div className="absolute inset-0 m-auto w-[90%] aspect-square rounded-full border border-primary/20 animate-spin-slow" />
          <div className="absolute inset-0 m-auto w-[70%] aspect-square rounded-full border border-secondary/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "24s" }} />

          <div className="relative w-[78%] aspect-square rounded-full glass overflow-hidden glow-mix animate-float">
            <img
              src={avatar}
              alt="Manoj Boddepalli portrait"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>

          {/* floating badges */}
          <div className="absolute top-6 -left-2 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "0.6s" }}>
            <p className="text-xs text-muted-foreground">Currently</p>
            <p className="text-sm font-semibold">B.Tech ECE · 3rd Year</p>
          </div>
          <div className="absolute bottom-10 -right-2 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1.2s" }}>
            <p className="text-xs text-muted-foreground">Focus</p>
            <p className="text-sm font-semibold text-gradient-primary">AI · IoT · Web</p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-border flex justify-center pt-2">
          <span className="block w-1 h-1.5 rounded-full bg-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
