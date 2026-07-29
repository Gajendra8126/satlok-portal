import Footer from "../layout/Footer";
import AboutFoundation from "../components/home/AboutFoundation";
import Hero from "../layout/Hero";
import AboutSection from "../components/auxiliaries/AboutSection";
import Events from "../components/auxiliaries/Events";
import StoryBanner from "../components/StoryBanner/StoryBanner";
import WellnessSection from "../components/event/EventDescription";
import SupportCausesSection from "../components/event/SupportCause";


import Faq from "../layout/Faq";

export default function Eventpage() {
  return (
    <>

      <main>

        <Hero />
        <WellnessSection />
        <AboutFoundation />
        <AboutSection />
        <SupportCausesSection />
        <Events />
        <StoryBanner />
        

        <Faq />

      </main>

      <Footer />
    </>
  );
}