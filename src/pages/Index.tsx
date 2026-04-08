import { motion } from "framer-motion";
import {
  Camera, Cpu, MousePointerClick, Crop, PenLine, Link2,
  Clock, Globe, CheckCircle, Zap, ArrowRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExtensionMockup from "@/components/ExtensionMockup";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/autocal/gmefkfopmlmjedipnjmjielmphodpphn";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Index = () => {
  return (
    <div className="noise relative bg-background overflow-x-hidden">

      {/* ── Ambient background orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-[20%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[130px]" />
        <div className="absolute top-[35%] -right-[10%] w-[380px] h-[380px] rounded-full bg-accent/[0.06] blur-[110px]" />
        <div className="absolute bottom-[-15%] left-[25%] w-[460px] h-[460px] rounded-full bg-primary/[0.05] blur-[130px]" />
      </div>

      {/* ── Dot grid ── */}
      <div className="fixed inset-0 dot-grid pointer-events-none" aria-hidden />

      <Navbar />

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

            {/* Left — copy */}
            <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

              {/* Pill label */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/[0.08] mb-7"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
                <span className="font-mono-label text-primary text-[11px]">
                  AI-Powered Calendar Assistant
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp} initial="hidden" animate="visible" custom={1}
                className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold leading-[1.04] tracking-[-0.03em]"
              >
                See an event.{" "}
                <span className="text-gradient">Add it.</span>{" "}
                Done.
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={2}
                className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Stop retyping dates. AutoCal reads any screenshot and adds the
                event to Google Calendar in one click — powered by GPT-4o.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={3}
                className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              >
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="glow-button w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 rounded-xl font-semibold text-base">
                    Add to Chrome — Free
                  </button>
                </a>
                <button
                  onClick={() =>
                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="ghost-button w-full sm:w-auto px-6 h-12 rounded-xl text-sm text-foreground flex items-center justify-center gap-2"
                >
                  See how it works <ArrowRight size={14} />
                </button>
              </motion.div>

              {/* Feature badges */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={4}
                className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 justify-center lg:justify-start"
              >
                {[
                  { icon: <Zap size={13} className="text-primary" />, text: "2-second setup" },
                  { icon: <Globe size={13} className="text-primary" />, text: "Any webpage" },
                  { icon: <CheckCircle size={13} className="text-primary" />, text: "Google Calendar" },
                  { icon: <Cpu size={13} className="text-primary" />, text: "GPT-4o" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — floating mockup */}
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-full max-w-[360px] float"
            >
              <ExtensionMockup />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════ */}
      <section
        id="how-it-works"
        className="relative py-24 sm:py-32 border-t border-border"
      >
        <div className="container relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono-label text-primary mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Three steps.{" "}
              <span className="text-gradient">Two seconds.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {[
              { num: "01", icon: <Camera size={22} />, title: "Snap", desc: "Upload a screenshot or drag-select any part of your screen." },
              { num: "02", icon: <Cpu size={22} />, title: "Extract", desc: "GPT-4o reads the image and fills in title, date, time, location, and meeting links." },
              { num: "03", icon: <MousePointerClick size={22} />, title: "Add", desc: "Review the pre-filled details and hit Add to Google Calendar. Done." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.14 }}
              >
                <div className="glass-card card-glow-top p-7 sm:p-8 text-center relative group hover:border-primary/25 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="font-mono-label text-primary/45 mb-4">{step.num}</p>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/18 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          FEATURES
      ════════════════════════════════ */}
      <section
        id="features"
        className="relative py-24 sm:py-32 border-t border-border"
      >
        <div className="container relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono-label text-primary mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Everything you <span className="text-gradient">need</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { icon: <Cpu size={19} />, title: "AI-powered extraction", desc: "Reads any image format, even messy or partial screenshots." },
              { icon: <Crop size={19} />, title: "Crop from any tab", desc: "Drag to select just the event — ignore everything else on screen." },
              { icon: <PenLine size={19} />, title: "Edit before adding", desc: "Review and fix any field before it hits your calendar." },
              { icon: <Link2 size={19} />, title: "Meeting link detection", desc: "Auto-detects Zoom, Meet, and Teams URLs from any source." },
              { icon: <Clock size={19} />, title: "Recent history", desc: "See the last 10 events you've added at a glance." },
              { icon: <Globe size={19} />, title: "Works everywhere", desc: "Eventbrite, email, Slack, LinkedIn — any page with event info." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="glass-card p-6 h-full group hover:border-primary/25 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/18 transition-colors duration-300 relative">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold mb-1.5 relative">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA BANNER
      ════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 border-t border-border overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "linear-gradient(125deg, hsl(234 100% 67%), hsl(193 100% 50%))" }}
        />
        <div className="absolute inset-0 dot-grid opacity-50" aria-hidden />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono-label text-primary mb-5">Free Chrome Extension</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              Stop retyping.<br />
              <span className="text-gradient">Start in 2 seconds.</span>
            </h2>
            <p className="text-muted-foreground mb-9 max-w-sm mx-auto text-base leading-relaxed">
              Join users who never manually type event details again.
            </p>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              <button className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 rounded-xl font-semibold text-base inline-flex items-center gap-2">
                Add to Chrome — It's Free
                <ArrowRight size={16} />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          FAQ
      ════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 border-t border-border">
        <div className="container relative z-10 max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-mono-label text-primary mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Questions?{" "}
              <span className="text-gradient">Answered.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Is it really free?",
                  a: "Yes! AutoCal is completely free to use. We may introduce optional premium features in the future, but the core functionality will always be free.",
                },
                {
                  q: "Does it store my screenshots?",
                  a: "No. Your screenshots are sent to OpenAI's API for processing and are never stored by us. They are discarded immediately after extraction.",
                },
                {
                  q: "Which calendars does it support?",
                  a: "Currently AutoCal supports Google Calendar. We're exploring Outlook and Apple Calendar support for the future.",
                },
                {
                  q: "What image types can I upload?",
                  a: "AutoCal supports PNG, JPG, JPEG, GIF, and WebP. You can also use the built-in crop tool to capture any part of your screen.",
                },
                {
                  q: "Does it work on all websites?",
                  a: "Yes! AutoCal works on any website — Eventbrite, Gmail, Slack, LinkedIn, or any page where you can see event information.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card px-5 border-border overflow-hidden"
                >
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-4 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
