import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Knowledge from "../components/Knowledge/Knowledge";
import Media from "../components/Media/Media";
import OttPlatform from "../components/OttPlatform/OttPlatform";
import StoryBanner from "../components/StoryBanner/StoryBanner";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";

export default function Home() {
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