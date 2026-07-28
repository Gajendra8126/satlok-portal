import { ArrowRight } from "lucide-react";
import logo from "../../assets/logo.png";
import { useState } from "react";

const users = [
  {
    id: 1,
    title: "New User",
    description:
      "Start exploring, connect with others, get listed, build your portfolio and go live",
  },
  {
    id: 2,
    title: "Existing User",
    description:
      "Start exploring, connect with others, get listed, build your portfolio and go live",
  },
];

export default function UserTypeCards() {
  const [selectedUser, setSelectedUser] = useState("new");

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block w-[550px] h-[500px] rounded-[20px] bg-[#081B49] p-[13px]">
        <div className="w-full h-full rounded-[8px] bg-white px-10 pt-10 flex flex-col">

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

          {/* Cards */}
          <div className="flex justify-center gap-6 mt-10">
            {users.map((item) => (
              <div
                key={item.id}
                className="w-[191px] rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-[inset_0px_0px_12px_0px_#A1906EBF]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black"></div>

                  <h3 className="text-[13px] font-semibold">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 text-[11px] leading-5 text-[#555] min-h-[82px]">
                  {item.description}
                </p>

                <button className="mt-2 ml-auto flex h-7 items-center justify-center gap-1 rounded-lg border border-[#D6D6D6] px-3 text-[11px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.75)] hover:bg-[#081B49] hover:text-white">
                  Get Started
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

          <button className="mt-8 h-10 w-full rounded-md bg-[#081B49] text-white">
            Continue
          </button>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden w-full">

        <p className=" mt-5 text-center text-[13px]">
          Get the most benefits from the portal
          <br />
          and onboard on the relevant one
        </p>

       

        {/* Radio Options */}
        <div className="mt-10 space-y-3">

          <label className="flex h-10 cursor-pointer items-center rounded-xl border border-[#E8E3D6] bg-white px-4 shadow-[inset_0px_0px_10px_0px_#A1906EBF]">
            <input
              type="radio"
              name="user"
              value="new"
              checked={selectedUser === "new"}
              onChange={() => setSelectedUser("new")}
              className="h-5 w-5"
            />

            <span className="ml-4 text-[13px] text-[#202020]">
              New User
            </span>
          </label>

          <label className="flex h-10 cursor-pointer items-center rounded-xl border border-[#E8E3D6] bg-white px-4 shadow-[inset_0px_0px_10px_0px_#A1906EBF]">
            <input
              type="radio"
              name="user"
              value="existing"
              checked={selectedUser === "existing"}
              onChange={() => setSelectedUser("existing")}
              className="h-5 w-5"
            />

            <span className="ml-4 text-[13px] text-[#202020]">
              Existing User
            </span>
          </label>

        </div>

        {/* Continue */}
        <button
          className="mt-42 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
        >
          Continue
        </button>

      </div>
    </>
  );
}