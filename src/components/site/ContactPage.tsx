import { Megaphone, Phone } from "lucide-react";
import { Reveal } from "@/components/site/atoms";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageFrame } from "@/components/site/PageFrame";

export function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact Us"
      title="Let's build your digital future together."
      intro="Share your idea, business challenge, or growth goal. We will help shape the right technology, branding, marketing, or consulting plan."
    >
      <div className="mt-14">
        <EnquiryForm />
        <Reveal delay={120}>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <a
              href="tel:+919629126119"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/35 px-6 py-3 text-[var(--gold)] glass"
            >
              <Phone className="h-4 w-4" /> +91 96291 26119
            </a>
            <a
              href="mailto:hello@fruitioninnovix.com"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/35 px-6 py-3 text-foreground/90 glass"
            >
              <Megaphone className="h-4 w-4 text-[var(--gold)]" /> hello@fruitioninnovix.com
            </a>
          </div>
        </Reveal>
      </div>
    </PageFrame>
  );
}
