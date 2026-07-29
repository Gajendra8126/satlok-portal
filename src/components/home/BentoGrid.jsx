export default function BentoGrid() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="flex flex-col gap-3">
          
          {/* Top Section (Row 1 and Row 2) */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Left Column (Row 1 & 2) */}
            <div className="flex flex-col gap-3 md:w-[57%]">
              {/* Rect 7636 */}
              <div className="bg-[#BCBCBC] h-[205px] rounded-[20px]"></div>
              {/* Rect 7637 */}
              <div className="bg-[#A6A6A6]/80 h-[135px] rounded-[20px]"></div>
            </div>
            
            {/* Right Column (Row 1 & 2 spanning) */}
            <div className="md:w-[43%]">
              {/* Rect 7640 */}
              <div className="bg-[#A6A6A6]/80 h-full min-h-[352px] rounded-[20px]"></div>
            </div>
          </div>

          {/* Bottom Section (Row 3) */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Rect 7638 */}
            <div className="bg-[#A6A6A6]/80 h-[205px] md:w-[15%] rounded-[20px]"></div>
            {/* Rect 7641 */}
            <div className="bg-[#A6A6A6]/80 h-[205px] md:w-[15%] rounded-[20px]"></div>
            {/* Rect 7639 */}
            <div className="bg-[#A6A6A6]/80 h-[205px] md:w-[70%] rounded-[20px]"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
