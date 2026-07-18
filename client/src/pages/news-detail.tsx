import { Link, useParams } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import { Card, CardContent } from "../components/ui/card";
import { Calendar, ArrowRight, Building, Cpu, Award, Smartphone, Shield, Globe, Zap } from "lucide-react";

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
    content: `ICT Minister Timothy Masiu signed an MOU with China to boost digital infrastructure and services — from AI, IoT, and cloud computing to cybersecurity and 5G — supporting flagship projects like the eGovernment portal, Digital ID wallet, and analogue-to-digital broadcasting migration.

This partnership marks a significant step in PNG's digital transformation journey, with China committing to support the development of critical digital infrastructure across the country. The collaboration will focus on several key areas:

• Artificial Intelligence and Machine Learning applications
• Internet of Things (IoT) infrastructure deployment
• Cloud computing services and data centers
• Cybersecurity frameworks and threat detection
• 5G network rollout and connectivity improvements

The agreement also includes support for flagship government projects including the eGovernment portal, Digital ID wallet system, and the migration from analogue to digital broadcasting. This initiative is expected to accelerate PNG's digital economy growth and improve access to digital services for citizens and businesses alike.`,
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
    content: `The ITI-hosted summit featured Minister Masiu and highlighted generative AI, AI in banking, education, and climate. Organised by PNG's Centre for Advancement of Internet Technology, it marks a significant step in AI awareness and capacity-building across the Pacific.

The summit brought together technology leaders, policymakers, and industry experts to discuss the transformative potential of artificial intelligence in Papua New Guinea. Key topics included:

• Generative AI applications in business and government
• AI-powered banking and financial services
• Educational technology and AI in learning
• Climate monitoring and AI for environmental protection
• Ethical considerations and AI governance

Minister Masiu emphasized the government's commitment to embracing AI technologies while ensuring responsible implementation. The event concluded with a call for greater investment in AI education and infrastructure to position PNG as a leader in digital innovation across the Pacific region.`,
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
    content: `Hosted by POMCCI, this event highlighted female leaders — including Crystal Kewe and Priscilla Kevin — unveiling AI-led health and finance systems. It also shortlisted entries for Innovation PNG 2025, spotlighting grassroots tech solutions from across the country.

The Women in Tech & Innovation Awards celebrated the remarkable contributions of female technology leaders in Papua New Guinea. Notable speakers included:

• Crystal Kewe - showcasing AI-powered healthcare systems
• Priscilla Kevin - presenting innovative fintech solutions
• Various other female tech entrepreneurs and innovators

The event also served as a platform for the Innovation PNG 2025 awards, with numerous grassroots technology solutions being shortlisted. These innovations ranged from agricultural tech solutions to community-focused digital platforms, demonstrating the diverse talent and creativity within PNG's tech ecosystem.

The awards ceremony highlighted the growing importance of diversity in technology and the vital role women play in driving digital innovation in the Pacific region.`,
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
    content: `Telecommunications companies across the Pacific are fast-tracking 5G infrastructure investments. The improved connectivity is expected to unlock new possibilities for remote businesses, digital education, and health services in previously underserved communities.

The accelerated 5G rollout represents a major infrastructure upgrade for Pacific nations, with several key benefits anticipated:

• Enhanced mobile broadband speeds and reliability
• Support for IoT and smart city initiatives
• Improved telemedicine and remote healthcare services
• Better access to online education resources
• Increased opportunities for remote work and digital entrepreneurship

Major telecommunications providers have announced significant investments in 5G infrastructure, with particular focus on connecting rural and remote communities. This development is expected to bridge the digital divide and create new economic opportunities across the Pacific region.`,
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
    content: `Small and medium enterprises are increasingly targeted by ransomware and phishing attacks. Security experts urge businesses to invest in basic cyber hygiene — regular backups, strong passwords, and employee training — as first lines of defence against growing digital threats.

The rising threat landscape poses significant risks to SMEs across the Pacific, with cybercriminals increasingly targeting smaller businesses that may lack robust security measures. Key recommendations from security experts include:

• Implementing regular data backup systems
• Enforcing strong password policies and multi-factor authentication
• Conducting regular employee security awareness training
• Keeping software and systems updated with security patches
• Developing incident response plans for potential breaches

Businesses are encouraged to view cybersecurity as an essential investment rather than an optional expense. The cost of implementing basic security measures is significantly lower than the potential losses from a successful cyber attack.`,
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
    content: `A new regional report highlights how digital transformation is reshaping Pacific island economies — from digital payments and e-commerce to remote work and cloud-based services. The report calls for greater investment in digital literacy and infrastructure to unlock the full potential.

The comprehensive report examines the current state of digital adoption across Pacific island nations and identifies key trends:

• Rapid growth in digital payment adoption
• Expansion of e-commerce platforms and online marketplaces
• Increased remote work opportunities and digital nomad appeal
• Growth of cloud-based services for businesses
• Emerging digital entrepreneurship ecosystems

However, the report also highlights significant challenges, including limited digital infrastructure in rural areas, gaps in digital literacy, and the need for more supportive policy frameworks. The authors call for coordinated investment in digital skills training, infrastructure development, and regulatory reforms to fully realize the benefits of digital transformation across the Pacific region.`,
  },
  {
    id: 7,
    title: "Introducing Media Toolkit — Coming Soon",
    excerpt:
      "I'm excited to introduce Media Toolkit — a modern online platform designed to make media compression fast, simple, and efficient. Compress and optimize: Images, Videos, Audio, PDF documents. Whether you're a content creator, photographer, student, freelancer, or business, Media Toolkit will help you reduce file sizes while maintaining quality. Releasing Soon.",
    date: "July 19, 2026",
    category: "Product Launch",
    icon: Zap,
    color: "bg-orange-500",
    image: "/asset/image/toolkit.png",
    sourceUrl: "#",
    content: `🚀 Coming Soon...

I'm excited to introduce Media Toolkit — a modern online platform designed to make media compression fast, simple, and efficient.

Compress and optimize:
• Images
• Videos
• Audio
• PDF documents

Whether you're a content creator, photographer, student, freelancer, or business, Media Toolkit will help you reduce file sizes while maintaining quality.

Releasing Soon.

Stay tuned for updates on this exciting new tool that will revolutionize how you handle media files. Media Toolkit aims to provide an intuitive, user-friendly interface combined with powerful compression algorithms to help you optimize your media files without sacrificing quality.

Key features will include:
• Batch processing for multiple files
• Customizable compression settings
• Preview before compression
• Support for all major file formats
• Fast processing speeds
• Secure file handling

We're working hard to bring this tool to you soon. Follow our news section for updates on the release date and feature announcements.`,
  },
];

const iconMap: Record<string, any> = {
  Building,
  Cpu,
  Award,
  Smartphone,
  Shield,
  Globe,
  Zap,
};

export default function NewsDetailPage() {
  const { id } = useParams();
  const newsItem = newsItems.find((item) => item.id === parseInt(id || "0"));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">News Article Not Found</h1>
            <Link to="/news" className="text-blue-600 hover:text-blue-800">
              ← Back to News
            </Link>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    );
  }

  const IconComponent = iconMap[newsItem.icon.name];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/asset/image/banner.png")'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-blue-200 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/news" className="hover:text-white transition-colors">News & Updates</Link>
              <span>/</span>
              <span className="text-white font-medium">{newsItem.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{newsItem.title}</h1>
            <div className="flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {newsItem.date}
              </div>
              <span>•</span>
              <span className="font-semibold">{newsItem.category}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="mb-8">
              <CardContent className="p-8">
                {newsItem.image && (
                  <div className="mb-8 rounded-xl overflow-hidden">
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
                
                {!newsItem.image && (
                  <div
                    className={`${newsItem.color} rounded-xl w-16 h-16 flex items-center justify-center mb-6`}
                  >
                    {IconComponent && <IconComponent className="text-white h-8 w-8" />}
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-slate-700 font-medium mb-6 leading-relaxed">
                    {newsItem.excerpt}
                  </p>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {newsItem.content}
                  </div>
                </div>

                {newsItem.sourceUrl && newsItem.sourceUrl !== "#" && (
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <a
                      href={newsItem.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Original Source <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to All News
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
