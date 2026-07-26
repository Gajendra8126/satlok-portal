
import logo from "../../assets/logo.png";
import { ChevronDown, Menu, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl transition-all duration-300 ${
    isScrolled ? "top-0" : "top-4 md:top-6"
  }`}
>
      <div className="h-[55px] md:h-14 bg-white border border-[#E5E7EB] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.22)] flex items-center justify-between pl-3 md:px-0">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Satlok Foundation"
            className="h-5 md:h-7 w-auto object-contain md:px-6 ml-2"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-12">

          <button className="flex items-center gap-1 text-[15px] font-medium text-[#001032] hover:text-blue-600 transition-all duration-300">
            Auxiliaries
            <ChevronDown size={14} strokeWidth={2} />
          </button>

          <button className="flex items-center gap-1 text-[15px] font-medium text-[#001032] hover:text-blue-600 transition-all duration-300">
            Wisdom
            <ChevronDown size={14} strokeWidth={2} />
          </button>

          <button className="flex items-center gap-1 text-[15px] font-medium text-[#001032] hover:text-blue-600 transition-all duration-300">
            Resources
            <ChevronDown size={14} strokeWidth={2} />
          </button>

        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">

          <button 
            onClick={() => navigate("/login")}
            className="text-[15px] font-medium text-[#001032] underline underline-offset-4 hover:text-blue-600 transition">
            Sign in
          </button>

          <button
            className="
              h-14
              min-w-[105px]
              px-12
              rounded-full
              bg-white
              border border-[#E5E7EB]
              text-[#001032]
              font-semibold
              shadow-[0_2px_10px_rgba(0,0,0,0.18)]
              hover:shadow-[0_5px_16px_rgba(0,0,0,0.22)]
              transition-all
              duration-300
            "
          >
            Sign up
          </button>

        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center rounded-full bg-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]">

          <button className="w-14 h-14 flex items-center justify-center">
            <Bell
              size={20}
              strokeWidth={1.8}
              className="text-[#555]"
            />
          </button>

          <div className="w-px h-8 bg-gray-200" />

          <button className="w-14 h-14 flex items-center justify-center">
            <Menu
              size={23}
              strokeWidth={2}
              className="text-[#555]"
            />
          </button>

        </div>

      </div>
    </header>
  );
}