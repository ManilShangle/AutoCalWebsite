import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-32 pb-20">
      <div className="container max-w-[700px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Effective Date: March 16, 2026</p>

        <div className="prose-sm space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Overview</h2>
            <p>AutoCal ("we", "our", "us") is a Chrome extension that extracts event details from screenshots and adds them to Google Calendar. We are committed to protecting your privacy.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Data We Collect</h2>
            <p>We do not collect, store, or sell any personal data. AutoCal operates almost entirely within your browser.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Screenshots & Images</h2>
            <p>Screenshots and images you provide are sent to the OpenAI API solely for the purpose of extracting event information. Images are processed in real time and are not stored by us or retained after processing. We do not use your images for training or any other purpose.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Google Calendar Access</h2>
            <p>AutoCal uses Google OAuth to access your Google Calendar. Your OAuth token is stored locally in your browser using <code className="text-foreground">chrome.storage.local</code> and is never transmitted to our servers.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Event History</h2>
            <p>Your recent event history is stored locally in your browser using <code className="text-foreground">chrome.storage.local</code>. This data never leaves your device and is never sent to our servers.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Third-Party Services</h2>
            <p>We use the OpenAI API for image processing. Please refer to <a href="https://openai.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">OpenAI's Privacy Policy</a> for information on how they handle data.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. Period.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Google API Limited Use Disclosure</h2>
            <p>The use of raw or derived user data received from Workspace APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google User Data Policy</a>, including the Limited Use requirements.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">9. Contact</h2>
            <p>If you have any questions about this Privacy Policy, please reach out through our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
