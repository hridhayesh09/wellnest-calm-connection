import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Peaceful nature background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Find Your Suited Therapist
        </h1>
        <p className="text-2xl sm:text-3xl text-white/95 mb-14 drop-shadow-md font-light">
          Empowering You Through Therapy
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-7 text-base rounded-lg font-normal"
          >
            Begin Your Journey
          </Button>
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-7 text-base rounded-lg font-normal"
          >
            Offer Your Guidance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
