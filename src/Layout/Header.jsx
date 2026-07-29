import logo from "../assets/logo.png";
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavDropdown from "../components/NavDropdown";

const NAV_ITEMS = [
  { key: "auxiliaries", label: "Auxiliaries" },
  { key: "wisdom", label: "Wisdom" },
  { key: "resources", label: "Resources" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveNav, setMobileActiveNav] = useState("auxiliaries");

  const closeTimer = useRef(null);
  const navigate = useNavigate();

  /* ── Scroll listener ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Escape key closes dropdown ──────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Hover helpers (desktop, with 150ms grace period) ────── */
  const clearClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openDropdown = useCallback(
    (key) => {
      clearClose();
      setActiveDropdown(key);
    },
    [clearClose]
  );

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  /* ── Mobile helpers ─────────────────────────────────────── */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveNav(null);
  };



  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300 ${
        isScrolled ? "top-3" : "top-4 md:top-6"
      }`}
    >
      {/* ── Main bar ─────────────────────────────────────────── */}
      <div className="relative h-14 bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-between px-3 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Satlok Foundation"
            className="h-7 md:h-8 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop navigation ─────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map(({ key, label }) => {
            const isActive = activeDropdown === key;
            return (
              <div key={key} className="relative">
                <button
                  type="button"
                  onMouseEnter={() => openDropdown(key)}
                  onMouseLeave={scheduleClose}
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === key ? null : key))
                  }
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50/70"
                      : "text-[#001032] hover:text-blue-600 hover:bg-gray-50/80"
                  }`}
                >
                  {label}
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${
                      isActive ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <NavDropdown
                      navKey={key}
                      onClose={() => setActiveDropdown(null)}
                      onMouseEnter={clearClose}
                      onMouseLeave={scheduleClose}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* ── Desktop right side ─────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <button
            onClick={() => navigate("/login")}
            className="text-[15px] font-medium text-[#001032] hover:text-blue-600 transition-colors px-3 py-1.5"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/register")}
            className="h-10 px-6 rounded-full bg-[#001032] text-white font-medium text-sm hover:bg-blue-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Sign up
          </button>
        </div>

        {/* ── Mobile toggle ──────────────────────────────────── */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={() => {
              if (isMobileMenuOpen) {
                closeMobileMenu();
              } else {
                setIsMobileMenuOpen(true);
                setMobileActiveNav(null);
              }
            }}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={21} strokeWidth={2} className="text-[#001032]" />
            ) : (
              <Menu size={21} strokeWidth={2} className="text-[#001032]" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 flex flex-col">
          {/* ─── Default: 3 nav items with ▼ arrows ────────── */}
          {mobileActiveNav === null ? (
            <div
              style={{
                background: "#FFFAEF",
                border: "10px solid #D5D5D5",
                boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
                padding: "24px 28px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <div className="flex flex-col" style={{ gap: "6px" }}>
                {NAV_ITEMS.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setMobileActiveNav(key)}
                    className="flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "35px",
                      color: "#001032",
                      background: "none",
                      border: "none",
                      padding: "2px 0",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                    <ChevronDown size={16} strokeWidth={2} color="#001032" />
                  </button>
                ))}

                {/* Sign in / Sign up */}
                <div className="flex items-center mt-6" style={{ gap: "18px" }}>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/login");
                    }}
                    style={{
                      flex: 1,
                      height: "51px",
                      background: "#FFFFFF",
                      border: "1px solid #001032",
                      borderRadius: "5px",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#000000",
                      cursor: "pointer",
                    }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/register");
                    }}
                    style={{
                      flex: 1,
                      height: "51px",
                      background: "#001032",
                      border: "1px solid #001032",
                      borderRadius: "5px",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      cursor: "pointer",
                    }}
                    className="hover:opacity-90 transition-opacity"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ─── Expanded: full dropdown view ──────────────── */
            <NavDropdown
              navKey={mobileActiveNav}
              onClose={() => setMobileActiveNav(null)}
              isMobile={true}
            />
          )}
        </div>
      )}
    </header>
  );
}