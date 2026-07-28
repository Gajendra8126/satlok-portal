export default function SupportCard() {
  return (
    <div className="bg-white rounded-[10px] shadow-[inset_0_0_12px_rgba(0,0,0,0.75)] filter drop-shadow-[0_4px_15px_rgba(11,26,61,0.5)] p-6 md:p-8 flex flex-col h-auto md:h-[406px] w-full max-w-[323px] mx-auto relative overflow-hidden">

      {/* Image */}
      <div className="h-[206px] w-full rounded-[10px] bg-[#C4C4C4] shrink-0" />

      {/* Description */}
      <p className="text-[12px] text-[#001032] leading-[22px] mt-4 font-normal mb-20 md:mb-0">
        The process felt human, even though it’s AI-driven. The brief understanding was spot-on
      </p>

      {/* Bottom */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
        <span className="text-[10px] text-[#001032] font-light leading-[16px]">
          The process felt <br /> human, even
        </span>

        <button className="bg-[#001032] text-[#F9F9F7] text-[15.375px] w-[120px] h-[40px] rounded-[4px] font-normal leading-[24px] shrink-0">
          Get Started
        </button>
      </div>

    </div>
  );
}