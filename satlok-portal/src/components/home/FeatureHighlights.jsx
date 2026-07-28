const features = [
  "Free Spirit",
  "Committed Service",
  "Access to Direct Guidance",
  "Divine Direction",
  "100% Transparent Policy",
];

export default function FeatureHighlights() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl justify-between px-8 py-10">
        {features.map((item) => (
          <div
            key={item}
            className="flex w-44 flex-col items-center text-center"
          >
            <div className="mb-4 h-20 w-20 rounded-full border border-gray-200 bg-white shadow-md" />

            <p className="text-[15px] font-medium text-[#001032]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}