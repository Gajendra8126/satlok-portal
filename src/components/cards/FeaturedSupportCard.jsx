export default function FeaturedSupportCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-full flex flex-col">

      {/* Image */}
      <div className="h-64 rounded-lg bg-[#D9D9D9]" />

      {/* Description */}

      <p className="text-sm text-gray-600 leading-7 mt-6">
        The process felt human, even though it's AI-driven.
        The brief understanding was spot-on.

        The process felt human, even though it's AI-driven.
        The brief understanding was spot-on.

        The process felt human, even though it's AI-driven.
        The brief understanding was spot-on.
      </p>

      {/* Bottom */}

      <div className="mt-auto flex justify-between items-end pt-8">

        <span className="text-xs text-gray-500">
          The process felt
          <br />
          human, even
        </span>

        <button className="bg-[#0B1D45] text-white px-5 py-2 rounded-md text-sm">
          Get Started
        </button>

      </div>

    </div>
  );
}