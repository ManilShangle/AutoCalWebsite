import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const response = await fetch('https://formspree.io/f/xvzvnoqn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Get in touch</h1>
          <p className="text-center text-muted-foreground mt-3">
            Have a question, bug report, or feature request? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 glass-card p-8 space-y-5">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <Input
                className="mt-1.5 bg-secondary border-border text-foreground"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <Input
                type="email"
                className="mt-1.5 bg-secondary border-border text-foreground"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Message</label>
              <Textarea
                className="mt-1.5 bg-secondary border-border text-foreground min-h-[120px]"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full glow-button bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
