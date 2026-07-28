

export default function SupportCausesSection() {
  const bodyTextSegment = "The process felt human, even though it's AI-driven. The brief understanding was spot-on.";
  
  // Constructing the repeated text block perfectly matching the image
  const fullBodyText = `${bodyTextSegment} ${bodyTextSegment} ${bodyTextSegment} The process felt human, even though it's AI-driven. The brief understanding was spot-on ${bodyTextSegment}`;

  return (
    <section className="bg-white min-h-screen p-6 md:p-12 font-sans flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-[#0f172a] mb-6 tracking-tight">
          Support Causes
        </h2>

        {/* Main Card */}
        <div className="bg-white rounded-xl border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col gap-6">
          
          {/* Gray Image Placeholder */}
          <div className="w-full aspect-[2.3/1] bg-[#c4c4c4] rounded-lg"></div>

          {/* Description Text */}
          <p className="text-[#334155] text-sm md:text-base leading-relaxed tracking-normal">
            {fullBodyText}
          </p>

          {/* Footer Area inside Card */}
          <div className="flex items-end justify-between mt-4 pt-2">
            
            {/* Left Subtext */}
            <div className="text-xs md:text-sm text-[#475569] leading-tight max-w-[150px]">
              The process felt human, even
            </div>

            {/* Right Action Button */}
            <button className="bg-[#03112b] hover:bg-[#091b3d] text-white text-xs md:text-sm font-medium py-2.5 px-6 rounded transition-colors duration-200 shadow-sm">
              Get Started
            </button>
            
          </div>

        </div>

      </div>
    </section>
  );
}