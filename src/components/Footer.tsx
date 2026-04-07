import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="/images/icon128.png" alt="AutoCal" className="w-6 h-6 rounded-md" />
          <span className="font-display font-bold text-foreground">AutoCal</span>
          <span className="text-muted-foreground text-sm ml-2">Screenshot to Calendar</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
