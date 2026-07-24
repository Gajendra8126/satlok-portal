import { motion } from "framer-motion";

export default function OttPlatform() {
  const cardStyle =
    "bg-white rounded-[22px] border border-[#D9D9D9] shadow-[0_6px_16px_rgba(0,0,0,0.18)]";

  return (
    <section className="w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 px-[14%]">

              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`${cardStyle} flex-shrink-0 w-[90%] h-[160px] snap-center`}
                />
              ))}

            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-4xl font-semibold text-[#111827] mb-8 md:mb-10"
          >
            OTT Platform{" "}
            <span className="text-gray-400 font-normal text-[20px] md:text-4xl">
              (coming soon)
            </span>
          </motion.h2>
          <div className="flex flex-nowrap gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mr-6 pr-6">

            {[1, 2, 3, 4].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex-shrink-0 w-[calc(25%-15px)] ${cardStyle}`}
                style={{ aspectRatio: "4 / 3" }}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}