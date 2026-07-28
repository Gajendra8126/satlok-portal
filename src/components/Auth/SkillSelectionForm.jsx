import { useState } from "react";
import logo from "../../assets/logo.png";
import { ArrowRight } from "lucide-react";

const skills = [
  {
    title: "Graphics",
    description:
      "Help designing, connect with others, get hired, build your portfolio and grow.",
  },
  {
    title: "Video Editing",
    description:
      "Help editing, connect with others, get hired, build your portfolio and grow.",
  },
  {
    title: "Shoot/Anchoring",
    description:
      "Start shooting, connect with others, get hired, build your portfolio and grow.",
  },
];

export default function SkillSelectionForm() {
  const [selected, setSelected] = useState("");

  return (
    <>
      {/* ================= Desktop ================= */}

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
          <p className="mt-3 text-center text-[13px] text-[#081B49]">
            Get the most benefits from our pool of possible clients for you
          </p>

          {/* Heading */}
          <div className="mt-7 flex justify-center">
            <div className="rounded-md border border-[#081B49] px-10 py-1">
              <h2 className="text-[20px] font-medium text-[#4A4A4A]">
                Which side are you on?
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                onClick={() => setSelected(skill.title)}
                className={`cursor-pointer rounded-lg border bg-white p-4 transition
                  ${
                    selected === skill.title
                      ? "border-[#081B49] ring-2 ring-[#081B49]"
                      : "border-[#E5E7EB]"
                  }
                  shadow-[inset_0px_0px_12px_0px_#A1906EBF]`}
              >
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-black"></div>

                  <h3 className="text-[13px] font-semibold">
                    {skill.title}
                  </h3>
                </div>

                <p className="mt-4 min-h-[75px] text-[10px] text-[#555]">
                  {skill.description}
                </p>

                <button
                  type="button"
                  className="ml-5 flex h-8 items-center gap-2 rounded-lg border border-gray-300 px-2 text-[10px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.75)] hover:bg-[#081B49] hover:text-white"
                >
                  Get Started
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden w-full">

        {/* Subtitle */}
        <p className="mt-4 text-center text-[13px]">
          Get the most benefits from the portal
          <br />
          and onboard on the relevant one
        </p>

        {/* Heading */}
        <div className="mt-6">
          <div className="flex h-[38px] items-center justify-center rounded-lg border border-[#081B49]">
            <span className="text-[15px] font-medium text-[#4A4A4A]">
              Which side are you on?
            </span>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="mt-8 space-y-2">
          {skills.map((skill) => (
            <label
              key={skill.title}
              className="flex h-10 cursor-pointer items-center rounded-xl border border-[#E5E7EB] bg-white px-4 shadow-[inset_0px_0px_12px_0px_#A1906EBF]"
            >
              <input
                type="radio"
                name="skill"
                value={skill.title}
                checked={selected === skill.title}
                onChange={(e) => setSelected(e.target.value)}
                className="h-5 w-5 accent-[#081B49]"
              />

              <span className="ml-3 text-[13px] font-medium">
                {skill.title}
              </span>
            </label>
          ))}
        </div>

        {/* Continue */}
        <button
          className="mt-18 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
        >
          Continue
        </button>

      </div>
    </>
  );
}