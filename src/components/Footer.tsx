import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="border-t border-border py-10"
    style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
  >
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <img src="/images/icon128.png" alt="AutoCal" className="w-7 h-7 rounded-lg" />
          <span className="font-display font-bold text-foreground">AutoCal</span>
          <span className="text-muted-foreground/50 text-sm hidden sm:inline">·</span>
          <span className="text-muted-foreground text-sm hidden sm:inline">Screenshot to Calendar</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground/40">
          © {new Date().getFullYear()} AutoCal. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/40 font-mono-label">
          Powered by GPT-4o
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
