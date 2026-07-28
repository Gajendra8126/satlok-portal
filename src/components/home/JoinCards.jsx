import JoinCard from "../cards/JoinCard";

const cards = [
  {
    id: 1,
    title: "I want to join the team",
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "I want to volunteer",
    buttonText: "Get Started",
  },
  {
    id: 3,
    title: "I want to donate",
    buttonText: "Get Started",
  },
];

export default function JoinCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <JoinCard
              key={card.id}
              title={card.title}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}