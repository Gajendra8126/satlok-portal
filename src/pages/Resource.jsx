import Header from "../layout/Header";
import Hero from "../layout/Hero";
import IntroSection from "../components/services/IntroSection";
import WellnessSection from "../components/event/EventDescription";
// import Knowledge from "../components/resources/Knowledge";
// import Media from "../components/resources/Media";
// import OttPlatform from "../components/resources/OttPlatform";
// import VisionSection from "../components/common/VisionSection";
import Faq from "../layout/Faq";
import Footer from "../layout/Footer";
import StoryBanner from "../components/StoryBanner/StoryBanner";

export default function Resources() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <IntroSection />
        <WellnessSection />
        <WellnessSection />
        {/* <Knowledge />
        <Media />
        <OttPlatform />
        <VisionSection /> */}
        <StoryBanner />
        <Faq />
      </main>

      <Footer />
    </>
  );
}