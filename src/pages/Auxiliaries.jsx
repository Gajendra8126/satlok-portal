import Header from "../Layout/Header";
import Footer from "../layout/Footer";

import Hero from "../layout/Hero";
import FeatureHighlights from "../components/auxiliaries/FeatureHighlights";
import AboutSection from "../components/auxiliaries/AboutSection";
import SupportCauses from "../components/auxiliaries/SupportCauses";
import Events from "../components/auxiliaries/Events";
import BentoGrid from "../components/home/BentoGrid";
import DarkQuote from "../components/auxiliaries/DarkQuote";
import Faq from "../layout/Faq";

export default function Auxiliaries() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureHighlights />
      <AboutSection />
      <SupportCauses />
      <Events />
      <BentoGrid />
      <DarkQuote />
      <Faq />
      <Footer />
    </>
  );
}