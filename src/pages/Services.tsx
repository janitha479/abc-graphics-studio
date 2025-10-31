import { Palette, Sparkles, Code, Megaphone, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: "Logo Design",
      description: "Create a unique visual identity that captures your brand's essence. From concept to final delivery, we craft logos that are memorable, versatile, and timeless.",
      features: [
        "Multiple concept options",
        "Unlimited revisions",
        "Vector files included",
        "Brand guidelines"
      ]
    },
    {
      icon: <Sparkles size={40} />,
      title: "Branding",
      description: "Build a complete brand identity system that sets you apart. We develop cohesive visual languages that resonate with your target audience.",
      features: [
        "Color palette development",
        "Typography selection",
        "Brand style guide",
        "Marketing collateral"
      ]
    },
    {
      icon: <Code size={40} />,
      title: "Web Design & Development",
      description: "Modern, responsive websites that deliver exceptional user experiences. We combine beautiful design with clean, efficient code.",
      features: [
        "Responsive design",
        "SEO optimization",
        "CMS integration",
        "Performance optimization"
      ]
    },
    {
      icon: <Megaphone size={40} />,
      title: "Social Media Creatives",
      description: "Eye-catching graphics that stop the scroll. We create engaging visual content optimized for all major social platforms.",
      features: [
        "Platform-specific sizing",
        "On-brand templates",
        "Engaging animations",
        "Content calendars"
      ]
    },
    {
      icon: <FileText size={40} />,
      title: "Print Design",
      description: "Professional print materials that make a lasting impression. From business cards to large-format banners, we handle it all.",
      features: [
        "Print-ready files",
        "CMYK color matching",
        "Multiple format options",
        "Print vendor coordination"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive creative solutions for all your design and development needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--brand-dark))] to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="gradient-text">Started</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white hover:opacity-90 transition-opacity">
              Get a Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
