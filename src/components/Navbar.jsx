import { useState } from "react";
import { PROFILE } from "../constants/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Work", "Experience", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-[#ffffff] border-b border-[#e0e7ff]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="font-serif text-lg italic text-[#0f172a]">
          {PROFILE.name}
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#475569] hover:text-[#0a95ac] transition-colors tracking-wide"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#0a95ac] hover:bg-[#0d4a55] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#0f172a] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#ffffff] border-t border-[#e0e7ff] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#475569] hover:text-[#0a95ac] transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0a95ac] text-white text-sm font-medium px-5 py-2 rounded-full text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
