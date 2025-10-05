import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Bell, ShoppingBag, Menu, X } from "lucide-react";
import treeLogo from "@/assets/wellnest-tree.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-24">
          {/* Logo and Tagline - Left */}
          <div className="flex items-center space-x-3 justify-start">
            <img src={treeLogo} alt="WellNest Tree" className="h-14 w-14" />
            <div>
              <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                WellNest
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Smarter matches. Real connections. Better care.
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons - Right */}
          <div className="hidden lg:flex items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden col-span-2 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background border-t">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
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
