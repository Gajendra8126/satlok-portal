import { motion } from "framer-motion";

export default function OttPlatform() {
  const cardStyle =
    "bg-white rounded-3xl border border-gray-300 shadow-lg";

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
          OTT Platform{" "}
          <span className="text-gray-400 font-normal">(coming soon)</span>
        </motion.h2>

        {/* Cards row - extends to right edge of screen */}
        <div className="flex flex-nowrap gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mr-4 md:-mr-6 pr-4 md:pr-6">
          {[1, 2, 3, 4].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[calc(25%-15px)] snap-start ${cardStyle}`}
              style={{ aspectRatio: "4 / 3" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
