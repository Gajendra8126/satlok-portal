import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { CircleAlert } from "lucide-react";

export default function LoginForm() {
  const navigate = useNavigate();

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

          {/* Subtitle */}
          <p className="mt-3 text-center text-[15px] text-[#4B5563]">
            Get the most benefits from our pool of possible clients for you
          </p>

          {/* Form */}
          <div className="mt-8">

            <input
              type="text"
              placeholder="Email or Phone"
              className="w-full h-9 rounded-md border border-[#E5E7EB] px-4 text-sm outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="mt-2 w-full h-9 rounded-md border border-[#E5E7EB] px-4 text-sm outline-none"
            />

            <div className="mt-2 text-[10px] leading-4 text-[#6B7280]">
              <p>
                People who use our service may have uploaded your contact
                details and information to Instagram.
                <span className="text-blue-500 cursor-pointer">
                  {" "}Learn More
                </span>
              </p>

              <p className="mt-1">
                By signing up, you agree to our
                <span className="underline cursor-pointer"> Terms</span>,
                <span className="underline cursor-pointer">
                  {" "}Privacy Policy
                </span>{" "}
                and
                <span className="underline cursor-pointer">
                  {" "}Cookies Policy
                </span>.
              </p>
            </div>

            <button
              onClick={() => navigate("/side-selection")}
              className="mt-5 w-full h-10 rounded-md bg-[#081B49] text-white"
            >
              Log in
            </button>

            <button className="mt-4 w-full h-10 rounded-md bg-[#081B49] text-white">
              Sign up
            </button>

            <div className="mt-2 flex justify-end">
              <button className="text-[12px] text-[#081B49]">
                Forgot Password?
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden w-full">

        {/* Heading */}
        <p className=" text-center text-[13px] ">
          Sign Up to explore the tools and
          <br />
          resources of the portal
        </p>

        {/* Form */}
        <div className="mt-6">

          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full h-8 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="mt-3 w-full h-8 rounded-lg border border-[#E5E7EB] px-4 text-xs outline-none"
          />

          {/* Naam Diksha ID */}
          <div className="relative mt-3">

            <input
              type="text"
              placeholder="Enter Naam Diksha ID"
              className="w-full h-8 rounded-lg border border-[#E5E7EB] px-4 pr-10 text-xs outline-none"
            />

            <CircleAlert
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B7B7B]"
            />

          </div>

          <div className="mt-1 flex justify-end">
            <button className="text-[10px] text-[#081B49]">
              Generate new ID?
            </button>
          </div>

          {/* Terms */}
          <div className="mt-2 text-[8px] leading-4 text-[#7B7B7B]">

            <p>
              Secure access to your account. All data and activity are
              <br></br>
              protected.
              <span className="text-blue-500">
                {" "}Learn More
              </span>
            </p>

            <p className="mt-1">
              By signing up, you agree to our
              <span className="underline"> Terms</span>,
              <span className="underline"> Privacy Policy</span>
              {" "}and
              <br></br>
              <span className="underline"> Cookies Policy</span>.
            </p>

          </div>

          {/* Buttons */}

          <button
            onClick={() => navigate("/side-selection")}
            className="mt-3 w-full h-8 rounded-md bg-[#081B49] text-[10px] text-white"
          >
            Log in
          </button>

          <button className="mt-3 w-full h-8 rounded-md bg-[#081B49] text-[10px] text-white">
            Sign up
          </button>

          <div className="mt-2 mr-3 flex justify-end">
            <button className="text-[12px] text-[#081B49]">
              Forgot Password?
            </button>
          </div>

        </div>

      </div>
    </>
  );
}