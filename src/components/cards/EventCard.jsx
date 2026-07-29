export default function EventCard() {
  return (
    <div className="bg-[#002B31] border border-black rounded-[8px] md:rounded-[5px] p-5 md:p-8 w-full max-w-[360px] md:max-w-none md:w-[483px] min-h-[200px] md:h-[274px] mx-auto flex justify-between gap-3 md:gap-6 overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col justify-between flex-1 py-1">
        <div>
          <p className="text-white text-[11px] sm:text-[12px] font-normal leading-[17px] sm:leading-[20px]">
            The process felt human, even though it’s AI-driven. The brief understanding was spot-on. The process felt human, even though it’s AI-driven.
          </p>
        </div>

        <p className="text-white text-[10px] font-light leading-[15px] mt-3">
          The process felt <br /> human, even
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="w-[110px] sm:w-[130px] md:w-[157px] h-auto min-h-[160px] md:h-[222px] rounded-[5px] bg-[#A6A6A6]/80 shrink-0"></div>
    </div>
  );
}