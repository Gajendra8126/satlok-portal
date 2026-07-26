import { useState } from "react";
import logo from "../../assets/logo.png";

export default function ResetPasswordForm() {
  const [logoutAll, setLogoutAll] = useState(false);

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-7 py-8 flex flex-col">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          {/* Heading */}
          <p className="mt-8 text-center text-[15px] font-medium text-[#081B49]">
            Set your new password and confirm the new password
          </p>

          {/* Form */}
          <div className="mt-10 space-y-2">

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full h-9 rounded border border-[#E5E7EB] px-4 text-xs outline-none focus:border-[#081B49]"
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full h-9 rounded border border-[#E5E7EB] px-4 text-xs outline-none focus:border-[#081B49]"
            />

          </div>

          {/* Description */}
          <p className="mt-5 text-[10px] leading-4 text-[#6B7280]">
            Password must be strong and contain uppercase (A-Z), lowercase
            letters and one special character (@,#,$,!, etc.).
          </p>

          <p className="mt-2 text-[10px] text-[#6B7280]">
            By clicking, you agree to our Terms, Privacy Policy and Cookies
            Policy.
          </p>

          {/* Checkbox */}
          <label className="mt-4 flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={logoutAll}
              onChange={(e) => setLogoutAll(e.target.checked)}
              className="h-4 w-4 accent-[#081B49]"
            />

            <span className="text-[12px] text-[#081B49]">
              Log out from all devices
            </span>
          </label>

          <div className="flex-1" />

          {/* Button */}
          
          <button className=" w-full h-10 rounded-lg bg-[#081B49] text-white"
        >
          Reset your password
        </button>
        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden">

        
        <p className="mt-8 text-center text-[15px] font-medium text-[#081B49]">
          Set your new password and confirm the new password
        </p>

        <div className="mt-10 space-y-2">

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none focus:border-[#081B49]"
          />

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none focus:border-[#081B49]"
          />

        </div>

        <p className="mt-5 text-[8px]  text-[#6B7280]">
          Password must be strong and contain uppercase (A-Z), lowercase
          letters and one special character (@,#,$,!, etc.).
        </p>

        <p className="mt-2 text-[8px] text-[#6B7280]">
          By clicking, you agree to our Terms, Privacy Policy and Cookies
          Policy.
        </p>

        <label className="mt-5 flex items-center gap-3">
          <input
            type="checkbox"
            checked={logoutAll}
            onChange={(e) => setLogoutAll(e.target.checked)}
            className="h-4 w-4 accent-[#081B49]"
          />

          <span className="text-[10px] text-[#081B49]">
            Log out from all devices
          </span>
        </label>

        <button className="mt-13 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px] font-medium">
          Reset your password
        </button>

      </div>
    </>
  );
}