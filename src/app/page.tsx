import { AgentSpotlight, FeaturedListings, HeroSection, InvestmentOpportunities, LifestyleShowcase, MarketInsights, TestimonialSection, VIPServices, VirtualTours } from '@/components/homepage';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AgentSpotlight />
      <FeaturedListings />
      <MarketInsights />
      <InvestmentOpportunities />
      <VirtualTours />
      <LifestyleShowcase />
      <VIPServices />
      <TestimonialSection />
    </main>
  );
};

export default Home;