import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { Button } from "../components/ui/button";
import {
  Building,
  Code,
  Wrench,
  Computer,
  Server,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Design & Development",
    tagline: "Modern, fast, and scalable websites tailored to your brand",
    description:
      "We build custom websites from the ground up — responsive, SEO-friendly, and optimized for performance. Whether you need a business landing page, a portfolio, or a full e-commerce platform, we deliver pixel-perfect results.",
    features: [
      "Custom UI/UX Design",
      "Mobile-First & Fully Responsive",
      "CMS Integration (WordPress, Headless)",
      "SEO-Optimized Code Structure",
      "Fast Loading & Performance Tuning",
      "E-commerce & Payment Integration",
      "Regular Updates & Maintenance",
      "Cross-Browser Compatibility",
    ],
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "website-support",
    icon: Wrench,
    title: "Website Updates & Support",
    tagline: "Keep your existing website fresh, secure, and performing",
    description:
      "Already have a website but need ongoing care? We provide comprehensive update and support services — from content changes and design tweaks to security hardening and performance improvements.",
    features: [
      "Content & Design Updates",
      "Performance Optimization",
      "Security Patches & Updates",
      "Bug Fixes & Troubleshooting",
      "Plugin & Dependency Management",
      "Regular Automated Backups",
      "Uptime Monitoring",
      "24/7 Emergency Support",
    ],
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    id: "hardware-software",
    icon: Computer,
    title: "Computer Hardware & Software",
    tagline: "Installation, configuration, and expert troubleshooting",
    description:
      "We handle the full spectrum of hardware and software needs for your business — from setting up new workstations and networks to diagnosing complex technical issues and migrating your data safely.",
    features: [
      "Hardware Installation & Setup",
      "Operating System Installation & Licensing",
      "Software Installation & Configuration",
      "Network Setup & Troubleshooting",
      "Data Migration & Recovery",
      "Security Configuration & Antivirus",
      "Printer & Peripheral Setup",
      "Remote & On-Site Support",
    ],
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "hosting-consultation",
    icon: Server,
    title: "Website Hosting Consultation",
    tagline: "Find the right hosting plan and get it configured correctly",
    description:
      "Choosing the right hosting provider can be overwhelming. We guide you through the process — analysing your needs, comparing providers, and setting everything up so your website runs reliably and securely.",
    features: [
      "Hosting Needs Assessment",
      "Provider Comparison & Recommendations",
      "Cost-Benefit Analysis",
      "Domain Registration Guidance",
      "SSL Certificate Setup",
      "Server Configuration & Hardening",
      "CDN & Caching Setup",
      "Ongoing Monitoring Support",
    ],
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    id: "erp-solutions",
    icon: Building,
    title: "Custom ERP Solutions",
    tagline: "Tailored enterprise resource planning for any industry",
    description:
      "Off-the-shelf software rarely fits perfectly. We design and develop custom ERP systems built around your exact workflows — automating processes, centralising data, and giving you real-time visibility across your entire operation.",
    features: [
      "Schools & Educational Institutions",
      "Churches & Religious Organisations",
      "NGOs & Non-Profit Organisations",
      "SMEs & Small Businesses",
      "Hospitals & Clinics",
      "Hotels & Restaurants",
      "Retail Stores & Inventory Management",
      "Manufacturing, Transport & Logistics",
    ],
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    twoColumnFeatures: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-blue-200 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              From web development to custom ERP systems — we deliver end-to-end technology solutions for businesses and organisations of every size.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-5`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
                    <p className={`text-lg font-medium ${service.textColor} mb-4`}>{service.tagline}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <Button asChild className={`${service.color} hover:opacity-90 text-white`}>
                      <Link to="/contact">
                        Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Features Side */}
                  <div className={`${service.lightColor} border ${service.borderColor} rounded-2xl p-8 ${isEven ? "" : "lg:order-1"}`}>
                    <h3 className="text-lg font-semibold text-slate-800 mb-5">What's Included</h3>
                    <ul
                      className={`${
                        service.twoColumnFeatures
                          ? "grid grid-cols-2 gap-3"
                          : "space-y-3"
                      }`}
                    >
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 ${service.textColor} shrink-0 mt-0.5`} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us and we'll help you figure out the best solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
                <a href="https://wa.me/67571570096" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                <Link to="/contact">
                  Send an Enquiry
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
