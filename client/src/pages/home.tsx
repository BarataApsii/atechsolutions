import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ServicesSection } from "../components/services-section";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { useState } from "react";
import {
  Code, Wrench, Computer, Server, Building,
  ArrowRight, Users, Clock, Headphones, Calendar,
  Cpu, Award, MessageCircle, Mail, CheckCircle, ChevronDown,
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

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </div>

        {/* Services Overview */}
        <ServicesSection />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* About Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                About Our Company
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Building Digital Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Founded in 2025, we're transforming businesses through innovative technology solutions 
                with a commitment to quality, integrity, and client success.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
              {/* Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
              
              {/* Horizontal Divider for Mobile */}
              <div className="lg:hidden absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              
              {/* Image Side */}
              <div className="relative lg:sticky lg:top-24 flex items-center h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl opacity-10 blur-xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full">
                  <img
                    src="/asset/image/apsie.jpg"
                    alt="NextDev Solutions Team"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Our Mission: Your Digital Success
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    NextDev Solutions delivers enterprise software solutions for
                    businesses to thrive in the digital age. From custom web applications to 
                    comprehensive ERP systems, we combine technical excellence with deep understanding 
                    of local business needs.
                  </p>
                </div>

                {/* Key Differentiators */}
                <div className="space-y-4">
                  {whyUs.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Collapsible key={item.title}>
                        <CollapsibleTrigger asChild>
                          <div className="group cursor-pointer">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1 text-left">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                                  <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:text-blue-600" />
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-20 mt-2">
                          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {item.title === "Fresh Perspective" && "As a new company, we bring modern approaches and eagerness to learn about your specific business needs. No old habits — just fresh thinking and current best practices."}
                              {item.title === "Dedicated Service" && "We value every project and work hard to deliver quality results on time. Building our reputation one client at a time means your satisfaction is our top priority."}
                              {item.title === "Personal Attention" && "Being a boutique business means you get our full attention and truly personalised service — not a ticket number in a queue."}
                              
                            </p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>

                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/about">
                      Discover Our Full Story <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </div>

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
