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
            <img src={logo} alt="ABC Graphic" className="h-12 w-auto" />
            <p className="text-sm font-semibold gradient-text">
              Creativity Beyond Limits !
            </p>
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
              <a href="mailto:abceditinggraphic@gmail.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors">
                <Mail size={16} />
                abceditinggraphic@gmail.com
              </a>
              <a href="https://wa.me/94715234993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors">
                <Phone size={16} />
                071 523 4993 (WhatsApp)
              </a>
              <a href="tel:+94759715913" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors">
                <Phone size={16} />
                075 971 5913 (Call)
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
          <p>&copy; {new Date().getFullYear()} ABC Graphic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
