import {
  Building,
  Code,
  Wrench,
  Computer,
  Server,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    tagline: "Build your digital presence",
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
    lightColor: "bg-blue-50",
  },
  {
    icon: Wrench,
    title: "Website Updates & Support",
    tagline: "Keep your site running smoothly",
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
    lightColor: "bg-green-50",
  },
  {
    icon: Computer,
    title: "Computer Hardware & Software",
    tagline: "Complete tech solutions",
    description: "Installation, configuration and troubleshooting",
    features: [
      "Hardware Installation & Setup",
      "Operating System Installation",
      "Software Configuration",
      "Network Setup & Troubleshooting",
      "Data Migration",
      "Security Configuration",
    ],
    bgColor: "bg-purple-600",
    lightColor: "bg-purple-50",
  },
  {
    icon: Server,
    title: "Website Hosting Consultation",
    tagline: "Find the perfect hosting",
    description: "Guidance on website hosting solutions",
    features: [
      "Hosting Provider Analysis",
      "Performance Assessment",
      "Cost-Benefit Analysis",
      "Security Recommendations",
      "Setup Configuration",
      "Ongoing Support",
    ],
    bgColor: "bg-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    icon: Building,
    title: "Custom ERP Solutions",
    tagline: "Streamline your business",
    description: "Tailored business solutions for your organization",
    features: [
      "Schools", "Churches", "NGOs", "SMEs",
      "Hospitals", "Clinics", "Hotels", "Restaurants",
      "Retail Stores", "Manufacturing", "Transport", "Logistics",
    ],
    bgColor: "bg-teal-600",
    lightColor: "bg-teal-50",
    twoColumnFeatures: true,
  },
];

export function ServicesSectionFeature() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end technology solutions designed to help your business thrive in the digital age
          </p>
        </div>

        {/* Feature-focused layout with alternating grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Service info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className={`text-sm font-medium ${service.bgColor.replace('bg-', 'text-')} mt-1`}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className={`inline-flex items-center px-4 py-2 rounded-lg ${service.bgColor} text-white font-medium hover:opacity-90 transition-opacity duration-300`}>
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Features grid */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <div className={`${service.lightColor} rounded-xl p-6 border border-gray-100`}>
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                      Key Features & Capabilities
                    </h4>
                    <div className={`${
                      service.twoColumnFeatures
                        ? "grid grid-cols-2 md:grid-cols-3 gap-3"
                        : "grid grid-cols-1 md:grid-cols-2 gap-3"
                    }`}>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`w-5 h-5 rounded-full ${service.bgColor} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider between services */}
              {index < services.length - 1 && (
                <div className="mt-12 border-t border-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
