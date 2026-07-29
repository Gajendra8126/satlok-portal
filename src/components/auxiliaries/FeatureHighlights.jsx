import FeatureCard from "../cards/FeatureCard";

const features = [
  {
    id: 1,
    title: "Free Expert\nGuidance",
  },
  {
    id: 2,
    title: "Connected Startup\nCommunity",
  },
  {
    id: 3,
    title: "Access to Real\nAudiences",
  },
  {
    id: 4,
    title: "Cross-Domain\nCollaboration",
  },
  {
    id: 5,
    title: "100% Transparent\nPricing",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-6 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* ================= MOBILE VIEW (Exact match to Figma design) ================= */}
        <div className="md:hidden flex flex-col space-y-4">
          {/* Stacked Color Layers */}
          <div className="relative pt-6">
            {/* Layer 1: Purple */}
            <div className="bg-[#9DA4F5] h-[35px] rounded-t-[20px] w-full" />
            {/* Layer 2: White */}
            <div className="bg-white h-[35px] rounded-t-[20px] w-full -mt-4 shadow-sm" />
            {/* Layer 3: Soft Pink Card */}
            <div className="bg-[#FFE4E7] h-[180px] rounded-[20px] w-full -mt-4 shadow-sm" />
          </div>

          {/* Bento Grid Container */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_0_15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-3">
            {/* 2-Column Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Left Column: 1 Tall Card */}
              <div className="bg-white border border-gray-200 rounded-[20px] h-[320px] shadow-[0_0_12px_rgba(0,0,0,0.12)] p-4 flex flex-col justify-end">
                <span className="text-[13px] font-medium text-[#001032] leading-tight">
                  Free Expert<br />Guidance
                </span>
              </div>

              {/* Right Column: 2 Stacked Cards */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-gray-200 rounded-[20px] h-[154px] shadow-[0_0_12px_rgba(0,0,0,0.12)] p-4 flex flex-col justify-end">
                  <span className="text-[13px] font-medium text-[#001032] leading-tight">
                    Connected Startup<br />Community
                  </span>
                </div>
                <div className="bg-white border border-gray-200 rounded-[20px] h-[154px] shadow-[0_0_12px_rgba(0,0,0,0.12)] p-4 flex flex-col justify-end">
                  <span className="text-[13px] font-medium text-[#001032] leading-tight">
                    Access to Real<br />Audiences
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Horizontal Wide Pill Card */}
            <div className="bg-white border border-gray-200 rounded-full h-[54px] shadow-[0_0_12px_rgba(0,0,0,0.12)] px-6 flex items-center justify-between">
              <span className="text-[13px] font-medium text-[#001032]">
                Cross-Domain Collaboration & Transparent Pricing
              </span>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 justify-items-center">
          {features.map((item, index) => (
            <FeatureCard
              key={item.id}
              isTall={index === 0}
              title={
                item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}