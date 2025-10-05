import { ChevronDown } from "lucide-react";

const WhyWellNest = () => {
  return (
    <section id="why" className="py-24 bg-sage-light">
      <div className="container mx-auto px-4 text-center animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Why WellNest?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">It can help with</p>
        <div className="animate-bounce-slow">
          <ChevronDown className="h-8 w-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default WhyWellNest;
