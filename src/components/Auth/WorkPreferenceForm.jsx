import logo from "../../assets/logo.png";

export default function WorkPreferenceForm() {
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="hidden lg:block w-[550px] h-[500px] rounded-[10px] bg-[#081B49] p-[13px] shadow-[0px_0px_12px_0px_#00000040]">
        <div className="w-full h-full rounded-[10px] bg-white px-10 pt-8">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Satlok Foundation"
              className="w-[160px]"
            />
          </div>

          {/* Heading */}
          <p className="mt-4 text-center text-[13px] text-[#081B49]">
            Get the most benefits from our pool of possible clients for you
          </p>

          <form className="mt-5 space-y-2">

            <select className="w-full h-9 rounded border border-[#E5E7EB] px-3 text-sm text-gray-500 outline-none">
              <option>Experience</option>
            </select>

            <select className="w-full h-9 rounded border border-[#E5E7EB] px-3 text-sm text-gray-500 outline-none">
              <option>Work Preference</option>
            </select>

            <div className="grid grid-cols-2 gap-3">
              <select className="h-9 rounded border border-[#E5E7EB] px-3 text-sm text-gray-500 outline-none">
                <option>Work Hours</option>
              </select>

              <select className="h-9 rounded border border-[#E5E7EB] px-3 text-sm text-gray-500 outline-none">
                <option>Work Type</option>
              </select>
            </div>

            <select className="w-full h-9 rounded border border-[#E5E7EB] px-3 text-sm text-gray-500 outline-none">
              <option>Are you an existing team member?</option>
            </select>

            <input
              type="text"
              placeholder="Reason for joining the portal"
              className="w-full h-9 rounded border border-[#E5E7EB] px-3 text-sm outline-none"
            />

            <input
              type="text"
              placeholder="Referral ID"
              className="w-full h-9 rounded border border-[#E5E7EB] px-3 text-sm outline-none"
            />

            <button
              className="mt-3 w-full h-10 rounded bg-[#081B49] text-white text-sm font-medium"
            >
              Continue
            </button>

          </form>
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden w-full">

        

        {/* Heading */}
        <p className=" text-center text-[12px] ">
          Get the most benefits from our pool of 
          <br />
          possible clients for you
        </p>

        <form className="mt-3 space-y-1.5">

          <select className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs text-gray-500 outline-none">
            <option>Experience</option>
          </select>

          <select className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs text-gray-500 outline-none">
            <option>Work Preference</option>
          </select>

          

          <select className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs text-gray-500 outline-none">
            <option>Work Hours</option>
          </select>

          <select className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs text-gray-500 outline-none">
            <option>Work Type</option>
          </select>

          

          <select className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs text-gray-500 outline-none">
            <option>Are you an existing team member?</option>
          </select>

          <input
            type="text"
            placeholder="Reason for joining the portal"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="text"
            placeholder="Referral ID"
            className="w-full h-9 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <button
            className="mt-5 w-full h-8 rounded-lg bg-[#081B49] text-white text-[10px]"
          >
            Continue
          </button>

        </form>

      </div>
    </>
  );
}