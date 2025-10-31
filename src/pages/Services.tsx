import { Palette, Layers, Pencil, Monitor, ShoppingCart, FileCode, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const graphicDesignServices = [
    {
      icon: <Palette size={32} />,
      title: "Brand Identity",
      description: "Crafting memorable logos, color palettes, and typography that define your brand's unique story and resonate with your audience."
    },
    {
      icon: <Layers size={32} />,
      title: "Marketing Materials",
      description: "Designing impactful print and digital assets, from brochures and flyers to social media graphics that capture attention."
    },
    {
      icon: <Pencil size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces for web and mobile applications that delight users and drive engagement."
    }
  ];

  const webDevelopmentServices = [
    {
      icon: <Monitor size={32} />,
      title: "Custom Websites",
      description: "Building responsive, high-performance websites from scratch, tailored to your specific business goals and brand identity."
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-commerce Solutions",
      description: "Developing secure and scalable online stores with seamless user experiences to boost your sales and grow your business."
    },
    {
      icon: <FileCode size={32} />,
      title: "CMS Development",
      description: "Integrating powerful Content Management Systems that allow you to easily update and manage your website content."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[hsl(var(--brand-black))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-white/70">
              Comprehensive creative solutions for all your design and development needs
            </p>
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="py-16 bg-[hsl(var(--brand-dark))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Graphic Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {graphicDesignServices.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[hsl(var(--brand-black))] hover:bg-[hsl(var(--brand-black))]/80 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-16 bg-[hsl(var(--brand-dark))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Web Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webDevelopmentServices.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[hsl(var(--brand-black))] hover:bg-[hsl(var(--brand-black))]/80 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[hsl(var(--brand-black))] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Contact us today for a free, no-obligation quote.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white hover:opacity-90 transition-opacity border-0">
              Get a Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
