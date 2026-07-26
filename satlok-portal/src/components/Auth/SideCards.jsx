import { useState } from "react";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/logo.png";

const cards = [
  {
    id: 1,
    title: "Naam Diksha",
    description:
      "Start exploring, connect with others, get listed, build your portfolio and go live",
  },
  {
    id: 2,
    title: "Team",
    description:
      "Start exploring, connect with others, get listed, build your portfolio and go live",
  },
  {
    id: 3,
    title: "Ramaini(Marriage)",
    description:
      "Start exploring, connect with others, get listed, build your portfolio and go live",
  },
];

export default function SideCards() {
  const [selected, setSelected] = useState("Ramaini(Marriage)");

  return (
    <>
      {/* ========================= DESKTOP ========================= */}

      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-5 pt-8">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          {/* Subtitle */}
          <p className="mt-3 text-center text-[13px] text-[#4B5563]">
            Get the most benefits from our pool of possible clients for you
          </p>

          {/* Heading */}
          <div className="flex justify-center mt-7">
            <div className="border border-[#081B49] rounded-md px-10 py-1">
              <h2 className="text-[20px] font-medium text-[#4A4A4A]">
                Which side are you on?
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-3 gap-3 ">
            {cards.map((card) => (
              <div
                key={card.id}
                className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-[inset_0px_0px_12px_0px_#A1906EBF]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black"></div>

                  <h3 className="text-[14px] font-semibold text-[#222]">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-4 text-[10px]  text-[#555] min-h-[80px]">
                  {card.description}
                </p>

                <button className=" ml-5 flex h-8 items-center justify-center gap-2 rounded-lg border border-gray-300 px-2 text-[10px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.75)] hover:bg-[#081B49] hover:text-white transition">
                  Get Started
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================= MOBILE ========================= */}

      <div className="lg:hidden w-full">

        {/* Subtitle */}
        <p className="mt-4 text-center text-[13px]">
          Get the most benefits from the portal
          <br />
          and onboard on the relevant one
        </p>

        {/* Heading */}
        <div className="mt-6">
          <div className="h-[38px] rounded-lg border border-[#081B49] flex items-center justify-center">
            <span className="text-[15px] font-medium text-[#4A4A4A]">
              Which side are you on?
            </span>
          </div>
        </div>

        {/* Radio Options */}
        <div className="mt-8 space-y-2">
          {cards.map((card) => (
            <label
              key={card.id}
              className="flex h-10 cursor-pointer items-center rounded-xl border border-[#E5E7EB] bg-white px-4 shadow-[inset_0px_0px_12px_0px_#A1906EBF]"
            >
              <input
                type="radio"
                name="side"
                value={card.title}
                checked={selected === card.title}
                onChange={() => setSelected(card.title)}
                className="h-5 w-5 accent-[#081B49]"
              />

              <span className="ml-3 text-[13px] font-medium text-[#222]">
                {card.title}
              </span>
            </label>
          ))}
        </div>

        {/* Continue Button */}
        <button
          className="mt-17 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
        >
          Continue
        </button>

      </div>
    </>
  );
}