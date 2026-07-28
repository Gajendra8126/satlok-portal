export default function EventCard() {
  return (
    <div className="bg-[#032B33] rounded-lg p-6 h-[180px] flex justify-between gap-6">
      {/* Left Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="text-white text-[13px] leading-6">
            The process felt human, even though it's AI driven.
            The brief understanding was spot on. The process felt
            human, even though it's AI driven.
          </p>
        </div>

        <p className="text-gray-300 text-[11px]">
          The process felt
          <br />
          human, even
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="w-[120px] h-[120px] rounded bg-gray-400 shrink-0"></div>
    </div>
  );
}