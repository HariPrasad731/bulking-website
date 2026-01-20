import Hero from "../components/home/Hero";
import OfferSection from "../components/home/OfferSection";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import Discover from "../components/home/Discover";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferSection />
      <Pricing />
      <Testimonials />
      <Discover />
    </>
  );
}
