import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="border-t border-border py-10 bg-background"
    style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
  >
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img src="/images/icon128.png" alt="AutoCal" className="w-6 h-6 rounded-lg" />
          <span className="serif text-foreground">AutoCal</span>
          <span className="text-muted-foreground/40 hidden sm:inline">—</span>
          <span className="sans text-sm text-muted-foreground hidden sm:inline">Screenshot to Calendar</span>
        </div>
        <div className="flex items-center gap-6 sans text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="sans text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} AutoCal. All rights reserved.
        </p>
        <p className="mono-label text-[10px] text-muted-foreground/40">Powered by GPT-4o</p>
      </div>
    </div>
  </footer>
);

export default Footer;
