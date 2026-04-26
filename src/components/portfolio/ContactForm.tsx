import { useState } from "react";
import { Send, Loader2, MessageCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const PHONE = "917989683953";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name too long"),
  email: z.string().trim().email("Please enter a valid email").max(150),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s\-()]+$/, "Phone can only contain digits and + - ( )"),
  subject: z.string().trim().min(2, "Subject is required").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const initial: FormData = { name: "", email: "", phone: "", subject: "", message: "" };

export const ContactForm = () => {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fe: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setLoading(true);
    try {
      const { name, email, phone, subject, message } = result.data;
      const text =
        `Hi Manoj, I'm reaching out from your portfolio.\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Subject:* ${subject}\n\n` +
        `*Message:*\n${message}`;
      const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

      await new Promise((r) => setTimeout(r, 600)); // brief loading state
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp — tap send to deliver your message");
      setData(initial);
    } catch {
      toast.error("Couldn't open WhatsApp. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (k: keyof FormData) =>
    `bg-background/40 border-border/60 focus-visible:ring-primary/40 ${
      errors[k] ? "border-destructive/70 focus-visible:ring-destructive/40" : ""
    }`;

  return (
    <div className="glass-card p-7 sm:p-9 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="flex items-center gap-3 mb-6 relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-blue">
          <MessageCircle className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display text-xl">Send a Message</h3>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
            Delivered via WhatsApp
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="cf-name">Name</Label>
            <Input id="cf-name" value={data.name} onChange={update("name")} placeholder="Your full name" maxLength={80} className={fieldClass("name")} disabled={loading} />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cf-email">Email</Label>
            <Input id="cf-email" type="email" value={data.email} onChange={update("email")} placeholder="you@example.com" maxLength={150} className={fieldClass("email")} disabled={loading} />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="cf-phone">Phone</Label>
            <Input id="cf-phone" type="tel" value={data.phone} onChange={update("phone")} placeholder="+91 98765 43210" maxLength={20} className={fieldClass("phone")} disabled={loading} />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cf-subject">Subject</Label>
            <Input id="cf-subject" value={data.subject} onChange={update("subject")} placeholder="Internship, project, collab…" maxLength={120} className={fieldClass("subject")} disabled={loading} />
            {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="cf-message">Message</Label>
          <Textarea id="cf-message" value={data.message} onChange={update("message")} placeholder="Tell me a bit about your idea or opportunity…" rows={5} maxLength={1000} className={fieldClass("message")} disabled={loading} />
          <div className="flex justify-between">
            {errors.message ? (
              <p className="text-xs text-destructive">{errors.message}</p>
            ) : (
              <span />
            )}
            <p className="text-xs text-muted-foreground">{data.message.length}/1000</p>
          </div>
        </div>

        <Button type="submit" variant="neon" size="lg" disabled={loading} className="w-full sm:w-auto">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Opening WhatsApp…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Send via WhatsApp
            </>
          )}
        </Button>
      </form>
    </div>
  );
};