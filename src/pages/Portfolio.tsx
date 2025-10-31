import { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[hsl(var(--brand-black))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-white/70">
              Explore our creative work across design and development
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 bg-[hsl(var(--brand-dark))]">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white shadow-lg"
                    : "bg-[hsl(var(--brand-black))] text-white hover:bg-[hsl(var(--brand-black))]/80"
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
                className="group relative rounded-2xl overflow-hidden bg-[hsl(var(--brand-black))] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
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
    </>
  );
};

export default Portfolio;
