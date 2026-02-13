
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import AboutBrief from "@/components/AboutBrief";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials"

import CTASection from "@/components/CTASection";
export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <FeaturedListings />
      <AboutBrief />
      <ServicesOverview />
      <Testimonials />
      <CTASection 
        title="Ready to find your dream home?" 
        subtitle="Let's work together to achieve your real estate goals."
      />
    </div>
  );
}