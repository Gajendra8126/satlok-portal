import logo from "../../assets/logo.png";

export default function RequestSubmittedCard() {
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full bg-white rounded-[10px] px-8 py-4 flex flex-col items-center">

          <img
            src={logo}
            alt="Satlok Foundation"
            className="w-[160px]"
          />

          <p className="mt-8 text-[#081B49] text-[15px]">
            We have received your request
          </p>

          <p className="mt-5 text-[#081B49] text-[15px]">
            We are reviewing your details.
          </p>

          <p className="mt-1 text-[#081B49] text-[15px]">
            Please wait for 24 hours until it gets approved
          </p>

          {/* Success Icon */}
          <div className="mt-12 w-[135px] h-[135px] rounded-full border border-[#A7AFC2] flex items-center justify-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A7A7A7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <button className="mt-10 w-full h-10 rounded-md bg-[#081B49] text-white text-sm">
            Back to login
          </button>
          
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden w-full flex flex-col items-center">

        

        <p className="mt-10 text-center text-[#081B49] text-[15px]">
          We have received your request
        </p>

        <p className="mt-4 text-center text-[#081B49] text-[15px]">
          We are reviewing your details.
        </p>

        <p className=" text-center text-[#081B49] text-[15px] ">
          Please wait for 24 hours until it gets approved
        </p>

        <div className="mt-8 w-[90px] h-[90px] rounded-full border border-[#A7AFC2] flex items-center justify-center">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A7A7A7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <button className="mt-23 w-full h-8  rounded-lg bg-[#081B49] text-white text-[10px]">
          Back to login
        </button>

      </div>
    </>
  );
}