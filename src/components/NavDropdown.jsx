import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronUp, ChevronRight, ChevronLeft } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data: each nav key → dropdown content                             */
/* ------------------------------------------------------------------ */
export const NAV_DATA = {
  auxiliaries: {
    title: "Auxiliaries",
    links: [
      { label: "Auxiliaries - Overview", path: "/auxiliaries", isHeading: true },
      { label: "Events", path: "/event" },
      { label: "Naam Diksha", path: "/wisdom" },
      { label: "Social Impact", path: "/auxiliaries" },
    ],
    subNav: { label: "Services", target: "_services", position: 2 },
  },
  _services: {
    title: "Services",
    isSubView: true,
    parentKey: "auxiliaries",
    links: [
      { label: "Services - Overview", path: "/services", isHeading: true },
      { label: "Ramaini", path: "/services" },
      { label: "Annapurna", path: "/services" },
      { label: "Medical Camps", path: "/services" },
      { label: "Social Awareness", path: "/services" },
    ],
  },
  wisdom: {
    title: "Wisdom",
    links: [
      { label: "Wisdom - Overview", path: "/wisdom", isHeading: true },
      { label: "Books", path: "/wisdom" },
      { label: "Media", path: "/wisdom" },
      { label: "Quotes", path: "/wisdom" },
      { label: "Articles", path: "/wisdom" },
      { label: "Prarthana(Beta)", path: "/wisdom" },
      { label: "Explore OTT platform(coming soon)", path: "/wisdom" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Resources - Overview", path: "/resource", isHeading: true },
      { label: "About Us", path: "/resource" },
      { label: "Contact us", path: "/resource" },
      { label: "Ashram/Foundation", path: "/resource" },
    ],
    badge: { label: "tatvadarshhi", path: "/resource" },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function NavDropdown({ navKey, onClose, onMouseEnter, onMouseLeave, isMobile = false }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(navKey);

  const data = NAV_DATA[activeTab];
  if (!data) return null;

  const handleLinkClick = (path) => {
    onClose();
    if (path) navigate(path);
  };

  /* Build links array, inserting the sub-nav trigger at the right position */
  const renderLinks = () => {
    const items = [];

    data.links.forEach((item, i) => {
      /* Insert sub-nav trigger at the specified position */
      if (data.subNav && i === data.subNav.position) {
        items.push(
          <div
            key="subnav"
            onClick={() => setActiveTab(data.subNav.target)}
            className="flex items-center justify-between cursor-pointer hover:opacity-70 transition-opacity"
            style={{ lineHeight: "35px" }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                color: "#001032",
              }}
            >
              {data.subNav.label}
            </span>
            <span
              className="flex items-center justify-center"
              style={{
                width: "28px",
                height: "18px",
                background: "#001032",
                borderRadius: "25px",
              }}
            >
              <ChevronRight size={12} strokeWidth={2.5} color="#fff" />
            </span>
          </div>
        );
      }

      items.push(
        <button
          key={i}
          onClick={() => handleLinkClick(item.path)}
          className="text-left hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: item.isHeading ? "14px" : "12px",
            lineHeight: "35px",
            color: "#001032",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {item.label}
        </button>
      );
    });

    /* If subNav position is at or beyond the end, add it last */
    if (data.subNav && data.subNav.position >= data.links.length) {
      items.push(
        <div
          key="subnav"
          onClick={() => setActiveTab(data.subNav.target)}
          className="flex items-center justify-between cursor-pointer hover:opacity-70 transition-opacity"
          style={{ lineHeight: "35px" }}
        >
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              color: "#001032",
            }}
          >
            {data.subNav.label}
          </span>
          <span
            className="flex items-center justify-center"
            style={{
              width: "28px",
              height: "18px",
              background: "#001032",
              borderRadius: "25px",
            }}
          >
            <ChevronRight size={12} strokeWidth={2.5} color="#fff" />
          </span>
        </div>
      );
    }

    return items;
  };

  const content = (
    <div
      className="flex flex-col"
      style={{
        width: isMobile ? "100%" : "337px",
        background: "#FFFAEF",
        border: "10px solid #D5D5D5",
        boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "12px",
        padding: "24px 28px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "35px",
            color: "#001032",
          }}
        >
          {data.title}
        </span>

        {data.isSubView ? (
          /* Back arrow for sub-views (Services → back to Auxiliaries) */
          <button
            onClick={() => setActiveTab(data.parentKey)}
            aria-label="Back"
            className="flex items-center justify-center"
            style={{
              width: "28px",
              height: "18px",
              background: "#001032",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={12} strokeWidth={2.5} color="#fff" />
          </button>
        ) : (
          /* Close arrow for main views */
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center"
            style={{
              width: "28px",
              height: "18px",
              background: "#001032",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ChevronUp size={12} strokeWidth={2.5} color="#fff" />
          </button>
        )}
      </div>

      {/* Divider */}
      <div
        style={{
          width: "274px",
          maxWidth: "100%",
          height: "0px",
          border: "1px solid #001032",
          margin: "8px 0 12px",
        }}
      />

      {/* Menu Items List */}
      <div className="flex flex-col" style={{ gap: "2px" }}>
        {renderLinks()}
      </div>

      {/* Badge (tatvadarshhi in Resources) */}
      {data.badge && (
        <button
          onClick={() => handleLinkClick(data.badge.path)}
          className="self-start mt-3 hover:opacity-80 transition-opacity flex items-center justify-center"
          style={{
            width: "102px",
            height: "29px",
            background: "#D4E2FF",
            boxShadow: "inset 0px 0px 12px rgba(0, 16, 50, 0.75)",
            borderRadius: "12px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#33559F",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {data.badge.label}
        </button>
      )}

      {/* Sign in / Sign up for Mobile only */}
      {isMobile && (
        <div className="flex items-center mt-8" style={{ gap: "18px" }}>
          <button
            onClick={() => handleLinkClick("/login")}
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
            onClick={() => handleLinkClick("/register")}
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
      )}
    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[60]"
    >
      {/* Invisible bridge so cursor can travel from button → dropdown */}
      <div className="absolute -top-3 left-0 right-0 h-3" />
      {content}
    </motion.div>
  );
}
