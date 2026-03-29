import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { Card, CardContent } from "../components/ui/card";
import {
  Calendar,
  ArrowRight,
  Cpu,
  Award,
  Building,
  Smartphone,
  Shield,
  Globe,
} from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "PNG Strengthens Digital Collaboration with China",
    excerpt:
      "ICT Minister Timothy Masiu signed an MOU with China to boost digital infrastructure and services — from AI, IoT, and cloud computing to cybersecurity and 5G — supporting flagship projects like the eGovernment portal, Digital ID wallet, and analogue-to-digital broadcasting migration.",
    date: "June 3, 2025",
    category: "ICT & Policy",
    icon: Building,
    color: "bg-blue-600",
    sourceUrl:
      "https://www.postcourier.com.pg/ict-minister-announces-partnership-with-china-for-enhanced-digital-transformation-in-png/?utm_source=chatgpt.com",
  },
  {
    id: 2,
    title: "AI Summit 2025 Held in Port Moresby",
    excerpt:
      "The ITI-hosted summit featured Minister Masiu and highlighted generative AI, AI in banking, education, and climate. Organised by PNG's Centre for Advancement of Internet Technology, it marks a significant step in AI awareness and capacity-building across the Pacific.",
    date: "April 7, 2025",
    category: "Artificial Intelligence",
    icon: Cpu,
    color: "bg-green-500",
    sourceUrl:
      "https://www.postcourier.com.pg/the-2025-ai-summit-shaping-papua-new-guineas-digital-future/?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "Women in Tech & Innovation Awards 2025",
    excerpt:
      "Hosted by POMCCI, this event highlighted female leaders — including Crystal Kewe and Priscilla Kevin — unveiling AI-led health and finance systems. It also shortlisted entries for Innovation PNG 2025, spotlighting grassroots tech solutions from across the country.",
    date: "February 27, 2025",
    category: "Women in Tech",
    icon: Award,
    color: "bg-purple-600",
    sourceUrl:
      "https://www.pngbusinessnews.com/articles/2025/3/women-in-tech-business-breakfast-plays-up-innovation-png-awards?utm_source=chatgpt.com",
  },
  {
    id: 4,
    title: "5G Rollout Plans Accelerate Across the Pacific",
    excerpt:
      "Telecommunications companies across the Pacific are fast-tracking 5G infrastructure investments. The improved connectivity is expected to unlock new possibilities for remote businesses, digital education, and health services in previously underserved communities.",
    date: "March 15, 2025",
    category: "Telecommunications",
    icon: Smartphone,
    color: "bg-blue-500",
    sourceUrl: "#",
  },
  {
    id: 5,
    title: "Cybersecurity Threats on the Rise for SMEs",
    excerpt:
      "Small and medium enterprises are increasingly targeted by ransomware and phishing attacks. Security experts urge businesses to invest in basic cyber hygiene — regular backups, strong passwords, and employee training — as first lines of defence against growing digital threats.",
    date: "January 20, 2025",
    category: "Cybersecurity",
    icon: Shield,
    color: "bg-red-500",
    sourceUrl: "#",
  },
  {
    id: 6,
    title: "Digital Transformation in Pacific Island Economies",
    excerpt:
      "A new regional report highlights how digital transformation is reshaping Pacific island economies — from digital payments and e-commerce to remote work and cloud-based services. The report calls for greater investment in digital literacy and infrastructure to unlock the full potential.",
    date: "December 10, 2024",
    category: "Digital Economy",
    icon: Globe,
    color: "bg-teal-500",
    sourceUrl: "#",
  },
];

const categories = ["All", "ICT & Policy", "Artificial Intelligence", "Women in Tech", "Telecommunications", "Cybersecurity", "Digital Economy"];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          {/* Banner Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/asset/image/banner.png")'
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-blue-200 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">News & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Stay updated with the latest technology news, industry trends, and insights relevant to businesses in Papua New Guinea and the Pacific.
            </p>
          </div>
        </section>

        {/* Category Pills */}
        <section className="bg-white border-b border-slate-200 py-4 sticky top-[72px] z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default transition-colors ${
                    cat === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div
                        className={`${item.color} rounded-xl w-12 h-12 flex items-center justify-center mb-4 shrink-0`}
                      >
                        <IconComponent className="text-white h-6 w-6" />
                      </div>

                      <div className="flex items-center text-xs text-slate-500 mb-3 flex-wrap gap-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {item.date}
                        <span className="mx-1">•</span>
                        <span className="text-blue-600 font-semibold">{item.category}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 mb-5 text-sm leading-relaxed flex-1">{item.excerpt}</p>

                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                          item.sourceUrl === "#"
                            ? "text-slate-400 cursor-not-allowed pointer-events-none"
                            : "text-blue-600 hover:text-blue-800"
                        }`}
                      >
                        {item.sourceUrl === "#" ? "Source Pending" : "Read Full Article"}
                        {item.sourceUrl !== "#" && <ArrowRight className="ml-1.5 h-4 w-4" />}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Stay in the Loop</h2>
            <p className="text-slate-600 mb-6">
              Want to be notified when we publish new insights and company updates? Reach out to us and we'll keep you informed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe to Updates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
