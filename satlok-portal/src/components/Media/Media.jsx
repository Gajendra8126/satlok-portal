import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    title: "Satsang & Spiritual Discourses",
    category: "Video Satsang",
  },
  {
    id: 2,
    title: "Guided Meditation & Breathing",
    category: "Meditation",
  },
  {
    id: 3,
    title: "Understanding Supreme Truth",
    category: "Wisdom Series",
  },
  {
    id: 4,
    title: "Life Changing Experiences",
    category: "Documentary",
  },
  {
    id: 5,
    title: "Satsang & Spiritual Discourses",
    category: "Video Satsang",
  },
  {
    id: 6,
    title: "Guided Meditation & Breathing",
    category: "Meditation",
  },
  {
    id: 7,
    title: "Understanding Supreme Truth",
    category: "Wisdom Series",
  },
  {
    id: 8,
    title: "Life Changing Experiences",
    category: "Documentary",
  },
];

export default function Media() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const cardStyle =
    "bg-white rounded-3xl border border-gray-300 shadow-lg overflow-hidden group cursor-pointer";

  // Convert vertical mouse wheel scroll to horizontal scroll ONLY when hovering over the cards container
  useEffect(() => {
    const containerEl = scrollRef.current;
    if (!containerEl) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerEl;
      const maxScroll = scrollWidth - clientWidth;

      // Scrolling DOWN (deltaY > 0): scroll right if not at the end
      if (e.deltaY > 0 && scrollLeft < maxScroll - 5) {
        e.preventDefault();
        containerEl.scrollBy({ left: e.deltaY * 1.2, behavior: "smooth" });
      }
      // Scrolling UP (deltaY < 0): scroll left if not at the start
      else if (e.deltaY < 0 && scrollLeft > 5) {
        e.preventDefault();
        containerEl.scrollBy({ left: e.deltaY * 1.2, behavior: "smooth" });
      }
    };

    containerEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => containerEl.removeEventListener("wheel", handleWheel);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerLeft = container.getBoundingClientRect().left;
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, i) => {
        const childLeft = child.getBoundingClientRect().left;
        const distance = Math.abs(childLeft - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  return (
    <section className="w-full py-4 md:py-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[24px] md:text-4xl font-semibold text-[#111827] ml-7 mb-5 md:mb-10"
        >
          Media
        </motion.h2>
        {/* ================= MOBILE ================= */}

        <div className="md:hidden space-y-5">
          
          {mediaItems.slice(0,3).map((item)=>(
            <div
              key={item.id}
              className="bg-white h-[240px] shadow-[0px_0px_12px_0px_#000000BF] rounded-[20px] border border-[#D8D8D8] shadow-lg p-4 flex items-center justify-between"
            >

              {/* Left */}
              <div className="flex-1 pr-3">

                <h3 className="text-[14px] leading-5 font-medium text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[11px] text-gray-500">
                  {item.category}
                </p>

              </div>

              {/* Right */}
              <div className="flex-shrink-0">

                <div className="w-28 h-28 rounded-full bg-white border border-[#D8D8D8] shadow-lg flex items-center justify-center">

                  <div className="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center">

                    <Play
                      size={18}
                      fill="currentColor"
                      className="ml-1"
                    />

                  </div>

                </div>

              </div>

            </div>
          ))}

          <div className="flex justify-center pt-2">

            <button className="border border-[#002C3E] text-[#002C3E] px-8 py-3 rounded-md text-sm">
              View All
            </button>

          </div>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
        {/* Cards row - smooth horizontal scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-nowrap gap-4 md:gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide py-2 pb-4 -mr-4 md:-mr-6 pr-4 md:pr-6"
        >
          {mediaItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[calc(25%-15px)] flex flex-col justify-between p-6 relative ${cardStyle}`}
              style={{ aspectRatio: "4 / 3" }}
            >
              {/* Category tag */}
              <div className="z-10">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Centered Play button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:border-[#002C3E] group-hover:bg-white transition-all shadow-md">
                  <Play
                    size={22}
                    className="text-[#111827] ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Title at bottom */}
              <div className="z-10 mt-auto">
                <h3 className="text-sm md:text-base font-semibold text-[#111827] line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {mediaItems.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeIndex === i
                  ? "bg-[#002C3E]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
