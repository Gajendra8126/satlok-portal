import Hero from "../layout/Hero";
import Header from "../layout/Header";
// import FeatureHighlights from "../components/home/FeatureHighlights";
import QuickLinks from "../components/home/QuickLinks";
import AboutFoundation from "../components/home/AboutFoundation";
import FoundationIntro from "../components/home/FoundationIntro";
import CausesSection from "../components/home/CausesSection";
import VisionSection from "../components/home/VisionSection";
import Testimonials from "../components/home/Testimonials";
// import StatisticsSection from "../components/home/StatisticsSection";
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
      {/* <FeatureHighlights /> */}
      <QuickLinks />

       <AboutFoundation />
       <FoundationIntro />
      <CausesSection />

      <VisionSection />

      <Testimonials />
      <AboutFoundation />
      {/* <StatisticsSection /> */}

      <JoinCards />

      <ExperienceGallery />

      <QuoteSection />

      <Faq />  
      <Footer />
    </>
  );
}