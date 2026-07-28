import logo from "../../assets/logo.png";

export default function ForgotPasswordForm() {
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-8 py-4 flex flex-col">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-center text-[18px] font-semibold text-[#081B49]">
            Trouble logging in?
          </h2>

          {/* Description */}
          <p className="mt-4 text-center text-[15px] leading-6 text-[#081B49]">
            Enter your email or phone and we'll send you a link or code to
            <br />
            get back into your account.
          </p>

          {/* Input */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Email or Phone"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:border-[#081B49]"
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Button */}
          <button className="mt-10 h-10 rounded-md bg-[#081B49] text-white hover:bg-[#10285d]">
            Continue
          </button>
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden w-full flex flex-col">

        
        {/* Title */}
        <h2 className="mt-8 text-center text-[18px] font-semibold text-[#081B49]">
          Trouble logging in?
        </h2>

        {/* Description */}
        <p className="mt-4 text-center text-[13px] text-[#081B49]">
          Enter your email or phone and we'll 
          <br />
          send you a link or code to get
          back into 
        
          your account.
        </p>

        {/* Input */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none focus:border-[#081B49]"
          />
        </div>

        {/* Button */}
        <button className="mt-40 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
        >
          Continue
        </button>

      </div>
    </>
  );
}