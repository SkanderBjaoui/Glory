import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HomeSection} from "../components/HomeSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { TeamSkills } from "../components/TeamSkills";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return(
    <div className="min-h-screen bg-backgroung text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/* background effect */}
        <StarBackground></StarBackground>
        {/* Nav Bar */}
        <Navbar></Navbar>
        <HomeSection></HomeSection>
        {/* Main Content */}
        <HowItWorksSection></HowItWorksSection>
        <TeamSkills></TeamSkills>
        <ContactSection></ContactSection>
        {/* Footer */}
        <Footer></Footer>
    </div>)
};