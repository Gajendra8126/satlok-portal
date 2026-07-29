export default function SupportCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-5 md:p-6 flex flex-col justify-between h-[406px] w-full max-w-[323px] mx-auto overflow-hidden border border-gray-100">

      {/* Image Placeholder */}
      <div className="h-[206px] w-full rounded-[14px] bg-[#C4C4C4] shrink-0" />

      {/* Description */}
      <p className="text-[13px] text-[#001032] leading-[20px] mt-4 font-normal">
        The process felt human, even though it’s AI-driven. The brief understanding was spot-on
      </p>

      {/* Bottom Row */}
      <div className="flex items-end justify-between w-full mt-auto pt-4">
        <span className="text-[10px] text-[#001032] font-normal leading-tight">
          The process felt <br /> human, even
        </span>

        <button className="bg-[#001032] text-white text-[13px] font-medium px-5 py-2.5 rounded-[8px] hover:opacity-90 transition-opacity shrink-0">
          Get Started
        </button>

      </div>

    </div>
  );
}