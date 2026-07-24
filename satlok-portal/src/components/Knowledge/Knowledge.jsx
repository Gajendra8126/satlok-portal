import { useState } from "react";

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState("Prarthana");

  const topTabs = ["Books", "Prarthana", "Media"];
  const bottomTabs = ["Articles", "Quotes"];

  const pillGroups = [
    ["Books", "Quotes"],
    ["Prarthana"],
    ["Media", "Articles"],
  ];

  const cardStyle =
    "bg-white rounded-2xl border border-[#D8D8D8] shadow-[0_4px_12px_rgba(0,0,0,0.12)]";

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Banner */}
        <div className="w-full h-40 md:h-56 rounded-3xl bg-[#9A9CF5]" />

        {/* Desktop Heading */}
        <h2 className="hidden md:block text-start text-4xl font-semibold mt-12 mb-10">
          Explore Guruji&apos;s Knowledge
        </h2>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* Top Tabs */}
          <div className="flex justify-center mb-5 mt-8">
            <div className="flex w-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
              {topTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`flex-1 py-4 text-lg font-medium transition-all ${
                    activeCategory === tab
                      ? "bg-[#002C3E] text-white rounded-3xl"
                      : "text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex w-3/4 bg-white rounded-3xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
              {bottomTabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`flex-1 py-4 text-lg font-medium transition-all ${
                    activeCategory === tab
                      ? "bg-[#002C3E] text-white rounded-full"
                      : "text-black"
                  } ${index === 1 ? "border-l border-gray-300" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <hr className="mb-8" />

          <h2 className="text-xl font-semibold text-center mb-6">
            Explore Guruji&apos;s Knowledge
          </h2>

          {/* Cards */}
          <div className="space-y-4">
            <div className={`h-40 ${cardStyle}`} />

            <div className="grid grid-cols-2 gap-4">
              <div className={`h-32 ${cardStyle}`} />
              <div className={`h-32 ${cardStyle}`} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`h-[280px] ${cardStyle}`} />

              <div className="flex flex-col gap-4">
                <div className={`h-[82px] ${cardStyle}`} />
                <div className={`h-[82px] ${cardStyle}`} />
                <div className={`h-[82px] ${cardStyle}`} />
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid grid-cols-12 gap-3">
          <div className={`col-span-3 ${cardStyle}`} />

          <div className="col-span-6 grid grid-cols-[3fr_2fr_3fr] gap-3">
            {pillGroups.map((group, i) => {
              const active = group.some((c) => c === activeCategory);

              return (
                <div
                  key={i}
                  className={`flex items-center justify-center rounded-2xl border py-3 ${
                    active
                      ? "bg-[#002C3E] border-[#002C3E]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {group.map((cat, j) => (
                    <span key={cat} className="flex items-center">
                      {j > 0 && (
                        <span
                          className={`mx-2 h-4 w-px ${
                            active ? "bg-white/40" : "bg-gray-300"
                          }`}
                        />
                      )}

                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-medium ${
                          active ? "text-white" : "text-black"
                        }`}
                      >
                        {cat}
                      </button>
                    </span>
                  ))}
                </div>
              );
            })}

            <div className={`h-40 ${cardStyle}`} />
            <div className={`h-40 ${cardStyle}`} />
            <div className={`h-40 ${cardStyle}`} />
          </div>

          <div className={`col-span-3 ${cardStyle}`} />

          <div className={`col-span-6 h-48 ${cardStyle}`} />
          <div className={`col-span-6 h-48 ${cardStyle}`} />
        </div>

        {/* Explore Button */}
        <div className="mt-12 flex justify-center">
          <button className="border border-[#002C3E] text-[#002C3E] px-8 py-3 rounded-md hover:bg-[#002C3E] hover:text-white transition">
            Explore All
          </button>
        </div>
      </div>
      
    </section>
  );
}