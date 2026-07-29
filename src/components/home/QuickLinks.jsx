import QuickLinkCard from "../cards/QuickLinkCard";

export default function QuickLinks() {
  const quickLinks = [
    "Free Expert Guidance",
    "Access to Real Audiences",
    "Connected Startup Community",
    "Cross-Domain Collaboration",
    "100% Transparent Pricing",
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-5 md:gap-x-12">
          {quickLinks.map((title) => (
            <QuickLinkCard key={title} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}