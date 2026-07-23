export default function Footer() {
  const linkColumns = [
    {
      title: "Auxiliaries",
      links: ["Events", "Services", "Naam Diksha", "Social Impact"],
    },
    {
      title: "Wisdom",
      links: ["Books", "Quotes", "Media", "Articles"],
    },
    {
      title: "Resources",
      links: ["About Us", "Contact Us", "Ashram/Foundation", "Satguru KabirDev"],
    },
    {
      title: "Policies",
      links: [
        "Term & Conditions",
        "Privacy Policy",
        "Cookie Policy",
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Left: Wordmark + buttons */}
          <div className="flex-shrink-0">
            <h3 className="text-xl font-bold text-[#111827] tracking-tight">
              SATLOK
            </h3>
            <p className="text-xs tracking-widest text-gray-500 uppercase mt-0.5">
              Foundation
            </p>

            <div className="flex gap-3 mt-6">
              <button className="border border-gray-300 rounded-lg px-5 py-2 text-sm font-medium text-[#111827] hover:bg-gray-50 transition-colors">
                Sign in
              </button>
              <button className="bg-[#002C3E] text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-[#001f2d] transition-colors">
                Sign up
              </button>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-[#111827] text-sm mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-[#002C3E] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Satlok Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
