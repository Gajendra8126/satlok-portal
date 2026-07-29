import { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function PaymentVerificationForm() {
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

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

          {/* Heading */}
          <p className="mt-12 text-center text-[13px] font-medium text-[#081B49]">
            Confirm the payment by adding transaction detail
          </p>

          {/* Input */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Enter Yono / PhonePe ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="h-[40px] w-full rounded border border-[#D9DCE4] px-3 text-[12px] outline-none focus:border-[#081B49]"
            />
          </div>

          {/* Generate Link */}
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              className="text-[11px] text-[#081B49] hover:underline"
            >
              Generate new ID?
            </button>
          </div>

          <div className="flex-1" />

          {/* Button */}
          <button
            type="button"
            onClick={() => navigate("/request-submitted")}
            className="mt-3 h-10 rounded-md bg-[#081B49] text-white hover:bg-[#10285d]"
            >
            Continue
          </button>

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden w-full">

        {/* Heading */}
        <p className="mt-4 text-center text-[13px] font-medium text-[#081B49]">
          Confirm the payment by adding transaction detail
        </p>

        {/* Input */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Enter Yono / PhonePe ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="h-8 w-full rounded-lg border border-[#D9DCE4] px-4 text-[13px] outline-none focus:border-[#081B49]"
          />
        </div>

        {/* Generate Link */}
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            className="text-[10px] text-[#081B49]"
          >
            Generate new ID?
          </button>
        </div>

        {/* Continue */}
        <button
            type="button"
            onClick={() => navigate("/request-submitted")}
            className="mt-55 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
            >
            Continue
        </button>

      </div>
    </>
  );
}