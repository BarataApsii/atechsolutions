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
    bgColor: "bg-blue-600",
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
    bgColor: "bg-purple-600",
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

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        {/* Modern gradient cards with hover effects - showing 3 key services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`relative h-full bg-gradient-to-br ${
                service.bgColor === "bg-blue-600" 
                  ? "from-blue-500 via-blue-600 to-indigo-700" 
                  : service.bgColor === "bg-purple-600"
                  ? "from-purple-500 via-purple-600 to-purple-700"
                  : "from-green-500 via-green-600 to-emerald-700"
              } rounded-2xl p-1 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <div className="bg-white rounded-2xl h-full p-5 flex flex-col">
                  {/* Icon with animated background */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                    service.bgColor === "bg-blue-600" 
                      ? "bg-gradient-to-br from-blue-100 to-blue-200" 
                      : service.bgColor === "bg-purple-600"
                      ? "bg-gradient-to-br from-purple-100 to-purple-200"
                      : "bg-gradient-to-br from-green-100 to-green-200"
                  } mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${
                      service.bgColor === "bg-blue-600" ? "text-blue-600" : 
                      service.bgColor === "bg-purple-600" ? "text-purple-600" :
                      "text-green-600"
                    }`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>

                  {/* Feature list - limited to 3 items */}
                  <div className="space-y-2">
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <div className={`w-1 h-1 rounded-full ${
                            service.bgColor === "bg-blue-600" ? "bg-blue-500" : 
                            service.bgColor === "bg-purple-600" ? "bg-purple-500" :
                            "bg-green-500"
                          } mr-2`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.features.length > 3 && (
                      <p className="text-xs text-gray-500 italic">+{service.features.length - 3} more features</p>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className={`mt-4 pt-3 border-t border-gray-100 flex items-center justify-center text-xs font-medium ${
                    service.bgColor === "bg-blue-600" ? "text-blue-600" : 
                    service.bgColor === "bg-purple-600" ? "text-purple-600" :
                    "text-green-600"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Learn more →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Services CTA */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover All Our Services</h3>
              <p className="text-sm text-gray-600 mb-4">From custom ERP solutions to expert IT support - we've got you covered</p>
              <Link 
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg"
              >
                See All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
