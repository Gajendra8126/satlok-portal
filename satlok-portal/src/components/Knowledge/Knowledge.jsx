import { useState } from "react";

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState("Prarthana");

  const pillGroups = [
    ["Books", "Quotes"],
    ["Prarthana"],
    ["Media", "Articles"],
  ];

  const cardStyle =
    "bg-white rounded-3xl border border-gray-300 shadow-lg";

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Banner */}
        <div className="w-full h-36 md:h-56 rounded-3xl bg-[#9A9CF5]" />

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#111827] text-center mt-10 md:mt-12 mb-10">
          Explore Guruji&apos;s Knowledge
        </h2>

        {/* ── Mobile layout ── */}
        <div className="md:hidden">
          <div className="flex justify-center flex-wrap gap-1 mb-6">
            {pillGroups.map((group, i) => {
              const isActive = group.some((c) => activeCategory === c);
              return (
                <div
                  key={i}
                  className={`flex items-center rounded-2xl border px-5 py-2.5 transition-colors ${
                    isActive
                      ? "bg-[#002C3E] border-[#002C3E]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {group.map((cat, j) => (
                    <span key={cat} className="flex items-center">
                      {j > 0 && (
                        <span
                          className={`mx-2 h-4 w-px ${
                            isActive ? "bg-white/40" : "bg-gray-300"
                          }`}
                        />
                      )}
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-medium whitespace-nowrap ${
                          isActive ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {cat}
                      </button>
                    </span>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className={`col-span-2 h-36 ${cardStyle}`} />
            <div className={`h-36 ${cardStyle}`} />
            <div className={`h-36 ${cardStyle}`} />
            <div className={`h-36 ${cardStyle}`} />
            <div className={`h-36 ${cardStyle}`} />
            <div className={`col-span-2 h-44 ${cardStyle}`} />
            <div className={`col-span-2 h-44 ${cardStyle}`} />
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:grid grid-cols-12 gap-3">
          <div className={`col-span-3 ${cardStyle}`} />

          {/* Middle section — nested sub-grid for pill ↔ card alignment */}
          <div className="col-span-6 grid grid-cols-[3fr_2fr_3fr] gap-3">
            {/* Sub-row 1: pill containers */}
            {pillGroups.map((group, i) => {
              const isActive = group.some((c) => activeCategory === c);
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center rounded-2xl border py-2.5 transition-colors ${
                    isActive
                      ? "bg-[#002C3E] border-[#002C3E]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {group.map((cat, j) => (
                    <span key={cat} className="flex items-center">
                      {j > 0 && (
                        <span
                          className={`mx-1.5 lg:mx-2 h-4 w-px ${
                            isActive ? "bg-white/40" : "bg-gray-300"
                          }`}
                        />
                      )}
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs lg:text-sm font-medium whitespace-nowrap transition-colors ${
                          isActive ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {cat}
                      </button>
                    </span>
                  ))}
                </div>
              );
            })}

            {/* Sub-row 2: cards (same column widths as pills above) */}
            <div className={`h-40 ${cardStyle}`} />
            <div className={`h-40 ${cardStyle}`} />
            <div className={`h-40 ${cardStyle}`} />
          </div>

          <div className={`col-span-3 ${cardStyle}`} />

          {/* Bottom row — two equal half-width cards */}
          <div className={`col-span-6 h-48 ${cardStyle}`} />
          <div className={`col-span-6 h-48 ${cardStyle}`} />
        </div>

        {/* Explore All */}
        <div className="mt-12 flex justify-center">
          <button className="border border-[#002C3E] text-[#002C3E] rounded-md px-8 py-3 font-medium hover:bg-[#002C3E] hover:text-white transition-colors duration-200">
            Explore All
          </button>
        </div>
      </div>
    </section>
  );
}