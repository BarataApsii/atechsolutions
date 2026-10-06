import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Code, Globe, Shield, Zap } from "lucide-react";
import NetworkBackground from "./network-background";

const floatingBadges = [
  { icon: Code, label: "Web Apps", position: "top-[18%] left-[8%]", delay: "0s" },
  { icon: Cpu, label: "ERP Systems", position: "top-[22%] right-[10%]", delay: "1.2s" },
  { icon: Shield, label: "IT Support", position: "bottom-[28%] left-[12%]", delay: "2.4s" },
  { icon: Globe, label: "Cloud", position: "bottom-[24%] right-[8%]", delay: "0.8s" },
  { icon: Zap, label: "24/7 Help", position: "top-[45%] right-[5%]", delay: "1.8s" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100svh)] items-center justify-center overflow-hidden bg-transparent pt-[4.5rem] text-white"
    >
      <NetworkBackground />

      {/* Floating tech badges */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {floatingBadges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className={`absolute ${badge.position} flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-cyan-200 shadow-lg shadow-cyan-900/10 backdrop-blur-md`}
              style={{ animation: `float 5s ease-in-out ${badge.delay} infinite` }}
            >
              <Icon className="h-3.5 w-3.5" />
              {badge.label}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          Technology partner in Papua New Guinea
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Software solutions that move your business forward
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
          We design and build practical technology — from custom web platforms and ERP systems to hands-on IT support — for organisations across Papua New Guinea.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-cyan-500 px-7 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-xl sm:text-base"
          >
            <Link to="/contact">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-slate-700 bg-slate-900/60 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-100 sm:text-base"
          >
            <Link to="/services">
              Explore services
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 sm:gap-8 sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Code className="h-4 w-4 text-cyan-400" /> Custom web apps
          </span>
          <span className="flex items-center gap-1.5">
            <Cpu className="h-4 w-4 text-cyan-400" /> ERP systems
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-cyan-400" /> Reliable IT support
          </span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
