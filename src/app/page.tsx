import { AgentSpotlight, FeaturedListings, HeroSection, InvestmentOpportunities, LifestyleShowcase, MarketInsights, TestimonialSection, VIPServices, VirtualTours } from '@/components/homepage';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AgentSpotlight />
      <FeaturedListings />
      <VirtualTours />
      <InvestmentOpportunities />
      <MarketInsights />
      <LifestyleShowcase />
      <VIPServices />
      <TestimonialSection />
    </main>
  );
};

export default Home;