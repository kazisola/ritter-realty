import { CTASection, DubaiInvestmentSection, ExperienceTimeline, ExpertiseSection, LoyalHeroSection, PhilosophySection, TeamSection } from "@/components/about";


const AboutPage = () => {
    return (
        <main>
            <LoyalHeroSection />
            <ExperienceTimeline />
            {/* <TeamSection /> */}
            <ExpertiseSection />
            <DubaiInvestmentSection />
            <PhilosophySection />
            <CTASection />
        </main>
    );
};

export default AboutPage;