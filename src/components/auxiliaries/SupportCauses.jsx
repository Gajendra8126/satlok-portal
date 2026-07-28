import SupportCard from "../cards/SupportCard";
import FeaturedSupportCard from "../cards/FeaturedSupportCard";

export default function SupportCauses() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[46px] font-normal text-black mb-10">
          Support Causes
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-[82px] gap-y-[51px]">
            <SupportCard />
            <SupportCard />
            <SupportCard />
            <SupportCard />
          </div>

          {/* Right */}
          <div className="shrink-0 w-full lg:w-[502px]">
            <FeaturedSupportCard />
          </div>
        </div>
      </div>
    </section>
  );
}