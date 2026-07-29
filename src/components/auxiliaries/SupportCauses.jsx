import SupportCard from "../cards/SupportCard";
import FeaturedSupportCard from "../cards/FeaturedSupportCard";

export default function SupportCauses() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[46px] font-normal text-black mb-8 md:mb-10 text-center md:text-left">
          Support Causes
        </h2>

        {/* Mobile View: 3 SupportCards Vertically */}
        <div className="md:hidden flex flex-col gap-8 items-center">
          <SupportCard />
          <SupportCard />
          <SupportCard />
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8">
              <SupportCard />
              <SupportCard />
              <SupportCard />
              <SupportCard />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <FeaturedSupportCard />
          </div>
        </div>
      </div>
    </section>
  );
}