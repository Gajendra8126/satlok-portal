import CauseCard from "../cards/CauseCard";

export default function CausesSection() {
  const causes = [
    "You're building something real and ready to scale",
    "You're building something real and ready to scale",
    "You're building something real and ready to scale",
    "You're building something real and ready to scale",
  ];

  return (
    <section className="bg-[#D9D7FF] pb-8">
      <div className="mx-auto max-w-7xl rounded-b-xl px-6 py-8">
        {/* Heading */}
        <h2 className="text-[36px] font-semibold text-[#001032]">
          Causes we are working on
        </h2>

        {/* Top Divider */}
        <div className="mt-6 h-px bg-[#C3BFFF]" />

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause, index) => (
            <CauseCard key={index} title={cause} />
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 h-px bg-[#C3BFFF]" />
      </div>
    </section>
  );
}