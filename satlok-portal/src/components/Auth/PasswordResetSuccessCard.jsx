import logo from "../../assets/logo.png";

export default function PasswordResetSuccessCard() {
  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-8 py-6 flex flex-col">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          {/* Message */}
          <p className="mt-12 text-center text-[14px] text-[#081B49]">
            Password has been reset successfully!
          </p>

          {/* Success Icon */}
          <div className="mt-10 flex justify-center">
            <div className="w-[135px] h-[135px] rounded-full border border-[#AAB1C4] flex items-center justify-center">

              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A9A9A9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>

            </div>
          </div>

          <div className="flex-1" />

          {/* Button */}
          <button className="w-full h-10 rounded-md bg-[#081B49] text-white hover:bg-[#10285d] transition text-sm">
            Continue
          </button>

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden">

        
        
        {/* Message */}
        <p className="mt-10 text-center text-[15px] font-medium text-[#081B49]">
          Password has been reset successfully!
        </p>

        {/* Success Icon */}
        <div className="mt-12 flex justify-center">
          <div className="w-[90px] h-[90px] rounded-full border border-[#AAB1C4] flex items-center justify-center">

            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A9A9A9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>

          </div>
        </div>

        {/* Button */}
        <button className="mt-33 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px] font-medium">
          Continue
        </button>

      </div>
    </>
  );
}