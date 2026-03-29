import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ServicesSection } from "../components/services-section";
import {
  Code, Wrench, Computer, Server, Building,
  ArrowRight, Users, Clock, Headphones, Calendar,
  Cpu, Award, MessageCircle, Mail, CheckCircle,
} from "lucide-react";

const serviceHighlights = [
  { icon: Code, title: "Web Development", desc: "Custom websites tailored to your brand and business goals.", color: "bg-blue-600" },
  { icon: Building, title: "Custom ERP Solutions", desc: "End-to-end enterprise systems for schools, NGOs, hospitals and more.", color: "bg-green-600" },
  { icon: Computer, title: "IT Support", desc: "Hardware, software, networking and on-site or remote troubleshooting.", color: "bg-green-600" },
  { icon: Server, title: "Hosting Consultation", desc: "Expert guidance on choosing and configuring the right hosting plan.", color: "bg-blue-600" },
  { icon: Wrench, title: "Website Support", desc: "Ongoing updates, security patches, and content management.", color: "bg-green-600" },
];

const whyUs = [
  { icon: Users, title: "Fresh Perspective", desc: "Modern approaches and genuine enthusiasm for your project." },
  { icon: Clock, title: "Dedicated Service", desc: "On-time delivery with quality results every single time." },
  { icon: Headphones, title: "Personal Attention", desc: "You're not a ticket number — you get our full focus." },
  { icon: CheckCircle, title: "Transparent Pricing", desc: "Clear quotes upfront, no hidden fees, no surprises." },
];

const latestNews = [
  {
    id: 1,
    title: "PNG Strengthens Digital Collaboration with China",
    excerpt: "ICT Minister Timothy Masiu signed an MOU with China to boost digital infrastructure and services across PNG.",
    date: "June 3, 2025",
    category: "ICT & Policy",
    icon: Building,
    color: "bg-blue-600",
    sourceUrl: "https://www.postcourier.com.pg/ict-minister-announces-partnership-with-china-for-enhanced-digital-transformation-in-png/",
  },
  {
    id: 2,
    title: "AI Summit 2025 Held in Port Moresby",
    excerpt: "The ITI-hosted summit highlighted generative AI, AI in banking, education, and climate — a milestone for PNG tech.",
    date: "April 7, 2025",
    category: "Artificial Intelligence",
    icon: Cpu,
    color: "bg-green-500",
    sourceUrl: "https://www.postcourier.com.pg/the-2025-ai-summit-shaping-papua-new-guineas-digital-future/",
  },
  {
    id: 3,
    title: "Women in Tech & Innovation Awards 2025",
    excerpt: "POMCCI's event spotlighted female tech leaders and shortlisted entries for Innovation PNG 2025.",
    date: "February 27, 2025",
    category: "Women in Tech",
    icon: Award,
    color: "bg-purple-600",
    sourceUrl: "https://www.pngbusinessnews.com/articles/2025/3/women-in-tech-business-breakfast-plays-up-innovation-png-awards",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesSection />

        {/* About Teaser */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/asset/image/apsie.jpg"
                  alt="Apsie Tese, Founder of NextDev Solutions"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                  Built from Passion, Driven by Purpose
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  NextDev Solutions was founded by <strong>Apsie Tese</strong> in June 2025 with a clear mission: to deliver innovative, reliable, and efficient software solutions that empower businesses and individuals. Whether it's a simple portfolio site or a full-fledged enterprise system, we approach every project with the same level of care, collaboration, and creativity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {whyUs.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-lg p-2 shrink-0">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Preview */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Latest News & Insights</h2>
                <p className="text-slate-600 max-w-xl">
                  Stay updated with the latest technology trends and insights from across the Pacific.
                </p>
              </div>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors shrink-0"
              >
                View All News <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`${item.color} rounded-xl w-11 h-11 flex items-center justify-center mb-4`}>
                        <Icon className="text-white h-5 w-5" />
                      </div>
                      <div className="flex items-center text-xs text-slate-500 mb-2">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        {item.date}
                        <span className="mx-2">•</span>
                        <span className="text-blue-600 font-semibold">{item.category}</span>
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.excerpt}</p>
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        Read More <ArrowRight className="ml-1.5 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're excited to work with you and help bring your ideas to life. Contact us to discuss your project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
                <a href="https://wa.me/67571570096" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp: +67571570096
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-4">
                <a href="mailto:info@nextdev-png.com">
                  <Mail className="mr-3 h-5 w-5" />
                  info@nextdev-png.com
                </a>
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
