import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import treeLogo from "@/assets/wellnest-tree.png";

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
    <nav className="bg-background border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline - Centered */}
        <div className="flex flex-col items-center py-6">
          <div className="flex items-center space-x-3 mb-2">
            <img src={treeLogo} alt="WellNest Tree" className="h-20 w-20" />
            <h1 
              className="text-5xl font-normal text-foreground" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              WellNest
            </h1>
          </div>
          <p className="text-sm text-foreground italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Smarter matches. Real connections. Better care.
          </p>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center space-x-12 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-foreground hover:text-sage transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-center pb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background border-t">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-sage transition-colors px-4 py-2 text-center"
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
