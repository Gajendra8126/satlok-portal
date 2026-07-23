import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Who's behind this platform?",
    answer:
      "This platform is built and maintained by the Satlok Ashram Foundation, dedicated to spreading the true spiritual knowledge of Sant Rampal Ji Maharaj to seekers worldwide.",
  },
  {
    question: "Getting Started",
    answer:
      "Getting started is simple. Browse our knowledge library, watch media content, and when you're ready, apply for Naam Diksha to begin your spiritual journey.",
  },
  {
    question: "Eligibility",
    answer:
      "Anyone with a sincere desire to seek truth and follow the path of true worship is eligible. There are no restrictions based on caste, creed, or background.",
  },
  {
    question: "Expert Consultations",
    answer:
      "Our trained volunteers and spiritual guides are available for one-on-one consultations to help answer your questions and guide you on the right path.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-[#111827] font-medium text-sm md:text-base pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111827]">
            FAQ
          </h2>
          <p className="text-gray-400 text-lg mt-2">Trust &amp; Safety</p>
        </motion.div>

        {/* Two-column accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {/* Left column */}
          <div>
            {faqData.map((item, i) => (
              <FaqItem
                key={`left-${i}`}
                item={item}
                isOpen={activeIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column (mirrored content per reference) */}
          <div>
            {faqData.map((item, i) => (
              <FaqItem
                key={`right-${i}`}
                item={item}
                isOpen={activeIndex === i + faqData.length}
                onToggle={() => toggle(i + faqData.length)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
