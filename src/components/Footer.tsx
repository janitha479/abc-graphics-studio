import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--brand-dark))] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={logo} alt="ABC Graphics" className="h-12 w-auto" />
            <p className="text-sm text-white/80">
              Designs that Define. Websites that Work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-white/80 hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/services" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Services
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Services</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Logo Design</p>
              <p>Branding</p>
              <p>Web Development</p>
              <p>Social Media</p>
              <p>Print Design</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@abcgraphics.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors">
                <Mail size={16} />
                info@abcgraphics.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors">
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} ABC Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
