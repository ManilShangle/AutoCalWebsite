import { motion } from "framer-motion";
import {
  Camera, Cpu, MousePointerClick, Crop, PenLine, Link2,
  Clock, Globe, ArrowRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExtensionMockup from "@/components/ExtensionMockup";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/autocal/gmefkfopmlmjedipnjmjielmphodpphn";

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Index = () => (
  <div className="bg-background text-foreground overflow-x-hidden">
    <Navbar />

    {/* ══════════════════════════════════════════
        HERO — centered, serif headline, mockup below
    ══════════════════════════════════════════ */}
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(243 73% 59% / 0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="mb-7">
          <span className="mono-label text-primary text-[11px] tracking-widest">
            Chrome Extension · Free · Powered by GPT-4o
          </span>
        </motion.div>

        {/* Headline — serif italic key word */}
        <motion.h1
          variants={item}
          className="serif text-[2.8rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] leading-[1.05] tracking-[-0.03em] text-foreground"
        >
          From screenshot
          <br />
          to{" "}
          <span className="serif-italic text-primary">calendar</span>
          <br />
          in two seconds.
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={item}
          className="sans mt-7 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Stop retyping dates. AutoCal reads any event screenshot and adds it
          to Google Calendar with one click.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <span className="btn-primary w-full sm:w-auto justify-center text-[0.9rem] px-7 h-12">
              Add to Chrome, it's Free
            </span>
          </a>
          <button
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-ghost w-full sm:w-auto justify-center text-[0.9rem]"
          >
            See how it works <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mt-12 pt-10 border-t border-border grid grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { num: "2s", label: "Average time to add an event" },
            { num: "100+", label: "Sites where it works" },
            { num: "Free", label: "Always, no credit card" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-num text-foreground">{s.num}</div>
              <div className="sans text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Mockup — below the copy, centered, animated float */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-16 animate-float"
      >
        <ExtensionMockup />
      </motion.div>
    </section>

    {/* ══════════════════════════════════════════
        HOW IT WORKS — vertical timeline + mockup
    ══════════════════════════════════════════ */}
    <section id="how-it-works" className="py-24 sm:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="mono-label text-primary text-[11px]">How it works</span>
              <h2 className="serif mt-3 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                Three steps.
                <br />
                <span className="serif-italic">No friction.</span>
              </h2>
            </motion.div>

            <div className="space-y-0">
              {[
                {
                  num: "01",
                  icon: <Camera size={18} />,
                  title: "Snap",
                  desc: "Upload a screenshot or drag to select any part of your screen. Any format works: PNG, JPG, even a photo of a poster.",
                },
                {
                  num: "02",
                  icon: <Cpu size={18} />,
                  title: "Extract",
                  desc: "GPT-4o reads the image and instantly fills in title, date, time, location, and meeting links. Automatically.",
                },
                {
                  num: "03",
                  icon: <MousePointerClick size={18} />,
                  title: "Add",
                  desc: "Review the pre-filled form, make any edits, and hit Add to Google Calendar. Done in under two seconds.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-5 pb-10 last:pb-0 relative"
                >
                  {/* Vertical line */}
                  {i < 2 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
                  )}

                  {/* Icon circle */}
                  <div className="shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center text-primary relative z-10">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 pb-2">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="mono-label text-[10px] text-muted-foreground">{step.num}</span>
                      <h3 className="serif text-xl tracking-tight">{step.title}</h3>
                    </div>
                    <p className="sans text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: second mockup instance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24 flex justify-center"
          >
            <div className="hover-lift">
              <ExtensionMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        FEATURES — editorial list, not card grid
    ══════════════════════════════════════════ */}
    <section id="features" className="py-24 sm:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <span className="mono-label text-primary text-[11px]">Features</span>
            <h2 className="serif mt-3 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Everything
              <br />
              <span className="serif-italic">you need.</span>
            </h2>
            <p className="sans text-sm text-muted-foreground mt-4 max-w-[220px] leading-relaxed">
              Built to get out of your way and just work.
            </p>
          </motion.div>

          {/* Right: feature list */}
          <div className="border-t border-border">
            {[
              {
                icon: <Cpu size={16} />,
                title: "AI-powered extraction",
                desc: "Reads any image format: screenshots, photos, even low-quality scans. GPT-4o handles the parsing so you don't have to.",
              },
              {
                icon: <Crop size={16} />,
                title: "Crop from any tab",
                desc: "Drag to select just the event area. Ignore ads, banners, and everything else cluttering the page.",
              },
              {
                icon: <PenLine size={16} />,
                title: "Edit before adding",
                desc: "The AI pre-fills everything but you always get to review. Fix a typo, adjust the time, or change the title before it hits your calendar.",
              },
              {
                icon: <Link2 size={16} />,
                title: "Meeting link detection",
                desc: "Zoom, Google Meet, Microsoft Teams. AutoCal finds the meeting link automatically and adds it to the event description.",
              },
              {
                icon: <Clock size={16} />,
                title: "Recent history",
                desc: "Your last 10 events are saved so you can re-open or reference them without digging through your calendar.",
              },
              {
                icon: <Globe size={16} />,
                title: "Works everywhere",
                desc: "Eventbrite, Gmail, Slack, LinkedIn, university portals, PDFs in the browser. If you can see it, AutoCal can read it.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="feature-row"
              >
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="sans font-semibold text-[0.95rem] text-foreground mb-1">{f.title}</h3>
                    <p className="sans text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        CTA — dark inverse section
    ══════════════════════════════════════════ */}
    <section className="section-dark py-24 sm:py-36 overflow-hidden relative">
      {/* Subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(243 73% 59% / 0.15) 0%, transparent 70%)",
        }}
      />
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mono-label text-primary/80 text-[11px]">Free Chrome Extension</span>
          <h2
            className="serif mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em]"
            style={{ color: "hsl(36 44% 94%)" }}
          >
            Stop retyping.
            <br />
            <span className="serif-italic" style={{ color: "hsl(243 73% 75%)" }}>
              Start in 2 seconds.
            </span>
          </h2>
          <p className="sans mt-6 text-base leading-relaxed max-w-sm mx-auto" style={{ color: "hsl(36 20% 65%)" }}>
            Join users who never manually type event details again.
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex"
          >
            <span className="btn-primary text-[0.9rem] px-8 h-12 gap-2.5">
              Add to Chrome, It's Free
              <ArrowRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        FAQ
    ══════════════════════════════════════════ */}
    <section className="py-24 sm:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="mono-label text-primary text-[11px]">FAQ</span>
            <h2 className="serif mt-3 text-3xl sm:text-4xl leading-tight tracking-tight">
              Questions?
              <br />
              <span className="serif-italic">Answered.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-0 border-t border-border">
              {[
                {
                  q: "Is it really free?",
                  a: "Yes, AutoCal is completely free. We may add optional premium features later, but the core extension will always be free.",
                },
                {
                  q: "Does it store my screenshots?",
                  a: "No. Screenshots are sent to OpenAI's API for processing and immediately discarded. We never store or see your images.",
                },
                {
                  q: "Which calendars are supported?",
                  a: "Google Calendar is fully supported. Outlook and Apple Calendar integration is on the roadmap.",
                },
                {
                  q: "What image types work?",
                  a: "PNG, JPG, JPEG, GIF, and WebP. You can also use the built-in crop tool to capture any region of your screen directly.",
                },
                {
                  q: "Does it work on all websites?",
                  a: "Yes, any website. Gmail, Eventbrite, Slack, LinkedIn, university portals, PDFs in browser, you name it.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="sans text-sm font-medium hover:no-underline py-5 text-left text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="sans text-sm text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
