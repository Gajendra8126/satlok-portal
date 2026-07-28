export default function SupportCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col h-full">

      {/* Image */}
      <div className="h-36 rounded-lg bg-[#D9D9D9]" />

      {/* Description */}
      <p className="text-[11px] text-gray-600 leading-5 mt-4">
        The process felt human, even though it's AI-driven.
        The brief understanding was spot-on.
      </p>

      {/* Bottom */}
      <div className="mt-auto pt-5 flex justify-between items-end">

        <span className="text-[10px] text-gray-500 leading-4">
          The process felt
          <br />
          human, even
        </span>

        <button className="bg-[#0B1D45] text-white text-xs px-4 py-2 rounded-md">
          Get Started
        </button>

      </div>

    </div>
  );
}