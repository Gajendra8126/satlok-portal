export default function EventCard() {
  return (
    <div className="bg-[#002B31] border border-black rounded-[5px] p-6 md:p-8 h-auto min-h-[221px] md:h-[274px] w-full max-w-[373px] md:max-w-none md:w-[483px] mx-auto flex justify-between gap-4 md:gap-6 overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="text-white text-[12px] font-normal leading-[20px] max-w-[242px]">
            The process felt human, even though it’s AI-driven. The brief understanding was spot-on. The process felt human, even though it’s AI-driven. The brief understanding was spot-on.
          </p>
        </div>

        <p className="text-white text-[10px] font-light leading-[16px] max-w-[96px] mt-4">
          The process felt <br /> human, even
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="w-[120px] md:w-[157px] h-full min-h-[195px] md:h-[222px] rounded-[5px] bg-[#A6A6A6]/80 shrink-0"></div>
    </div>
  );
}