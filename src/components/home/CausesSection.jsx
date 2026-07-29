import CauseCard from "../cards/CauseCard";

export default function CausesSection() {
  const causes = [
    "You’re building something real and ready to scale",
    "You’re building something real and ready to scale",
    "You’re building something real and ready to scale",
    "You’re building something real and ready to scale",
  ];

  return (
    <section className="mx-4 md:mx-auto max-w-[1440px] mt-16 rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      style={{
        background: "linear-gradient(180deg, #D5D4FF 90.87%, #807F99 100%)",
        minHeight: "1534px"
      }}
    >
      <div className="flex flex-col items-center pt-24 pb-16 px-6">
        
        {/* Headings */}
        <h1 className="text-[32px] md:text-[44px] font-bold text-[#001032] text-center mb-6">
          Path to the freedom
        </h1>
        
        <h2 className="text-[20px] md:text-[28px] font-normal text-black text-center max-w-3xl mb-16 leading-tight">
          Fostering well-being through breath,<br /> meditation & yoga programs since 1982
        </h2>

        {/* Search/Pill bar */}
        <div className="w-full max-w-[1261px] h-[60px] bg-white/80 rounded-full mb-16"></div>

        {/* Causes Heading */}
        <div className="w-full max-w-[1261px]">
          <h3 className="text-[32px] md:text-[46px] font-medium text-black mb-8">
            Causes we are working on
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <CauseCard key={index} title={cause} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}