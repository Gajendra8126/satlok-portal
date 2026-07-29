import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function ApplicationForm() {
    const navigate = useNavigate();
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

          <p className="mt-4 text-center text-[13px] text-[#081B49] font-medium">
            Get the most benefits from our pool of possible clients for you
          </p>

          <form className="mt-5 space-y-2">
            <input
              type="text"
              placeholder="Occupation"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="State"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="City/District"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 outline-none"
            />

            <select className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 outline-none text-gray-500">
              <option>Apply for</option>
            </select>

            <input
              type="text"
              placeholder="Referral ID(optional)"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 outline-none"
            />

            <button
                type="button"
                onClick={() => navigate("/payment-verification")}
                className="mt-4 h-9 w-full rounded-md bg-[#081B49] text-white"
                >
                Continue
            </button>
          </form>
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden w-full">
        

        <p className=" text-center text-[12px]">
          Get the most benefits from our pool of 
          <br />
          possible clients for you
        </p>

        <form className="mt-3 space-y-1.5">
          <input
            type="text"
            placeholder="Occupation"
            className="w-full h-9 rounded-[8px] border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="text"
            placeholder="State"
            className="w-full h-9 rounded-[8px] border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="text"
            placeholder="City/District"
            className="w-full h-9 rounded-[8px] border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full h-9 rounded-[8px] border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <select className="w-full h-9 rounded-[8px] border border-[#E5E7EB] px-4 text-xs text-gray-500 outline-none">
            <option>Apply for</option>
          </select>

          <input
            type="text"
            placeholder="Referral ID(optional)"
            className="w-full h-9 rounded-[8px] border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <button
            type="button"
            onClick={() => navigate("/payment-verification")}
            className="mt-13 w-full h-8 rounded-[8px] bg-[#081B49] text-white text-[16px] font-medium"
            >
            Continue
          </button>
        </form>
      </div>
    </>
  );
}