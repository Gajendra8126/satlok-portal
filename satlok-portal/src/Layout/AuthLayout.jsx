import logo from "../assets/logo.png";

export default function AuthLayout({ children }) {
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="hidden lg:flex min-h-screen bg-white flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-[1440px] w-full flex justify-between items-center px-25 pt-3">

            {/* Left */}
            <div className="pl-10 w-[320px]">
              <img
                src={logo}
                alt="Satlok Foundation"
                className="w-[260px]"
              />

              <p className="mt-5 ml-5 text-[#4B5563]">
                Allows you to get funding,
                <br />
                resources and investor connect
              </p>
            </div>

            {/* Right */}
            {children}
          </div>
        </div>

        <footer className="pb-15 pt-10 text-left pl-30 text-[20px]">
          Terms, Privacy Disclosures Cookie Settings © Satlok Foundation Pvt.
          Ltd.
        </footer>
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden min-h-screen bg-white px-10 pt-8 pb-8 flex flex-col">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Satlok Foundation"
            className="w-[110px]"
          />
        </div>

        {/* Page Content */}
        <div className="flex-1 mt-3">
          {children}
        </div>

      </div>
    </>
  );
}