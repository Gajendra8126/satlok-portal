import Footer from "../layout/Footer";

import Hero from "../layout/Hero";
import IntroSection from "../components/services/IntroSection";
import ServicesSection from "../components/services/ServicesSection";
import AboutFoundation from "../components/home/AboutFoundation";
import Media from "../components/Media/Media";
import StoryBanner from "../components/StoryBanner/StoryBanner";

import Faq from "../layout/Faq";

export default function Services() {
  return (
    <>

      <main>
        <Hero />

         <IntroSection />

        <ServicesSection />
        <div className="flex justify-center mt-12">

          <button className="border border-[#1A3763] text-[#1A3763] px-7 py-3 rounded-md text-[15px] hover:bg-[#1A3763] hover:text-white transition">
            Explore All
          </button>

        </div>
        <Media />
        <AboutFoundation />
        
        <StoryBanner />
        <Faq />
      </main>

      <Footer />
    </>
  );
}