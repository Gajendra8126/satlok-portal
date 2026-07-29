import { useState } from "react";
import logo from "../assets/logo.png";
import { ChevronDown, X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const linkColumns = [
    {
      title: "Auxiliaries",
      links: [
        { label: "Events", path: "/event" },
        { label: "Services", path: "/services" },
        { label: "Naam Diksha", path: "#" },
        { label: "Social Impact", path: "#" },
      ],
    },
    {
      title: "Wisdom",
      links: [
        { label: "Books", path: "#" },
        { label: "Media", path: "#" },
        { label: "Quotes", path: "#" },
        { label: "Articles", path: "#" },
        { label: "Prarthna(Beta)", path: "#" },
        { label: "Explore OTT platform\n(coming soon)", path: "#", isSub: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "About Us", path: "#" },
        { label: "Contact Us", path: "#" },
        { label: "Ashram/Foundation", path: "#" },
        { label: "Satguru KabirDev", path: "#" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Term & Conditions", path: "#" },
        { label: "Privacy Policy", path: "#" },
        { label: "Cookies Policy", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 text-[#001032]">
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-12">
        {/* ================= TOP ROW ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-start">
          {/* Brand & Auth Buttons */}
          <div className="flex flex-col items-start shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Satlok Foundation"
                className="h-10 md:h-12 w-auto object-contain mb-8"
              />
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="w-[100px] h-[38px] bg-[#949CA9] text-white rounded-[6px] text-sm font-medium hover:bg-[#838B98] transition-colors flex items-center justify-center"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/register")}
                className="w-[100px] h-[38px] bg-[#001032] text-white rounded-[6px] text-sm font-medium hover:bg-[#001c54] transition-colors flex items-center justify-center"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Navigation Links Grid (Desktop) */}
          <div className="hidden md:grid grid-cols-4 gap-2 flex-1 max-w-[800px]">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h4 className="font-bold text-[15px] text-[#001032] mb-3">
                  {col.title}
                </h4>

                <ul className="space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.path}
                        className={`text-[13px] leading-[22px] transition-colors ${
                          link.isSub
                            ? "text-gray-500 hover:text-[#001032] text-[12px] block leading-snug"
                            : "text-gray-600 hover:text-[#001032]"
                        }`}
                      >
                        {link.label.split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Navigation Links Accordion (Mobile) */}
          <div className="md:hidden w-full space-y-3 mt-4">
            {linkColumns.map((item) => {
              const isOpen = openSection === item.title;
              return (
                <div key={item.title} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleSection(item.title)}
                    className="w-full flex items-center justify-between text-left py-2"
                  >
                    <span className="text-[14px] font-bold text-[#001032]">
                      {item.title}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`text-[#001032] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="mt-2 space-y-2 pl-2 pb-2">
                      {item.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.path}
                            className="text-[13px] text-gray-600 hover:text-[#001032]"
                          >
                            {link.label.replace("\n", " ")}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MIDDLE ROW (COPYRIGHT & SOCIAL) ================= */}
        <div className="mt-12 pt-4 pb-4 border-t border-b border-gray-200 flex flex-row items-center justify-between gap-4">
          <p className="text-[12px] md:text-[13px] text-gray-500 font-normal leading-relaxed">
            Copyrights 2025 All Rights Reserved. Satlok Foundation Pvt. Ltd.
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-6 h-6 border border-gray-400 rounded-[4px] flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              <FaLinkedinIn size={13} />
            </a>

            <a
              href="#"
              aria-label="X (Twitter)"
              className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
            >
              <X size={16} />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM ROW (DISCLAIMER) ================= */}
        <div className="mt-6 text-left">
          <h4 className="text-[13px] md:text-[15px] font-semibold text-[#1F2937] mb-2">
            Disclaimer:
          </h4>
          <p className="text-[11px] leading-5 md:leading-6 text-[#5B6472]">
            The information contained herein is provided for informational and
            discussion purposes only and is not intended to be a recommendation
            for any investment, service, product, or other advice of any kind.
            Any investment opportunities and/or products or services shown here
            will only be completed pursuant to formal offering materials,
            a letter of intent, and/or any other agreements determined by
            Satlok Foundation containing full details regarding risk,
            minimum investment, fees and expenses of such transaction.
          </p>
          <p className="mt-5 text-[11px] leading-5 md:leading-6 text-[#5B6472]">
            Quotes included in these materials related to Satlok Foundation's
            services should not be construed in any way as an endorsement of
            any advice, analysis, or other service rendered to its clients.
          </p>
          <p className="mt-5 text-[11px] leading-5 md:leading-6 text-[#5B6472]">
            * Assets on platform refers to the amount of money being deployed
            through our services. This does not refer to any amount of money
            being deployed with or managed by Satlok Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}
