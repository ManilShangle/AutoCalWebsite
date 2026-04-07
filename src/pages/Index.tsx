import { Camera, Cpu, MousePointerClick, Crop, PenLine, Link2, Clock, Globe, CheckCircle, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ExtensionMockup from "@/components/ExtensionMockup";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/autocal/gmefkfopmlmjedipnjmjielmphodpphn";

const Index = () => {
  return (
    <div className="min-h-screen scroll-snap-y-mandatory overflow-y-scroll">
      <Navbar />

      {/* Hero */}
      <section className="h-screen flex items-center justify-center scroll-snap-align-start">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                See an event.{" "}
                <span className="text-gradient">Add it to your calendar.</span>{" "}
                Done.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Stop retyping dates. AutoCal reads any screenshot and adds the event to Google Calendar in one click, powered by AI.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href={CHROME_STORE_URL}>
                  <Button size="lg" className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                    Add to Chrome - Free
                  </Button>
                </a>
                <button
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  See how it works <ArrowRight size={14} />
                </button>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
                {[
                  { icon: <Zap size={16} className="text-primary" />, text: "2 seconds to add any event" },
                  { icon: <Globe size={16} className="text-primary" />, text: "Works on any webpage" },
                  { icon: <CheckCircle size={16} className="text-primary" />, text: "Google Calendar sync" },
                  { icon: <Cpu size={16} className="text-primary" />, text: "Powered by GPT-4o" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center justify-center gap-2">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <ExtensionMockup />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="min-h-screen flex items-center justify-center scroll-snap-align-start border-t border-border">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              How it <span className="text-gradient">Works</span>
            </h2>
            <p className="text-center text-muted-foreground mt-4 max-w-md mx-auto">Three steps. Two seconds. One click.</p>
          </ScrollReveal>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              { num: "1", icon: <Camera size={28} />, title: "Snap", desc: "Upload a screenshot or drag-select any part of your screen." },
              { num: "2", icon: <Cpu size={28} />, title: "Extract", desc: "AI reads the image and fills in title, date, time, location, and meeting links automatically." },
              { num: "3", icon: <MousePointerClick size={28} />, title: "Add", desc: "Review the details and click Add to Google Calendar. Done." },
            ].map((step) => (
              <ScrollReveal key={step.num}>
                <div className="glass-card p-8 text-center relative group hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto text-lg">
                    {step.num}
                  </div>
                  <div className="mt-4 text-primary">{step.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="min-h-screen flex items-center justify-center scroll-snap-align-start border-t border-border">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Everything you <span className="text-gradient">need</span>
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu size={22} />, title: "AI-powered extraction", desc: "Reads any image format, even messy screenshots." },
              { icon: <Crop size={22} />, title: "Crop from any tab", desc: "Drag to select just the event, ignore everything else." },
              { icon: <PenLine size={22} />, title: "Edit before adding", desc: "Review and fix any field before it hits your calendar." },
              { icon: <Link2 size={22} />, title: "Meeting link detection", desc: "Auto-detects Zoom, Meet, and Teams URLs." },
              { icon: <Clock size={22} />, title: "Recent history", desc: "See the last 10 events you've added." },
              { icon: <Globe size={22} />, title: "Works everywhere", desc: "Eventbrite, email, Slack, LinkedIn, anywhere." },
            ].map((f) => (
              <ScrollReveal key={f.title}>
                <div className="glass-card p-6 hover:border-primary/30 transition-colors h-full">
                  <div className="text-primary">{f.icon}</div>
                  <h3 className="mt-3 font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="min-h-screen flex items-center justify-center scroll-snap-align-start border-t border-border">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              It just <span className="text-gradient">works</span>.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <ScrollReveal>
              <div className="glass-card p-6 max-w-xs w-full">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Source Screenshot</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">🎨 Team Design Review</p>
                  <p className="text-muted-foreground">Thursday, March 20, 2026</p>
                  <p className="text-muted-foreground">2:00 PM - 3:00 PM EST</p>
                  <p className="text-muted-foreground">📍 Conference Room B</p>
                  <p className="text-primary text-xs">meet.google.com/abc-defg-hij</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-primary text-3xl hidden md:block">→</div>
              <div className="text-primary text-3xl md:hidden">↓</div>
            </ScrollReveal>
            <ScrollReveal>
              <ExtensionMockup />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="h-screen flex items-center justify-center scroll-snap-align-start border-t border-border">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Is it really free?", a: "Yes! AutoCal is completely free to use. We may introduce optional premium features in the future, but the core functionality will always be free." },
                { q: "Does it store my screenshots?", a: "No. Your screenshots are sent to OpenAI's API for processing and are never stored by us. They are discarded immediately after extraction." },
                { q: "Which calendars does it support?", a: "Currently, AutoCal supports Google Calendar. We're exploring support for Outlook and Apple Calendar in the future." },
                { q: "What image types can I upload?", a: "AutoCal supports PNG, JPG, JPEG, GIF, and WebP. You can also use the built-in crop tool to capture any part of your screen." },
                { q: "Does it work on all websites?", a: "Yes! AutoCal works on any website. Eventbrite, Gmail, Slack, LinkedIn, or any page where you can see event information." },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
