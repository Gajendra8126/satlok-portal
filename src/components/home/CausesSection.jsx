import CauseCard from "../cards/CauseCard";

export default function CausesSection() {
  const causes = [
    "You’re building something real and ready to scale",
    "You’re building something real and ready to scale",
    "You’re building something real and ready to scale",
    "You’re building something real and ready to scale",
  ];

  return (
    <div className="w-full max-w-[1261px] mt-4">
      {/* Causes Heading */}
      <h3 className="text-[32px] md:text-[46px] font-medium text-black mb-8">
        Causes we are working on
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {causes.map((cause, index) => (
          <CauseCard key={index} title={cause} />
        ))}
      </div>
    </div>
  );
}