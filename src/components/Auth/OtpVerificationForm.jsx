import { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function OtpVerificationForm() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const renderOtpBoxes = (mobile = false) => (
    <div className={`mt-10 flex justify-center ${mobile ? "gap-3" : "gap-3"}`}>
      {otp.map((value, index) => (
        <div key={index} className="relative">
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`${
              mobile ? "w-12 h-12" : "w-10 h-10"
            } rounded-[10px] border-1 border-[#D3D8E3] bg-white text-center text-[18px] font-medium text-[#081B49] outline-none focus:border-[#081B49]`}
          />

          {!value && (
            <span className="absolute left-1/2 bottom-[8px] -translate-x-1/2 w-[16px] h-[1px] rounded-full bg-[#D9DCE4]" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-8 py-4 flex flex-col">

          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          <p className="mt-12 text-center text-[14px] text-[#081B49]">
            Enter the five digit code received in the text or email
          </p>

          {renderOtpBoxes()}

          <div className="flex-1" />

          <button
            type="button"
            onClick={() => {
            alert("clicked");
            }}
            className="w-full h-10 rounded-md bg-[#081B49] text-white hover:bg-[#10285d]"
            >
            Continue
          </button>

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden flex flex-col">

        

        <p className="mt-10 text-center text-[15px]  text-[#081B49]">
          Enter the five digit code received in the text or email
        </p>

        {renderOtpBoxes(true)}

        <button
            type="button"
            onClick={() => navigate("/reset-password")}
            className="mt-47 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
            >
            Continue
        </button>

      </div>
    </>
  );
}