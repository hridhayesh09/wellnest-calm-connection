import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4 text-center animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-lg">(123)-456-789</span>
          </div>
          <span className="hidden sm:inline text-2xl">|</span>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:contact@wellnest.com"
              className="text-lg hover:text-primary transition-colors"
            >
              contact@wellnest.com
            </a>
          </div>
          <span className="hidden sm:inline text-2xl">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-lg">Tampa, FL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
