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
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Find Your Suited Therapist
        </h1>
        <p className="text-xl sm:text-2xl text-white/95 mb-12 drop-shadow-md">
          Empowering You Through Therapy
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg rounded-xl"
          >
            Begin Your Journey
          </Button>
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg rounded-xl"
          >
            Offer Your Guidance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
