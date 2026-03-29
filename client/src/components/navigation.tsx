import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    // If already on home page, scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-shadow ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick}>
              <img
                src="/asset/image/logo.jpg"
                alt="NextDev Solutions Logo"
                className="h-16 cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 mr-auto flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-2 py-2 text-lg rounded-md transition-all duration-300 ease-in-out ${
                    location.pathname === link.href
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-blue-600 hover:bg-gray-600 text-white flex items-center gap-2 px-6 py-2 text-base transition-colors duration-300"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-slate-600 hover:text-blue-600 transition-all duration-300 group"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {isMenuOpen ? (
                  <X 
                    size={32} 
                    className="absolute transition-all duration-300 group-hover:rotate-90"
                  />
                ) : (
                  <Menu 
                    size={32} 
                    className="absolute transition-all duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {(isMenuOpen || isAnimating) && (
        <div className={`md:hidden bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 border-t border-blue-500 ${isAnimating ? 'animate-out' : 'animate-in'}`}>
          {/* Navigation Links */}
          <div className="p-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                  location.pathname === link.href
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30"
                    : "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/20"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    location.pathname === link.href 
                      ? 'bg-white scale-100' 
                      : 'bg-white/50 scale-50 group-hover:scale-100 group-hover:bg-white'
                  }`} />
                  <span className="font-medium text-lg">{link.label}</span>
                </div>
                <ChevronRight 
                  size={18} 
                  className={`transition-all duration-300 ${
                    location.pathname === link.href 
                      ? 'text-white translate-x-1' 
                      : 'text-white/70 group-hover:translate-x-1 group-hover:text-white'
                  }`}
                />
              </Link>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="px-6 pb-6">
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 text-blue-900 shadow-xl backdrop-blur-sm border border-white/30">
              <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
              <p className="text-blue-700 text-sm mb-4">Let's discuss your project and bring your ideas to life.</p>
              <Button 
                asChild 
                className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link to="/contact" onClick={toggleMenu}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="px-6 pb-6 border-t border-white/20 pt-6">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+1234567890" 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Phone size={18} className="text-white/60" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <a 
                href="mailto:info@nextdevsolutions.com" 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} className="text-white/60" />
                <span className="text-sm">info@nextdevsolutions.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} className="text-white/60" />
                <span className="text-sm">Your Location</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
