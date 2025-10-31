import { Link } from "react-router-dom";
import { ArrowRight, Palette, Code, Megaphone, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "Logo Design",
      description: "Unique brand identities that stand out"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Branding",
      description: "Complete visual identity systems"
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Modern, responsive websites"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Social Media",
      description: "Eye-catching digital content"
    },
    {
      icon: <FileText size={32} />,
      title: "Print Design",
      description: "Professional marketing materials"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[hsl(var(--brand-dark))]/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(var(--brand-gold))] to-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Designs that <span className="gradient-text">Define</span>.
              <br />
              Websites that <span className="gradient-text">Work</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Creative graphic design and modern web development that brings your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/portfolio">
                <Button size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white hover:opacity-90 transition-opacity group">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Let's Collaborate
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[hsl(var(--brand-dark))]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What We <span className="gradient-text">Create</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From concept to completion, we deliver creative solutions that make an impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-[hsl(var(--brand-black))] hover:bg-[hsl(var(--brand-black))]/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent to-[hsl(var(--brand-gold))] text-white flex items-center justify-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Link to="/services" className="text-center">
                <h3 className="text-2xl font-bold mb-2">Explore All Services</h3>
                <ArrowRight className="mx-auto group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[hsl(var(--brand-black))] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Start Your <span className="gradient-text">Project</span>?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in">
            Let's create something amazing together. Get in touch and let's discuss your vision.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white hover:opacity-90 transition-opacity border-0">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
