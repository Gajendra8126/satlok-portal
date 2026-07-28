import Header from "../layout/Header";
import Hero from "../layout/Hero";
import QuickLinks from "../components/home/QuickLinks";
import BentoGrid from "../components/home/BentoGrid";
import CausesSection from "../components/home/CausesSection";
import Testimonials from "../components/home/Testimonials";
import JoinCards from "../components/home/JoinCards";
import ExperienceGallery from "../components/home/ExperienceGallery";
import QuoteSection from "../components/home/QuoteSection";
import Faq from "../layout/Faq";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuickLinks />
      <BentoGrid />
      <CausesSection />
      <Testimonials />
      <BentoGrid />
      <JoinCards />
      <ExperienceGallery />
      <QuoteSection />
      <Faq />
      <Footer />
    </>
  );
}