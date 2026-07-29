import Footer from "../layout/Footer";

import Hero from "../layout/Hero";
import FeatureHighlights from "../components/auxiliaries/FeatureHighlights";
import AboutSection from "../components/auxiliaries/AboutSection";
import SupportCauses from "../components/auxiliaries/SupportCauses";
import Events from "../components/auxiliaries/Events";
import BentoGrid from "../components/home/BentoGrid";
import QuoteSection from "../components/home/QuoteSection";
import Faq from "../layout/Faq";
import AboutFoundation from "../components/home/AboutFoundation";
export default function Auxiliaries() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <AboutFoundation />
      <AboutSection />
      <SupportCauses />
      <Events />
      <BentoGrid />
      <QuoteSection />
      <Faq />
      <Footer />
    </>
  );
}