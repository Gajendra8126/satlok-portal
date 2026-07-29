import Hero from "../layout/Hero";
import QuickLinks from "../components/home/QuickLinks";
import AboutFoundation from "../components/home/AboutFoundation";
import FoundationIntro from "../components/home/FoundationIntro";
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
      <Hero showCircles={true} />
      <QuickLinks />
      <AboutFoundation />
      <FoundationIntro />
      <Testimonials />
      <AboutFoundation />
      <JoinCards />
      <ExperienceGallery />
      <QuoteSection color="#FFF0CB" textColor="black" />
      <Faq />
      <Footer />
    </>
  );
}