import {
  Building,
  Code,
  Wrench,
  Computer,
  Server,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom website design and development services",
    features: [
      "Modern UI/UX Design",
      "Custom CMS Development",
      "Mobile-First Approach",
      "SEO-Friendly Code",
      "Fast Loading Optimization",
      "Regular Updates & Maintenance",
    ],
    accent: "cyan",
  },
  {
    icon: Computer,
    title: "Computer Hardware & Software",
    description: "Installation, configuration and troubleshooting",
    features: [
      "Hardware Installation & Setup",
      "Operating System Installation",
      "Software Configuration",
      "Network Setup & Troubleshooting",
      "Data Migration",
      "Security Configuration",
    ],
    accent: "violet",
  },
  {
    icon: Building,
    title: "Custom ERP Solutions",
    description: "Tailored business solutions for your organization",
    features: [
      "Schools", "Churches", "NGOs", "SMEs",
      "Hospitals", "Clinics", "Hotels", "Restaurants",
      "Retail Stores", "Manufacturing", "Transport", "Logistics",
    ],
    twoColumnFeatures: true,
    accent: "emerald",
  },
];

const accentClasses: Record<string, { ring: string; icon: string; glow: string; dot: string }> = {
  cyan: {
    ring: "from-cyan-500/30 to-blue-500/30",
    icon: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
    dot: "bg-cyan-400",
  },
  violet: {
    ring: "from-violet-500/30 to-cyan-500/30",
    icon: "from-violet-500 to-cyan-500",
    glow: "shadow-violet-500/20",
    dot: "bg-violet-400",
  },
  emerald: {
    ring: "from-emerald-500/30 to-cyan-500/30",
    icon: "from-emerald-500 to-cyan-500",
    glow: "shadow-emerald-500/20",
    dot: "bg-emerald-400",
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20">
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            What we do
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Practical technology services built for businesses and organisations in Papua New Guinea.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const accent = accentClasses[service.accent];
            return (
              <Link key={index} to="/services" className="group">
                <Card className={`relative h-full overflow-hidden border-slate-800 bg-slate-900/70 p-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${accent.glow}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 to-slate-950/80" />
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent.ring} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative h-full p-6">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent.icon} text-white shadow-lg`}>
                      <service.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-white">{service.title}</h3>
                    <p className="mb-4 text-sm text-slate-400">{service.description}</p>

                    <div className={service.twoColumnFeatures ? "grid grid-cols-2 gap-x-2 gap-y-1" : "space-y-1.5"}>
                      {service.features.slice(0, service.twoColumnFeatures ? 8 : 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <div className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {service.features.length > (service.twoColumnFeatures ? 8 : 4) && (
                      <p className="mt-2 text-xs italic text-slate-500">
                        +{service.features.length - (service.twoColumnFeatures ? 8 : 4)} more
                      </p>
                    )}

                    <div className="mt-5 flex items-center gap-1 border-t border-slate-800 pt-4 text-xs font-semibold text-cyan-300 opacity-80 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              See All Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
