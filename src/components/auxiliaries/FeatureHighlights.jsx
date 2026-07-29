import FeatureCard from "../cards/FeatureCard";

const features = [
  {
    id: 1,
    title: "Free Expert\nGuidance",
  },
  {
    id: 2,
    title: "Connected Startup\nCommunity",
  },
  {
    id: 3,
    title: "Access to Real\nAudiences",
  },
  {
    id: 4,
    title: "Cross-Domain\nCollaboration",
  },
  {
    id: 5,
    title: "100% Transparent\nPricing",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 justify-items-center">
          {features.map((item, index) => (
            <FeatureCard
              key={item.id}
              isTall={index === 0}
              title={
                item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}