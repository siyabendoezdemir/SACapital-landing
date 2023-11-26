import FeatureSection from "../../sections/features/features";
import FooterSection from "../../sections/footer/footer";
import LandingPageHeroSection from "../../sections/hero/landing/landing";
import PricingSection from "../../sections/pricing/pricing";
import TestimonialsSection from "../../sections/testimonials/testimonials";

function LandingPage() {
  return (
    <main>
      <LandingPageHeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}

export default LandingPage;
