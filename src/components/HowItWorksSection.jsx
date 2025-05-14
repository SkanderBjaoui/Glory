import { Briefcase, Code, ShieldCheck, User, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const HowItWorksSection = () => {
  return (
    <section id="howitworksSection" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> How</span> It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
                Built for Flexibility, Designed for Success
            </h3>

            <p className="text-muted-foreground">
                We’ve built a dynamic two-sided platform that simplifies hiring and freelancing
                through intelligent automation. For businesses, we offer curated talent matching,
                streamlined project management tools, and flexible engagement models.
            </p>

            <p className="text-muted-foreground">
                Freelancers get access to vetted opportunities, skill-based recommendations, and
                growth-focused resources—all supported by transparent workflows and fair payment
                protection. Our system adapts to your needs, removing friction so you can focus on
                results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#teamskills" className={cn(
                "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
                "hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300",
                "dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2"
                )}>
                {" "}
                Our Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Professional</h4>
                  <p className="text-muted-foreground">
                    Expertly designed for serious talent and businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Reliable</h4>
                  <p className="text-muted-foreground">
                    Always secure, always available and always working for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Easy To Use</h4>
                  <p className="text-muted-foreground">
                    Hire freelancers or get hired for jobs in just a few minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};