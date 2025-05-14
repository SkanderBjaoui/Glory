import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Megaphone, Palette, Code, Wrench, PenTool, Sparkles } from "lucide-react";

const skills = [
    // 📢 Marketing
    { name: "Social Media Manager", workers: 5, category: "marketing", icon: Megaphone },
    { name: "SEO Specialist", workers: 3, category: "marketing", icon: Megaphone },
    { name: "PPC/Google Ads Expert", workers: 4, category: "marketing", icon: Megaphone },
    { name: "Email Marketing Specialist", workers: 2, category: "marketing", icon: Megaphone },
    { name: "Influencer Marketer", workers: 3, category: "marketing", icon: Megaphone },
    { name: "Brand Strategist", workers: 6, category: "marketing", icon: Megaphone },
    { name: "Market Research Analyst", workers: 4, category: "marketing", icon: Megaphone },
    { name: "Affiliate Marketing Manager", workers: 2, category: "marketing", icon: Megaphone },

    // 🎨 Graphic Design
    { name: "Logo Designer", workers: 3, category: "graphicDesign", icon: Palette },
    { name: "UI/UX Designer", workers: 5, category: "graphicDesign", icon: Palette },
    { name: "Illustrator", workers: 2, category: "graphicDesign", icon: Palette },
    { name: "Packaging Designer", workers: 4, category: "graphicDesign", icon: Palette },
    { name: "Motion Graphics Designer", workers: 3, category: "graphicDesign", icon: Palette },
    { name: "Infographic Designer", workers: 2, category: "graphicDesign", icon: Palette },
    { name: "Print Designer", workers: 4, category: "graphicDesign", icon: Palette },
    { name: "NFT/Digital Art Designer", workers: 1, category: "graphicDesign", icon: Palette },
  
    // 💻 Development
    { name: "Frontend Developer", workers: 6, category: "development", icon: Code },
    { name: "Backend Developer", workers: 5, category: "development", icon: Code },
    { name: "Full-Stack Developer", workers: 4, category: "development", icon: Code },
    { name: "Mobile App Developer", workers: 3, category: "development", icon: Code },
    { name: "WordPress/Shopify Developer", workers: 4, category: "development", icon: Code },
    { name: "Game Developer", workers: 2, category: "development", icon: Code },
    { name: "Blockchain Developer", workers: 1, category: "development", icon: Code },
    { name: "AI/ML Engineer", workers: 3, category: "development", icon: Code },
  
    // 🛠 IT Support
    { name: "Helpdesk Technician", workers: 5, category: "ITSupport", icon: Wrench },
    { name: "Cybersecurity Consultant", workers: 3, category: "ITSupport", icon: Wrench },
    { name: "Cloud Solutions Architect", workers: 4, category: "ITSupport", icon: Wrench },
    { name: "Network Administrator", workers: 3, category: "ITSupport", icon: Wrench },
    { name: "Data Recovery Specialist", workers: 2, category: "ITSupport", icon: Wrench },
    { name: "System Administrator", workers: 4, category: "ITSupport", icon: Wrench },
    { name: "DevOps Engineer", workers: 3, category: "ITSupport", icon: Wrench },
    { name: "Hardware Troubleshooter", workers: 2, category: "ITSupport", icon: Wrench },
  
    // ✍️ Content Creation
    { name: "Copywriter", workers: 4, category: "contentCreation", icon: PenTool },
    { name: "Blog Writer", workers: 3, category: "contentCreation", icon: PenTool },
    { name: "Video Editor", workers: 5, category: "contentCreation", icon: PenTool },
    { name: "Podcast Producer", workers: 2, category: "contentCreation", icon: PenTool },
    { name: "Scriptwriter", workers: 3, category: "contentCreation", icon: PenTool },
    { name: "Translator", workers: 4, category: "contentCreation", icon: PenTool },
    { name: "Voiceover Artist", workers: 2, category: "contentCreation", icon: PenTool },
    { name: "E-book/Whitepaper Writer", workers: 3, category: "contentCreation", icon: PenTool },
  
    // ✨ Bonus
    { name: "AR/VR Developer", workers: 1, category: "bonus", icon: Sparkles },
    { name: "Chatbot Developer", workers: 2, category: "bonus", icon: Sparkles },
    { name: "TikTok Content Strategist", workers: 3, category: "bonus", icon: Sparkles },
    { name: "Crypto Community Manager", workers: 2, category: "bonus", icon: Sparkles }
];

const categories = ["all", "marketing", "graphicDesign", "development", "ITSupport", "contentCreation", "bonus"];

export const TeamSkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const visibleSkills = filteredSkills.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSkills.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <section id="teamskills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary"> Services</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(9);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-5 h-5 mr-2 text-primary" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.workers} Available Workers
                </span>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
                onClick={handleLoadMore}
                className={cn("px-6 py-2 bg-primary text-primary-foreground rounded-full",
                        "hover:bg-primary/80 transition-colors duration-300 flex items-center mx-auto"
              )}
            >
              Load More
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};