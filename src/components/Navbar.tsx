import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/autocal/gmefkfopmlmjedipnjmjielmphodpphn";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setOpen(false), [location]);

  const scrollOrNav = (id: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass-nav" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/images/icon128.png" alt="AutoCal" className="w-8 h-8 rounded-xl" />
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            AutoCal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollOrNav("how-it-works")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollOrNav("features")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
            <button className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 px-5 h-9 rounded-lg text-sm font-semibold">
              Add to Chrome
            </button>
          </a>
        </nav>

        {/* Mobile toggle — min 44px tap target */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-foreground hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        >
          <div className="container flex flex-col gap-1 py-3">
            <button
              onClick={() => scrollOrNav("how-it-works")}
              className="text-sm text-muted-foreground hover:text-foreground text-left px-3 py-3.5 rounded-xl hover:bg-white/5 transition-colors min-h-[44px]"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollOrNav("features")}
              className="text-sm text-muted-foreground hover:text-foreground text-left px-3 py-3.5 rounded-xl hover:bg-white/5 transition-colors min-h-[44px]"
            >
              Features
            </button>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <button className="glow-button w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl text-sm min-h-[44px]">
                Add to Chrome — Free
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
