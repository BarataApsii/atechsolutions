import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 280);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950/70 shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
            <img
              src="/asset/image/logo.png"
              alt="NextDev Solutions Logo"
              className="h-9 w-9 shrink-0 drop-shadow-[0_0_10px_rgba(99,102,241,0.35)] sm:h-10 sm:w-10"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                NextDev
              </span>
              <span className="hidden text-[0.5rem] font-medium tracking-[0.3em] text-slate-400 sm:block">
                DRIVING DIGITAL INNOVATION
              </span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-cyan-300"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-2 flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-400/25"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="relative rounded-xl p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-cyan-300"
            >
              <div className="flex h-8 w-8 items-center justify-center">
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {(isMenuOpen || isAnimating) && (
        <div className={`md:hidden bg-gradient-to-b from-slate-950/95 to-slate-900/98 ${isAnimating ? "animate-out" : "animate-in"}`}>
          <div className="space-y-2 p-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center justify-between rounded-xl p-4 transition-all duration-300 ${
                  location.pathname === link.href
                    ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full transition-all ${
                      location.pathname === link.href
                        ? "bg-cyan-300"
                        : "bg-slate-600 group-hover:bg-cyan-300"
                    }`}
                  />
                  <span className="text-base font-medium">{link.label}</span>
                </div>
                <ChevronRight
                  size={18}
                  className={`transition-all ${
                    location.pathname === link.href
                      ? "text-cyan-300"
                      : "text-slate-500 group-hover:translate-x-1 group-hover:text-cyan-300"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="px-6 pb-8">
            <Button
              asChild
              className="w-full rounded-full bg-cyan-500 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
