import {
  Building,
  Code,
  Wrench,
  Computer,
  Server,
} from "lucide-react";

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
    bgColor: "bg-blue-600",
  },
  {
    icon: Wrench,
    title: "Website Updates & Support",
    description: "Updating existing websites and support",
    features: [
      "Performance Optimization",
      "Security Updates",
      "Content Management",
      "Bug Fixes & Patches",
      "Regular Backups",
      "24/7 Support",
    ],
    bgColor: "bg-green-600",
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
    bgColor: "bg-blue-600",
  },
  {
    icon: Server,
    title: "Website Hosting Consultation",
    description: "Guidance on website hosting solutions",
    features: [
      "Hosting Provider Analysis",
      "Performance Assessment",
      "Cost-Benefit Analysis",
      "Security Recommendations",
      "Setup Configuration",
      "Ongoing Support",
    ],
    bgColor: "bg-green-600",
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
    bgColor: "bg-green-600",
    twoColumnFeatures: true,
  },
];

export function ServicesSectionMinimal() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs
        </p>

        {/* Minimalist card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon section */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-px bg-gray-200 flex-grow" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500 italic">
                      +{service.features.length - 3} more capabilities
                    </div>
                  )}
                </div>

                {/* Subtle hover indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className={`text-sm font-medium ${service.bgColor === "bg-blue-600" ? "text-blue-600" : "text-green-600"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Explore this service →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
