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
    <section className="w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-[#111827] mb-10"
        >
          Media
        </motion.h2>

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
    </section>
  );
}
