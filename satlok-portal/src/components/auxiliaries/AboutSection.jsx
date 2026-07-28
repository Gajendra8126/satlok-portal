export default function AboutSection() {
  const cards = [
    {
      id: 1,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on.",
      color: "#B4A37B",
      align: "bottom",
    },
    {
      id: 2,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on.",
      color: "#D8D4FF",
      align: "center",
    },
    {
      id: 3,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on.",
      color: "#022F36",
      align: "bottom",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[48px] font-semibold text-[#101828] mb-10">
          Diksha, Direction & Sadhna
        </h2>

        {/* Main Box */}
        <div className="border border-[#CFCFCF] rounded-[24px] p-10">

          <div className="grid lg:grid-cols-3 gap-16 items-start">

            {/* Left Card */}
            <div>
              <h3 className="text-xl font-semibold text-[#111827]">
                {cards[0].title}
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-gray-600">
                {cards[0].description}
              </p>

              <div
                className="mt-8 h-[290px] rounded-[22px] shadow-lg"
                style={{ background: cards[0].color }}
              ></div>
            </div>

            {/* Center Card */}
            <div className="flex flex-col items-center">

              <div
                className="w-full h-[180px] rounded-[22px] shadow-lg"
                style={{ background: cards[1].color }}
              ></div>

              <h3 className="mt-8 text-xl font-semibold">
                {cards[1].title}
              </h3>

              <p className="mt-3 text-center text-[14px] leading-6 text-gray-600 max-w-[280px]">
                {cards[1].description}
              </p>

              <button className="mt-8 px-8 py-3 border border-[#16254C] rounded-lg text-[#16254C] hover:bg-[#16254C] hover:text-white transition">
                Get started
              </button>

            </div>

            {/* Right Card */}
            <div>
              <h3 className="text-xl font-semibold text-[#111827]">
                {cards[2].title}
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-gray-600">
                {cards[2].description}
              </p>

              <div
                className="mt-8 h-[290px] rounded-[22px] shadow-lg"
                style={{ background: cards[2].color }}
              ></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}