import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { Button } from "../components/ui/button";
import {
  Users,
  Clock,
  Headphones,
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver innovative, reliable, and efficient software solutions that empower businesses and individuals to grow, automate, and thrive in the digital age.",
    color: "bg-blue-600",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To become the most trusted technology partner for small and medium businesses across Papua New Guinea and the Pacific — building digital infrastructure that lasts.",
    color: "bg-green-600",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, innovation, and impact. We believe every client deserves honest advice, creative solutions, and technology that genuinely makes a difference in their day-to-day operations.",
    color: "bg-blue-600",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Fresh Perspective",
    description:
      "As a new company, we bring modern approaches and eagerness to learn about your specific business needs. No old habits — just fresh thinking and current best practices.",
  },
  {
    icon: Clock,
    title: "Dedicated Service",
    description:
      "We value every project and work hard to deliver quality results on time. Building our reputation one client at a time means your satisfaction is our top priority.",
  },
  {
    icon: Headphones,
    title: "Personal Attention",
    description:
      "Being a boutique business means you get our full attention and truly personalised service — not a ticket number in a queue.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no confusing contracts. We provide clear quotes upfront and communicate openly about scope, timelines, and costs at every step.",
  },
];

const milestones = [
  { year: "June 2025", event: "NextDev Solutions founded by Apsie Tese in Papua New Guinea" },
  { year: "July 2025", event: "First web development client onboarded successfully" },
  { year: "Sept 2025", event: "First custom ERP system delivered to a local school" },
  { year: "2026", event: "Expanding services across the Pacific region" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {/* Page Hero */}
        <section className="relative text-white py-16">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/asset/image/banner.png")'
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-blue-200 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About NextDev Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              A technology company born in Papua New Guinea with a global mindset dedicated to transforming ideas into real-world digital solutions.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/asset/image/apsie-tese.png"
                  alt="Apsie Tese, Founder of NextDev Solutions"
                  className="rounded-2xl shadow-xl w-3/4 h-auto object-cover aspect-[3/4] mx-auto"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                  Built from Passion, Driven by Purpose
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    NextDev Solutions was founded by <strong>Apsie Tese</strong> in June 2025, starting as a solo developer driven by passion with a clear mission: to deliver innovative, reliable, and efficient software solutions that empower businesses and individuals alike.
                  </p>
                  <p>
                    What started as a passion project has evolved into a digital development initiative dedicated to transforming ideas into real-world applications. We believe that great software begins with great people and every project we take on receives the same level of care, collaboration, and creativity.
                  </p>
                  <p>
                    Our goal is not only to build functional systems but also to create digital experiences that are intuitive, secure, and scalable solutions that grow with your business.
                  </p>
                  <p>
                    Thank you for taking the time to get to know us. We look forward to building something amazing together.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/services">
                      Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Drives Us</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our mission, vision, and values are at the heart of every decision we make and every solution we build.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${item.color} mb-6 mx-auto`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 text-left">{item.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed text-left">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose NextDev Solutions?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We may be a young company, but our commitment to quality and client satisfaction is second to none.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm">
                    <div className="bg-blue-100 rounded-xl p-3 shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
              <p className="text-slate-600">From a solo passion project to a growing tech company — here's how we got here.</p>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6 relative">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0 z-10">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-5 flex-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{milestone.year}</span>
                      <p className="text-slate-800 font-medium mt-1">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to work with us?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's build something great together. Reach out today for a free consultation.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-50 px-10">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
