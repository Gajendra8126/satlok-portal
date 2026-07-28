import { useState } from "react";
import logo from "../../assets/logo.png";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    title: "Design",
    color: "bg-white border border-[#B8B5FF]",
  },
  {
    title: "Development",
    color: "bg-black",
  },
  {
    title: "Marketing",
    color: "bg-black",
  },
  {
    title: "HR",
    color: "bg-[#E5E5E5] rounded-full",
  },
  {
    title: "Legal",
    color: "bg-black",
  },
  {
    title: "Finance",
    color: "bg-black",
  },
];

export default function DepartmentSelectionForm() {
  const [selected, setSelected] = useState("Design");

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-4 pt-8">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          <p className="mt-3 text-center text-[13px] text-[#081B49]">
            Get the most benefits from our pool of possible clients for you
          </p>

          {/* Cards */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {departments.map((item) => (
              <div
                key={item.title}
                onClick={() => setSelected(item.title)}
                className={`cursor-pointer rounded-lg border p-3 shadow-[inset_0px_0px_12px_0px_#A1906EBF] transition ${
                  selected === item.title
                    ? "border-[#6B5BFF] bg-[#ECEBFF]"
                    : "border-[#E5E7EB] bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-4 w-4 ${
                      item.title === "HR"
                        ? "rounded-full bg-[#D9D9D9]"
                        : item.title === "Design"
                        ? "border border-[#999] bg-white"
                        : "bg-black"
                    }`}
                  />

                  <h3 className="text-[11px] font-medium">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 min-h-[60px] text-[9px] leading-4 text-[#555]">
                  Start exploring, connect with others, get listed,
                  build your portfolio and go live
                </p>

                <div className="mt-4 flex justify-end">
                  <button className="flex h-7 items-center gap-1 rounded-md border border-gray-300 bg-white px-2 text-[9px] shadow">
                    Get Started
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden w-full flex flex-col items-center bg-white ">
        
        

        {/* Main Instruction Text */}
        <p className="text-center text-[13px] leading-snug text-[#081B49] font-medium max-w-[260px] mb-5">
          Get onboarded by choosing the relevant options below
        </p>

        {/* 2-Column Selection Grid */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {departments.map((item) => {
            const isSelected = selected === item.title;
            return (
              <label
                key={item.title}
                className={`flex flex-col  items-center justify-center h-18  cursor-pointer rounded-[10px] border transition-all duration-250 ease-in-out bg-white px-4 text-center shadow-[inset_0_0_12px_0_#A1906EBF] ${
                  isSelected 
                    ? "border-[#081B49] ring-2 ring-[#081B49]/10" 
                    : "border-[#E5E7EB]"
                }`}
              >
                <input
                  type="radio"
                  name="department"
                  value={item.title}
                  checked={isSelected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="sr-only" 
                />
                <span className="text-[13px] font-medium text-[#111827]">
                  {item.title}
                </span>
              </label>
            );
          })}
        </div>

        {/* Bottom Submission Action */}
        <button
          disabled={!selected}
          className="mt-13 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
        >
          Continue
        </button>

      </div>
    </>
  );
}