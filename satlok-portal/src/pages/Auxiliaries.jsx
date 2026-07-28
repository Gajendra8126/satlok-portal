import Header from "../layout/Header";
import Footer from "../layout/Footer";

import Hero from "../layout/Hero";
import AboutFoundation from "../components/home/AboutFoundation";

import AboutSection from "../components/auxiliaries/AboutSection";
import FeatureHighlights from "../components/auxiliaries/FeatureHighlights";
import SupportCauses from "../components/auxiliaries/SupportCauses";
import Events from "../components/auxiliaries/Events";
import StoryBanner from "../components/StoryBanner/StoryBanner";

import Faq from "../layout/Faq";

export default function Ausxiliarie() {
  return (
    <>
      <Header />

      <Hero />
      <FeatureHighlights />
      <AboutFoundation />
      

      <AboutSection />

      

      <SupportCauses />

      <Events />
      <AboutFoundation />
      <StoryBanner />
      
      
      <Faq />

      <Footer />
    </>
  );
}