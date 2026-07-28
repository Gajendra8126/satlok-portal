import QuickLinkCard from "../cards/QuickLinkCard";

export default function QuickLinks() {
  const quickLinks = [
    "Free Expert Guidance",
    "Connected Startup Community",
    "Access to Real Audiences",
    "Cross-Domain Collaboration",
    "100% Transparent Pricing",
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-8">
          {quickLinks.map((title) => (
            <QuickLinkCard key={title} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}