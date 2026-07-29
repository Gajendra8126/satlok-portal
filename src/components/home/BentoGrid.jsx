export default function BentoGrid() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* ================= MOBILE VIEW (PHONE) ================= */}
        <div className="grid grid-cols-2 gap-3.5 md:hidden">
          {/* Card 1 - Top Full Width */}
          <div className="col-span-2 bg-[#B3B3B3] h-[190px] rounded-[18px]"></div>

          {/* Card 2 - Left Top */}
          <div className="bg-[#B3B3B3] h-[145px] rounded-[18px]"></div>

          {/* Card 4 - Right Tall (spans 2 rows) */}
          <div className="row-span-2 bg-[#B3B3B3] rounded-[18px]"></div>

          {/* Card 3 - Left Bottom */}
          <div className="bg-[#B3B3B3] h-[145px] rounded-[18px]"></div>
        </div>

        {/* ================= DESKTOP VIEW (PC) ================= */}
        <div className="hidden md:flex flex-col gap-3.5">
          {/* Top Section (Row 1 and Row 2) */}
          <div className="flex flex-row gap-3.5">
            {/* Left Column */}
            <div className="flex flex-col gap-3.5 w-[57%]">
              {/* Card 1 - Top Left Wide */}
              <div className="bg-[#B3B3B3] h-[205px] rounded-[18px]"></div>
              {/* Card 2 - Middle Left Wide */}
              <div className="bg-[#B3B3B3] h-[135px] rounded-[18px]"></div>
            </div>
            
            {/* Right Column */}
            <div className="w-[43%]">
              {/* Card 3 - Right Tall (spans top 2 rows) */}
              <div className="bg-[#B3B3B3] h-full min-h-[354px] rounded-[18px]"></div>
            </div>
          </div>

          {/* Bottom Section (Row 3) */}
          <div className="flex flex-row gap-3.5">
            {/* Card 4 - Bottom Left 1 */}
            <div className="bg-[#B3B3B3] h-[190px] w-[15%] rounded-[18px]"></div>
            {/* Card 5 - Bottom Left 2 */}
            <div className="bg-[#B3B3B3] h-[190px] w-[15%] rounded-[18px]"></div>
            {/* Card 6 - Bottom Right Wide */}
            <div className="bg-[#B3B3B3] h-[190px] w-[70%] rounded-[18px]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
