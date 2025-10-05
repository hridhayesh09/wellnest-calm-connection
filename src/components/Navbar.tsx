import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import treeLogo from "@/assets/wellnest-tree-hand-drawn.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Login", href: "#login" },
    { label: "Quiz", href: "#quiz" },
    { label: "Therapist", href: "#therapist" },
    { label: "Why WellNest?", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Logo and Brand Name - Centered */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <img src={treeLogo} alt="WellNest Tree" className="h-16 w-16 object-contain" />
            <h1 
              className="text-5xl font-normal text-foreground" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              WellNest
            </h1>
          </div>
          
          {/* Tagline */}
          <p 
            className="text-sm text-foreground mb-6" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Smarter matches. Real connections. Better care.
          </p>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="text-sm font-normal text-foreground hover:text-hover-green transition-all duration-300 relative group"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-hover-green transition-all duration-300 group-hover:w-full"></span>
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-muted-green/30 mx-4">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mt-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-normal text-foreground hover:text-hover-green transition-colors text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
