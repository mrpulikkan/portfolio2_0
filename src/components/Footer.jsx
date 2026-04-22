import { PROFILE } from "../constants/data";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: `https://${PROFILE.github}` },
    { label: "LinkedIn", href: `https://${PROFILE.linkedin}` },
    { label: "Twitter", href: `https://${PROFILE.twitter}` },
  ];

  return (
    <footer className="border-t border-[#e0e7ff] bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-[#475569]">
          © {new Date().getFullYear()} {PROFILE.name} · Built with care in Kerala 🌴
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#475569] hover:text-[#0a95ac] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
