import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-8 py-4 flex flex-col">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-[160px]"
            />
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-center text-[13px] text-[#4B5563]">
            Get the most benefits from our pool of possible clients for you
          </p>

          {/* Form */}
          <div className="mt-5 space-y-2">

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="h-9 rounded border border-[#E5E7EB] px-4 text-sm outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="h-9 rounded border border-[#E5E7EB] px-4 text-sm outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full h-9 rounded border border-[#E5E7EB] px-4 text-sm outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full h-9 rounded border border-[#E5E7EB] px-4 text-sm outline-none"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full h-9 rounded border border-[#E5E7EB] px-4 text-sm outline-none"
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full h-9 rounded border border-[#E5E7EB] px-4 text-sm outline-none"
            />

            <select className="w-full h-11 rounded border border-[#E5E7EB] px-4 text-sm outline-none text-gray-500">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

          </div>

          <button
            onClick={() => navigate("/user-details")}
            className="mt-3 h-10 rounded-md bg-[#081B49] text-white hover:bg-[#10285d]"
          >
            Continue
          </button>

          

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden w-full">

        <h2 className=" text-center text-[12px] ">
          Get the most benefits from our pool of
          <br />
          possible clients for you
        </h2>

        <div className="mt-3 space-y-1.5">

          <input
            type="text"
            placeholder="First Name"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <select className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none text-gray-500">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

        </div>

        <button
          onClick={() => navigate("/user-details")}
          className="mt-6 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
        >
          Continue
        </button>

      </div>
    </>
  );
}