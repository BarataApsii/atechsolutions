import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transforms Business Digitally",
      subtitle: "Customized solutions that drive growth and innovation",
      description: "NextDev Solutions crafts applications that elevate your business runs.",
      image: "/asset/hero-slider-images/transform-business.png"
    },
    {
      title: "ERP Software Solutions",
      subtitle: "Solutions for efficient business management",
      description: "Our ERP systems unify your processes and streamline operations.",
      image: "/asset/hero-slider-images/custom-software.png"
    },
    {
      title: "24/7 IT Support",
      subtitle: "Technical assistance you can rely on",
      description: "Our dedicated IT support team ensures your systems run smoothly, minimizing downtime and maximizing productivity.",
      image: "/asset/hero-slider-images/it-support.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className="text-white relative overflow-hidden h-[70vh]">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center h-full">
          <div className="relative max-w-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-in-out text-left ${
                  index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-2xl text-yellow-300 mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 opacity-90">
                  {slide.description}
                </p>
              </div>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-yellow-300 border-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-yellow-300 border-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                <Link to="/services">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View Services
                </Link>
              </Button>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-yellow-300 w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
