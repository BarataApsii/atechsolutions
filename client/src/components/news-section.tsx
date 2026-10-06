import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Smartphone, Shield, Computer, Cpu, Award, Building} from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "PNG strengthens collaboration with China",
    excerpt: "ICT Minister Timothy Masiu signed an MOU with China to boost digital infrastructure and services—from AI, IoT, and cloud computing to cybersecurity and 5G—supporting flagship projects like the eGovernment portal, Digital ID wallet, and analogue-to-digital broadcasting migration.",
    date: "June 3, 2025",
    category: "ICT",
    icon: Building,
    color: "bg-blue-600",
    sourceUrl: "https://www.postcourier.com.pg/ict-minister-announces-partnership-with-china-for-enhanced-digital-transformation-in-png/?utm_source=chatgpt.com",
  },
  {
    id: 2,
    title: "AI Summit 2025 held in Port Moresby",
    excerpt: "The ITI-hosted summit (early June) featured Minister Masiu and highlighted generative AI, AI in banking, education, and climate. Organized by PNG’s Centre for Advancement of Internet Technology, it marks a significant step in AI awareness and capacity-building.",
    date: "April 7, 2025",
    category: "AI",
    icon: Cpu,
    color: "bg-green-500",
    sourceUrl: "https://www.postcourier.com.pg/the-2025-ai-summit-shaping-papua-new-guineas-digital-future/?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "Women in Tech & Innovation Awards",
    excerpt: "Hosted by POMCCI, this event highlighted female leaders—such as Crystal Kewe and Priscilla Kevin—unveiling AI-led health and finance systems. It also shortlisted entries for Innovation PNG 2025, spotlighting grassroots tech solutions.",
    date: "February 27, 2025",
    category: "Women in Tech",
    icon: Award,
    color: "bg-purple-600",
    sourceUrl: "https://www.pngbusinessnews.com/articles/2025/3/women-in-tech-business-breakfast-plays-up-innovation-png-awards?utm_source=chatgpt.com",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest News & Insights
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl mx-auto">
            Stay updated with the latest news, trends, best practices, and insights that can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={item.id}
                className="border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10 hover:border-cyan-500/30"
              >
                <CardContent className="p-6">
                  <div
                    className={`${item.color} rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="text-white h-6 w-6" />
                  </div>

                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                    <span className="mx-2">•</span>
                    <span className="text-cyan-400 font-medium">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mb-4 text-sm">{item.excerpt}</p>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
