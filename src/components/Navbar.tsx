import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/autocal/gmefkfopmlmjedipnjmjielmphodpphn";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollOrNav = (id: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/icon128.png" alt="AutoCal" className="w-8 h-8 rounded-lg" />
          <span className="font-display font-bold text-lg text-foreground">AutoCal</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollOrNav("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</button>
          <button onClick={() => scrollOrNav("features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</button>
          <a href={CHROME_STORE_URL}>
            <Button size="sm" className="glow-button bg-primary text-primary-foreground hover:bg-primary/90">
              Add to Chrome - Free
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-border pb-4">
          <div className="container flex flex-col gap-4 pt-4">
            <button onClick={() => scrollOrNav("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground text-left">How it Works</button>
            <button onClick={() => scrollOrNav("features")} className="text-sm text-muted-foreground hover:text-foreground text-left">Features</button>
            <a href={CHROME_STORE_URL}>
              <Button size="sm" className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Add to Chrome - Free
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
