

export default function WellnessSection() {
  const textSegment = "Fostering well-being through breath, meditation & yoga programs since 1981.";
  const lastSegmentNoDot = "Fostering well-being through breath, meditation & yoga programs since 1981";

  // Configuration mapping the repetition layout of the image
  const paragraphs = [
    { count: 5, hasFinalDot: true },
    { count: 6, hasFinalDot: true },
    { count: 1, hasFinalDot: false }
  ];

  return (
    <section className="bg-[#fcfcfc] min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-4xl w-full flex flex-col gap-8 text-[#1a1a1a] text-base md:text-lg leading-relaxed tracking-normal antialiased">
        {paragraphs.map((config, index) => {
          // Construct the paragraph string dynamically
          const sentences = Array.from({ length: config.count }, (_, i) => {
            const isLast = i === config.count - 1;
            return isLast && !config.hasFinalDot ? lastSegmentNoDot : textSegment;
          });

          return (
            <p key={index}>
              {sentences.join(' ')}
            </p>
          );
        })}
      </div>
    </section>
  );
}