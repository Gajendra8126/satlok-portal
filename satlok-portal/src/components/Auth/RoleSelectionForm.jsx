import logo from "../../assets/logo.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const roles = [

  {
    title: "Internal",
    description:
      "Help manage, connect with others, get hired, build your portfolio and grow.",
  },
  {
    title: "Volunteer",
    description:
      "Help manage, connect with others, get hired, build your portfolio and grow.",
  },
  {
    title: "Coordinator",
    description:
      "Store experience, connect with others, get hired, build your portfolio and grow.",
  },
];

export default function RoleSelectionForm() {
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

          {/* Heading */}
          <p className="mt-3 text-center text-[13px] text-[#081B49]">
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
            {roles.map((role) => (
                <div
                key={role.title}
                className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-[inset_0px_0px_12px_0px_#A1906EBF]"
                >
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-black"></div>
           
                    <h3 className="text-[14px] font-semibold text-[#222]">
                    {role.title}
                    </h3>
                </div>
           
                <p className="mt-4 text-[10px]  text-[#555] min-h-[80px]">
                    {role.description}
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
        {roles.map((role) => (
          <label
            key={role.title}
            htmlFor={role.title}
            className="flex h-10 cursor-pointer items-center rounded-xl border border-[#E5E7EB] bg-white px-4 shadow-[inset_0px_0px_12px_0px_#A1906EBF]"
          >
            <input
              id={role.title}
              type="radio"
              name="side"
              value={role.title}
              checked={selected === role.title}
              onChange={(e) => setSelected(e.target.value)}
              className="h-5 w-5 accent-[#081B49]"
            />

            <span className="ml-3 text-[13px] font-medium text-[#222]">
              {role.title}
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