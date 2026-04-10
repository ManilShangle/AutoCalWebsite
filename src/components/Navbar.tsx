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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container flex items-center justify-between h-[60px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/icon128.png" alt="AutoCal" className="w-7 h-7 rounded-lg" />
          <span className="serif font-normal text-[1.1rem] tracking-tight text-foreground">
            AutoCal
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollOrNav("how-it-works")}
            className="sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollOrNav("features")}
            className="sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
            <span className="btn-primary text-xs px-4 h-9">Add to Chrome</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-background/97 backdrop-blur-md border-t border-border"
          style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        >
          <div className="container py-3 flex flex-col gap-1">
            <button
              onClick={() => scrollOrNav("how-it-works")}
              className="sans text-sm text-muted-foreground hover:text-foreground text-left px-3 py-3.5 rounded-lg hover:bg-secondary transition-colors min-h-[44px]"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollOrNav("features")}
              className="sans text-sm text-muted-foreground hover:text-foreground text-left px-3 py-3.5 rounded-lg hover:bg-secondary transition-colors min-h-[44px]"
            >
              Features
            </button>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
              <span className="btn-primary w-full justify-center text-sm min-h-[44px]">
                Add to Chrome, Free
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
