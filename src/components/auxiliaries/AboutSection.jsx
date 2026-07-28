export default function AboutSection() {
  const cards = [
    {
      id: 1,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on",
      color: "#8A744A",
    },
    {
      id: 2,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on",
      color: "#CAC9FF",
    },
    {
      id: 3,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on",
      color: "#002B31",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[32px] md:text-[46px] font-normal text-black mb-10">
          Diksha, Direction & Sadhna
        </h2>

        {/* Main Box */}
        <div className="border border-black rounded-[20px] p-6 lg:p-14 bg-white shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start">

            {/* Left Card */}
            <div className="flex flex-col">
              <h3 className="text-xl font-normal text-black">
                {cards[0].title}
              </h3>
              <p className="mt-3 text-[12px] leading-[22px] text-[#001032] max-w-[273px]">
                {cards[0].description}. {cards[0].description}
              </p>
              <div
                className="mt-6 w-full h-[359px] rounded-[20px] shadow-[0_0_12px_rgba(0,0,0,0.75)] opacity-80"
                style={{ background: cards[0].color }}
              ></div>
            </div>

            {/* Center Card */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-normal text-black self-start">
                {cards[1].title}
              </h3>
              <p className="mt-3 text-[12px] leading-[22px] text-[#001032] max-w-[273px] self-start">
                {cards[1].description}. {cards[1].description}
              </p>
              <div
                className="mt-6 w-full h-[258px] rounded-[20px] shadow-[0_0_12px_rgba(0,0,0,0.75)] opacity-80"
                style={{ background: cards[1].color }}
              ></div>
              <button className="mt-12 px-6 py-2 border border-[#001032] rounded-[5px] text-[16px] text-[#001032] transition hover:bg-gray-50 self-start lg:self-center">
                Get started
              </button>
            </div>

            {/* Right Card */}
            <div className="flex flex-col">
              <h3 className="text-xl font-normal text-black">
                {cards[2].title}
              </h3>
              <p className="mt-3 text-[12px] leading-[22px] text-[#001032] max-w-[273px]">
                {cards[2].description}. {cards[2].description}
              </p>
              <div
                className="mt-6 w-full h-[359px] rounded-[20px] shadow-[0_0_12px_rgba(0,0,0,0.75)]"
                style={{ background: cards[2].color }}
              ></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}