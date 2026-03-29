import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Mail, Facebook, Linkedin, Instagram } from "lucide-react";

const serviceLinks = [
  "Web Design & Development",
  "ERP System Development",
  "IT Support & Maintenance",
  "Website Hosting & Domains",
  "Custom Software Solutions",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const location = useLocation();
  const pageUrl = typeof window !== "undefined"
    ? `${window.location.origin}${location.pathname}`
    : `https://nextdev-png.com${location.pathname}`;

  const shareLinks = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      icon: Facebook,
      className: "bg-[#1877F2] hover:bg-[#145dbf]",
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      icon: Linkedin,
      className: "bg-[#0A66C2] hover:bg-[#084d96]",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="block">
              <h3 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors cursor-pointer">NextDev Solutions</h3>
            </Link>
            <p className="text-base text-slate-300 mb-6 max-w-md">
              We are eager to help small businesses and organizations with web development, ERP systems, IT support, and custom software solutions for businesses and organisations of every size.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/67571570096"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 rounded-lg p-3 hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@nextdev-png.com"
                className="bg-blue-700 rounded-lg p-3 hover:bg-blue-800 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors text-base text-left"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4 shrink-0" />
                <a
                  href="https://wa.me/67571570096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-base"
                >
                  +67571570096
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@nextdev-png.com"
                  className="hover:text-white transition-colors text-base"
                >
                  info@nextdev-png.com
                </a>
              </li>
              <li className="text-base">
                <p className="font-medium">Mon–Fri: 8AM–6PM</p>
                <p className="font-medium">Sun: Appointment Only</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-base gap-4">
          <p>&copy; 2026 NextDev Solutions. All rights reserved.</p>

          {/* Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-sm mr-1">Share:</span>
            {shareLinks.map(({ label, href, icon: Icon, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className={`${className} text-white rounded-lg p-2 transition-all duration-200`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
