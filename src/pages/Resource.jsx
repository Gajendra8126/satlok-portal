import Hero from "../layout/Hero";
import IntroSection from "../components/services/IntroSection";
import WellnessSection from "../components/event/EventDescription";
import Faq from "../layout/Faq";
import Footer from "../layout/Footer";
import StoryBanner from "../components/StoryBanner/StoryBanner";
import QuoteSection from "../components/home/QuoteSection";

export default function Resources() {
  return (
    <>
      <Hero />

      <main className="bg-gray-50 pb-20 pt-20">
        <IntroSection />
        <WellnessSection />

        {/* Ashram / Foundation Section */}
        <section className="py-16 px-6">
          <div className="max-w-[1245px] mx-auto">
            <h2 className="text-[32px] md:text-[46px] leading-[35px] font-normal text-black mb-12 ml-4">Ashram/Foundation</h2>
            <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0_0px_12px_rgba(0,0,0,0.75)] min-h-[522px] flex flex-col md:flex-row items-center p-8 md:p-12 relative">
              <div className="flex-1 md:pr-12 relative z-10 w-full">
                <h2 className="text-[20px] md:text-[28px] leading-[30px] md:leading-[45px] font-normal text-black max-w-[656px]">
                  Fostering well-being through breath, meditation & yoga programs since 1985
                </h2>
              </div>
              
              {/* Stacked Cards Effect */}
              <div className="relative w-full md:w-[410px] h-[300px] md:h-[412px] mt-10 md:mt-0 flex-shrink-0">
                <div className="absolute top-0 right-0 md:right-0 w-[280px] md:w-[410px] h-[280px] md:h-[412px] bg-white opacity-80 rounded-[30px] md:rounded-[50px] shadow-[0_0px_12px_rgba(0,0,0,0.75)]"></div>
                <div className="absolute top-10 -right-10 md:-right-10 w-[280px] md:w-[410px] h-[280px] md:h-[412px] bg-white opacity-80 rounded-[30px] md:rounded-[50px] shadow-[0_0px_12px_rgba(0,0,0,0.75)]"></div>
                <div className="absolute top-20 -right-20 md:-right-20 w-[280px] md:w-[410px] h-[280px] md:h-[412px] bg-white opacity-90 rounded-[30px] md:rounded-[50px] shadow-[0_0px_12px_rgba(0,0,0,0.75)] z-10"></div>
              </div>
            </div>
          </div>
        </section>

        <WellnessSection />

        {/* 4 Cards Grid Section */}
        <section className="py-16 px-6">
          <div className="max-w-[1245px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {['Ashrams', 'Naam Daan Centres', 'Samagam', 'Causes'].map((title, index) => (
                <div key={index} className="w-full max-w-[311px] h-[358px] bg-white rounded-[20px] shadow-[0_0px_12px_rgba(0,0,0,0.75)] p-6 flex flex-col opacity-80 transition duration-300 hover:scale-105 cursor-pointer">
                  <h3 className="text-[28px] leading-[35px] font-normal text-black">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet The GuruJi Section */}
        <section className="py-16 px-6">
          <div className="max-w-[1245px] mx-auto">
            <h2 className="text-[32px] md:text-[46px] leading-[35px] font-normal text-black mb-12 ml-4">Meet The GuruJi</h2>
            <div className="bg-[#FFFAEF] rounded-[20px] shadow-[0_0px_12px_rgba(0,0,0,0.75)] h-auto md:h-[429px] p-8 md:p-12 flex flex-col md:flex-row justify-between relative overflow-hidden">
              <div className="flex flex-col justify-between max-w-[702px] h-full z-10">
                <h2 className="text-[18px] md:text-[22px] leading-[28px] md:leading-[35px] font-normal text-black">
                  Fostering well-being through breath, meditation & yoga programs since 1987
                </h2>
                <h2 className="text-[18px] md:text-[22px] leading-[28px] md:leading-[35px] font-normal text-black mt-8 md:mt-0">
                  Fostering well-being through breath, meditation & yoga programs since 1988
                </h2>
              </div>
              
              <div className="flex flex-col items-center md:items-end justify-between h-full z-10 mt-10 md:mt-0 relative">
                <div className="w-[200px] md:w-[265px] h-[200px] md:h-[264px] bg-white rounded-full shadow-[0_0px_12px_rgba(0,0,0,0.75)] mb-8"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-[140px] md:w-[165px] h-[50px] md:h-[60px] bg-[#D4E2FF] rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.75)] flex items-center justify-center cursor-pointer transition hover:bg-[#c3d5f9]">
                    <span className="text-[#33559F] text-[14px] md:text-[16px] leading-[35px] font-normal">tatvadarshhi</span>
                  </div>
                  <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#FEF9EE] rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.5)] flex items-center justify-center border border-black cursor-pointer transition hover:bg-white">
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 1L23 7L17 13M1 7H23" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuoteSection color="#000000" />

        <Faq />
      </main>

      <Footer />
    </>
  );
}