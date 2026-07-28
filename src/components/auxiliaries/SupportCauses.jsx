import SupportCard from "../cards/SupportCard";
import FeaturedSupportCard from "../cards/FeaturedSupportCard";

export default function SupportCauses() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[48px] font-semibold text-[#111827] mb-10">
          Support Causes
        </h2>

        <div className="grid lg:grid-cols-12 gap-10">

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