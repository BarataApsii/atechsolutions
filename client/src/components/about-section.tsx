import { Users, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Fresh Perspective",
    description: "As a new company, we bring modern approaches and eagerness to learn about your specific business needs.",
    bgColor: "bg-atech-primary"
  },
  {
    icon: Clock,
    title: "Dedicated Service", 
    description: "We value every project and work hard to deliver quality results on time, building our reputation one client at a time.",
    bgColor: "bg-atech-secondary"
  },
  {
    icon: Headphones,
    title: "Personal Attention",
    description: "Being a new business means you get our full attention and personalized service for your technology needs.",
    bgColor: "bg-atech-accent"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-8x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/asset/image/apsie.jpg" 
              alt="Apsie Tese, Founder of NextDev Solutions" 
              className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-atech-slate-900 mb-6">About        NextDev Solutions</h2>
            <p className="text-sm text-atech-slate-600 mb-8">
            NextDev Solutions was founded by Apsie Tese in June 2025 with a clear mission: to deliver innovative, reliable, and efficient software solutions that empower businesses and individuals alike. What started as a passion project has changed into a digital development initiative dedicated to transforming ideas into real-world applications. <br></br>

            NextDev Solutions believe that great software begins with great people. Whether its a simple portfolio site or a full-fledged enterprise system, we approach every project with the same level of care, collaboration, and creativity. Our goal is not only to build functional systems but also to create digital experiences that are intuitive, secure, and scalable. <br></br>

            Thank you for taking the time to get to know us. We look forward to building something amazing together. <br></br><br></br>
              Why Choosing NextDev Solutions?
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className={`${feature.bgColor} rounded-lg p-2 mr-4 mt-1`}>
                      <IconComponent className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-atech-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-atech-slate-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
