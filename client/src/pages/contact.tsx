import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { MessageCircle, Mail, Globe, Clock, ArrowRight } from "lucide-react";

const contactOptions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Fastest response — usually within the hour",
    value: "+67571570096",
    href: "https://wa.me/67571570096",
    linkLabel: "Chat on WhatsApp",
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "For detailed project enquiries and proposals",
    value: "info@nextdev-png.com",
    href: "mailto:info@nextdev-png.com",
    linkLabel: "Send an Email",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    external: false,
  },
  {
    icon: Globe,
    title: "Global Services",
    subtitle: "We work with clients from anywhere in the world",
    value: "Remote & On-Site Available",
    href: null,
    linkLabel: null,
    color: "bg-slate-700",
    hoverColor: "",
    external: false,
  },
];

const services = [
  "Web Design & Development",
  "Website Updates & Support",
  "Computer Hardware & Software",
  "Website Hosting Consultation",
  "Custom ERP Solutions",
  "Other / Not Sure Yet",
];

const faqs = [
  {
    q: "How long does a typical website project take?",
    a: "Most standard business websites take 2–4 weeks depending on complexity and how quickly content is provided. Larger projects with custom functionality may take 6–12 weeks.",
  },
  {
    q: "Do you work with clients outside Papua New Guinea?",
    a: "Yes! We offer fully remote services and have worked with clients across the Pacific. All communication can be done via WhatsApp, email, or video call.",
  },
  {
    q: "How much does a website cost?",
    a: "Every project is unique. We provide custom quotes based on your specific needs. Contact us with a brief description of your project and we'll get back to you with pricing.",
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Absolutely. We offer monthly support and maintenance plans so your website stays updated, secure, and performing well after launch.",
  },
];

export default function ContactPage() {
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
              <span className="text-white font-medium">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Ready to start a project or have a question? We'd love to hear from you. Choose the contact method that works best for you.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center flex flex-col items-center"
                  >
                    <div className={`${option.color} rounded-2xl p-4 mb-5`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{option.title}</h3>
                    <p className="text-slate-500 text-sm mb-3">{option.subtitle}</p>
                    <p className="text-slate-800 font-semibold mb-5">{option.value}</p>
                    {option.href && option.linkLabel && (
                      <a
                        href={option.href}
                        target={option.external ? "_blank" : undefined}
                        rel={option.external ? "noopener noreferrer" : undefined}
                        className={`inline-flex items-center gap-2 ${option.color} ${option.hoverColor} text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors`}
                      >
                        {option.linkLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Two Column: Enquiry Info + Hours */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Service Enquiry */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Start a Project Enquiry</h2>
                <p className="text-slate-600 text-sm mb-6">
                  When you contact us, it helps to include the following information so we can give you an accurate quote quickly:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">1. Which service are you interested in?</h4>
                    <ul className="space-y-1.5">
                      {services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-slate-600 text-sm">
                          <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">2. Brief description of your project</h4>
                    <p className="text-slate-500 text-sm">What do you need built or fixed? Who is it for?</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">3. Your timeline</h4>
                    <p className="text-slate-500 text-sm">When do you need it completed? Any deadlines?</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">4. Your budget (optional)</h4>
                    <p className="text-slate-500 text-sm">Even a rough range helps us tailor the right solution for you.</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/67571570096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium text-sm transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:info@nextdev-png.com"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium text-sm transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </div>
              </div>

              {/* Hours + FAQ */}
              <div className="space-y-6">
                {/* Business Hours */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-blue-100 rounded-xl p-2.5">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM", note: "" },
                      { day: "Saturday", hours: "9:00 AM – 1:00 PM", note: "By appointment" },
                      { day: "Sunday", hours: "Closed", note: "Emergency only" },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                        <span className="text-slate-700 font-medium text-sm">{row.day}</span>
                        <div className="text-right">
                          <span className="text-slate-900 text-sm font-semibold">{row.hours}</span>
                          {row.note && <p className="text-xs text-slate-400">{row.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-4">All times are Papua New Guinea Standard Time (UTC+10)</p>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-5">Frequently Asked Questions</h3>
                  <div className="space-y-5">
                    {faqs.map((faq) => (
                      <div key={faq.q}>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">{faq.q}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
