import Header from "../layout/Header";
import Hero from "../layout/Hero";
import Knowledge from "../components/Knowledge/Knowledge";
import Media from "../components/Media/Media";
import OttPlatform from "../components/OttPlatform/OttPlatform";
import StoryBanner from "../components/StoryBanner/StoryBanner";
import Faq from "../layout/Faq";
import Footer from "../layout/Footer";

export default function Wisdom() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Knowledge />
        <Media />
        <OttPlatform />
        <StoryBanner />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
