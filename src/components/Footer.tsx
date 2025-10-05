import { Link } from "react-router-dom";
import treeLogo from "@/assets/wellnest-tree.png";

const Footer = () => {
  return (
    <footer className="bg-sage-light py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            <img src={treeLogo} alt="WellNest Tree" className="h-10 w-10" />
            <div>
              <h3 className="text-xl font-bold text-foreground">WellNest</h3>
              <p className="text-xs text-muted-foreground">
                Smarter matches. Real connections. Better care.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <span>|</span>
            <Link to="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <span>|</span>
            <Link to="#" className="hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 WellNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
