import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-32 pb-20">
      <div className="container max-w-[700px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Effective Date: March 16, 2026</p>

        <div className="prose-sm space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
            <p>By installing or using AutoCal ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Description of Service</h2>
            <p>AutoCal is a Chrome extension that uses AI to extract event details from screenshots and images, allowing users to add events to Google Calendar. The Service is provided "as-is" without warranties of any kind.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Eligibility</h2>
            <p>You must be at least 13 years of age to use AutoCal. By using the Service, you represent and warrant that you meet this age requirement.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. User Responsibilities</h2>
            <p>You are responsible for maintaining the security of your Google account and any access granted through OAuth. You agree not to misuse the Service or use it for any unlawful purpose.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Limitation of Liability</h2>
            <p>AutoCal is not responsible for missed events, incorrect calendar entries, or any damages arising from the use or inability to use the Service. The AI extraction process may occasionally produce inaccurate results, and users should review event details before adding them to their calendar.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Service Availability</h2>
            <p>We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice. We shall not be liable to you or any third party for any such modification, suspension, or discontinuation.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Intellectual Property</h2>
            <p>All content, features, and functionality of AutoCal are owned by us and are protected by applicable intellectual property laws.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">9. Contact</h2>
            <p>For any questions regarding these Terms, please reach out through our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
