import { MessageCircle, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Contact us through WhatsApp or email to discuss and get started on your next project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="bg-green-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <MessageCircle className="text-white h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-slate-400 mb-2 text-sm">
              Contact us directly on WhatsApp for quick assistance.
            </p>
            <a
              href="https://wa.me/67571570096"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-semibold text-base transition-colors"
            >
              +67571570096
            </a>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Mail className="text-white h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-slate-400 mb-2 text-sm">
              Send us an email with your project details.
            </p>
            <a
              href="mailto:info@nextdev-solutions.com"
              className="text-cyan-400 hover:text-cyan-300 font-semibold text-base transition-colors"
            >
              info@nextdev-solutions.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="bg-cyan-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Globe className="text-white h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Global Services</h3>
            <p className="text-slate-400 mb-2 text-sm">
              Available worldwide for all service inquiries.
            </p>
            <div className="text-slate-400 text-sm leading-relaxed">
              <p className="font-medium">Mon–Fri: 8AM–6PM</p>
              <p className="font-medium">Sun: Appointment Only</p>
              <p className="text-xs text-slate-500">Emergency support available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
