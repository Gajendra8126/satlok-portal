import logo from "../../assets/logo.png";
import { ChevronDown, X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Footer() {
  const linkColumns = [
    {
      title: "Auxiliaries",
      links: ["Events", "Services", "Naam Diksha", "Social Impact"],
    },
    {
      title: "Wisdom",
      links: ["Books", "Quotes", "Media", "Articles"],
    },
    {
      title: "Resources",
      links: [
        "About Us",
        "Contact Us",
        "Ashram/Foundation",
        "Satguru KabirDev",
      ],
    },
    {
      title: "Policies",
      links: [
        "Term & Conditions",
        "Privacy Policy",
        "Cookie Policy",
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      


      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6 py-10">

        {/* Logo */}
        <img
          src={logo}
          alt="Satlok Foundation"
          className="h-8 w-auto ml-5 mb-10"
        />

        {/* Buttons */}
        <div className="flex gap-4 ">
          <button className="w-25 h-8 rounded-lg bg-[#A4AAB8] text-white ">
            Sign in
          </button>

          <button className="w-25 h-8 rounded-lg bg-[#001A4D] text-white  ">
            Sign up
          </button>
        </div>

        {/* Menu */}
        <div className="mt-12 space-y-3">

          {linkColumns.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-[16px] font-medium text-[#001032]">
                {item.title}
              </span>

              <ChevronDown
                size={24}
                className="text-[#24365A]"
              />
            </button>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-b border-gray-300 py-2 flex items-center justify-between">

          <p className="text-[7px] text-[#4A5568] leading-5">
            Copyrights 2025 All Rights Reserved.
            
            Satlok Foundation Pvt. Ltd.
          </p>

          <div className="flex gap-1">
            <button className="w-5 h-5 border rounded-md flex items-center justify-center">
              <FaLinkedinIn size={18} />
            </button>

            <button className="w-5 h-5 flex items-center justify-center">
              <X size={24} />
            </button>
          </div>

        </div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

          <div className="flex justify-between gap-12">

            {/* Left */}
            <div >
              <img
                src={logo}
                alt="Satlok Foundation"
                className="h-15 w-auto mb-10 ml-2"
              />

              <div className="flex gap-3 ">
                <button className="border rounded-lg px-5 py-2">
                  Sign in
                </button>

                <button className="bg-[#002C3E] text-white rounded-lg px-5 py-2">
                  Sign up
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-4 gap-10">

              {linkColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-semibold mb-3">
                    {col.title}
                  </h4>

                  <ul className="space-y-2">

                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-[#002C3E]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Bottom */}
        <div className="mt-12 border-t border-b border-gray-300 py-4 flex items-center justify-between">

          <p className="text-[11px] text-[#4A5568] leading-5">
            Copyrights 2025 All Rights Reserved. Satlok Foundation Pvt. Ltd.
            
            
          </p>

          <div className="flex gap-3">
            <button className="w-5 h-5 border rounded-md flex items-center justify-center">
              <FaLinkedinIn size={18} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center">
              <X size={24} />
            </button>
          </div>

        </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6  md:pt-20">

      <div className="max-w-6xl mx-auto pb-20">

        <h4 className="text-[13px] md:text-[15px] font-semibold text-[#1F2937] mb-2">
          Disclaimer:
        </h4>

        <p className="text-[11px] md:text-[13px] leading-5 md:leading-6 text-[#5B6472]">
          The information contained herein is provided for informational and
          discussion purposes only and is not intended to be a recommendation
          for any investment, service, product, or other advice of any kind.
          Any investment opportunities and/or products or services shown here
          will only be completed pursuant to formal offering materials,
          a letter of intent, and/or any other agreements determined by
          Satlok Foundation containing full details regarding risk,
          minimum investment, fees and expenses of such transaction.
        </p>

        <p className="mt-5 text-[11px] md:text-[13px] leading-5 md:leading-6 text-[#5B6472]">
          Quotes included in these materials related to Satlok Foundation's
          services should not be construed in any way as an endorsement of
          any advice, analysis, or other service rendered to its clients.
        </p>

        <p className="mt-5 text-[11px] md:text-[13px] leading-5 md:leading-6 text-[#5B6472]">
          * Assets on platform refers to the amount of money being deployed
          through our services. This does not refer to any amount of money
          being deployed with or managed by Satlok Foundation.
        </p>

      </div>

      
    </div>

    </footer>
  );
}
