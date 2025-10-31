import { CheckCircle, Zap, Heart, Target } from "lucide-react";

const About = () => {
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
    "Tailwind CSS",
    "WordPress",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">ABC Graphics</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A creative studio dedicated to transforming ideas into stunning visual experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                ABC Graphics is a creative studio specializing in graphic design and web development. We believe that great design is more than just aesthetics — it's about creating meaningful connections between brands and their audiences.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                With years of experience in the creative industry, we've helped businesses of all sizes establish their visual identity and digital presence. Our approach combines artistic vision with strategic thinking to deliver designs that not only look beautiful but also drive results.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Whether you're a startup looking for your first logo or an established company seeking a website refresh, we bring the same level of passion, creativity, and attention to detail to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--brand-gold))] text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
