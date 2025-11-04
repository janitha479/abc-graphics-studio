import { Link } from "react-router-dom";
import { ArrowRight, Palette, Code, Megaphone, FileText, Sparkles, CheckCircle, Zap, Heart, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const categories = ["All", "Logos", "Branding", "Web Design", "Social Media", "Print"];

  const projects = [
    {
      id: 1,
      title: "Modern Tech Startup Logo",
      category: "Logos",
      description: "Bold geometric logo for a tech company",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Cafe Brand Identity",
      category: "Branding",
      description: "Complete branding package for artisan coffee shop",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "E-commerce Website",
      category: "Web Design",
      description: "Modern responsive online store",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Instagram Campaign",
      category: "Social Media",
      description: "Creative social media graphics series",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Business Brochure",
      category: "Print",
      description: "Professional tri-fold marketing brochure",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Restaurant Logo & Menu",
      category: "Logos",
      description: "Elegant branding for fine dining",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional business website with CMS",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Product Packaging",
      category: "Branding",
      description: "Eye-catching packaging design",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Event Posters",
      category: "Print",
      description: "Bold promotional materials",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const values = [
    { icon: <Zap size={24} />, title: "Innovation", description: "Pushing creative boundaries" },
    { icon: <Heart size={24} />, title: "Passion", description: "Loving what we do" },
    { icon: <Target size={24} />, title: "Precision", description: "Attention to detail" },
  ];

  const tools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Adobe XD",
    "VS Code",
    "React",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    "WordPress",
    "Python",
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[hsl(var(--brand-dark))]/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(var(--brand-gold))] to-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Mouse Cursor Animations */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-300"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-[hsl(var(--brand-gold))] to-accent rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-30%, -30%)'
          }}
        ></div>

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
                <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--brand-dark))] to-white text-white hover:opacity-90 transition-opacity">
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

      {/* About Section */}
      <section id="about" className="py-24 bg-[hsl(var(--brand-black))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="gradient-text">ABC Graphics</span>
            </h2>
            <p className="text-xl text-white/70">
              A creative studio dedicated to transforming ideas into stunning visual experiences
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white">
                ABC Graphics is a creative studio specializing in graphic design and web development. We believe that great design is more than just aesthetics — it's about creating meaningful connections between brands and their audiences.
              </p>
              <p className="text-lg leading-relaxed text-white">
                With years of experience in the creative industry, we've helped businesses of all sizes establish their visual identity and digital presence. Our approach combines artistic vision with strategic thinking to deliver designs that not only look beautiful but also drive results.
              </p>
              <p className="text-lg leading-relaxed text-white">
                Whether you're a startup looking for your first logo or an established company seeking a website refresh, we bring the same level of passion, creativity, and attention to detail to every project.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Our <span className="gradient-text">Values</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))]/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{value.title}</h4>
                  <p className="text-white/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Tools & <span className="gradient-text">Technologies</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 rounded-xl bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))]/80 transition-all duration-300"
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="font-medium text-white">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[hsl(var(--brand-dark))] animate-fade-in">
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
                className="group p-8 rounded-2xl bg-[hsl(var(--brand-black))] hover:bg-[hsl(var(--brand-black))]/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-[hsl(var(--brand-black))] animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-white/70">
              Explore our creative work across design and development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white shadow-lg"
                    : "bg-[hsl(var(--brand-dark))] text-white hover:bg-[hsl(var(--brand-dark))]/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-[hsl(var(--brand-dark))] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold text-accent mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{project.description}</p>
                  <button className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-[hsl(var(--brand-dark))] to-black text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(var(--brand-gold))] to-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12">
              Have a project in mind? Let's create something amazing together. Get in touch and let's discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:hello@abcgraphics.com" className="group">
                <Button size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white hover:opacity-90 transition-all duration-300 group-hover:scale-105 border-0 shadow-lg">
                  Send Us an Email
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <a href="tel:+1234567890" className="group">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 group-hover:scale-105 bg-transparent">
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
