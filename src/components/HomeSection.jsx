import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const HomeSection = () => {
  return (
    <section
      id="homeSection"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, we are</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              G{" "}l{" "}o{" "}r{" "}y
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            We connect businesses with top freelance talent and help freelancers find great work. <br />
            Whether you need skilled professionals for your projects or want to grow your career <br />
            our platform makes it fast, easy, and secure
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#howitworksSection" className={cn(
                "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none",
                "focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          )}>
              Find Out More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};