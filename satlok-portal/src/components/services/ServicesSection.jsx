import React from 'react';

// Reusable Play Button Component
const PlayButton = () => (
  <div className="bg-white rounded-full border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] aspect-square flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"/>
    </svg>
  </div>
);

export default function ServicesSection() {
  const cardShadow = "shadow-[0_4px_20px_rgba(0,0,0,0.08)]";

  return (
    <section className="bg-white p-6 md:p-16 font-sans max-w-[1100px] mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-black mb-10 tracking-tight">
        Services
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Row 1, Box 1: Top Left Square */}
        <div className={`bg-white aspect-square rounded-3xl border border-gray-100 ${cardShadow}`}></div>

        {/* Row 1, Box 2: Ramaini Pill & Play Button */}
        <div className="flex flex-col gap-6">
          <div className={`bg-white rounded-full border border-gray-100 text-center py-3 px-4 ${cardShadow}`}>
            <p className="text-[13px] font-medium text-[#1A1A1A] truncate">Ramaini(Marriage)</p>
          </div>
          <PlayButton />
        </div>

        {/* Row 1, Box 3: Annapurna Pill (Active) & Play Button */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#0D2F30] rounded-full text-center py-3 px-4 shadow-sm">
            <p className="text-[13px] font-medium text-white truncate">Annapurna</p>
          </div>
          <PlayButton />
        </div>

        {/* Row 1, Box 4: Split Pill & Play Button */}
        <div className="flex flex-col gap-6">
          <div className={`bg-white flex rounded-full border border-gray-100 text-center ${cardShadow}`}>
            <div className="w-1/2 py-3 border-r border-gray-100">
              <p className="text-[13px] font-medium text-[#1A1A1A]">Social</p>
            </div>
            <div className="w-1/2 py-3">
              <p className="text-[13px] font-medium text-[#1A1A1A]">Medical</p>
            </div>
          </div>
          <PlayButton />
        </div>

        {/* Row 2, Box 1: Large Rectangle (Spans 2 columns horizontally) */}
        <div className={`bg-white col-span-2 rounded-3xl border border-gray-100 ${cardShadow}`}></div>
        
        {/* Row 2, Box 2: Isolated Play Circle (Aligns beautifully under the grid layout) */}
        <PlayButton />

        {/* Spacer to align layout matching the asymmetric source image */}
        <div className="hidden md:block"></div>

        {/* Row 3: Bottom Large Rectangles (Each spans 2 columns) */}
        <div className={`bg-white col-span-2 aspect-[2.2/1] rounded-3xl border border-gray-100 ${cardShadow}`}></div>
        <div className={`bg-white col-span-2 aspect-[2.2/1] rounded-3xl border border-gray-100 ${cardShadow}`}></div>

      </div>

      {/* Explore All Call to Action */}
      <div className="flex justify-center mt-12">
        <button className="border border-[#1A1A1A] rounded-md px-10 py-3 text-base md:text-lg font-medium text-[#1A1A1A] hover:bg-gray-50 transition duration-200">
          Explore All
        </button>
      </div>
    </section>
  );
}