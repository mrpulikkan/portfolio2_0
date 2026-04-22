import { PROFILE } from "../constants/data";

export default function Hero() {

  const downloadFile = async () => {
  const url = "https://storage.googleapis.com/portfolio2_0/cv/Akhil_varghese_2026-04.pdf";
  
  const response = await fetch(url);
  const blob = await response.blob();
  
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Akhil_varghese_cv.pdf";
  link.click();
  
  URL.revokeObjectURL(link.href);
};


  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[90vh]"
    >
      {/* Left */}
      <div>
        {/* Availability badge */}
        {PROFILE.available && (
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#0a95ac] bg-[#0a95ac]/10 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to new opportunities
          </div>
        )}

        <p className="font-serif italic text-[#64748b] text-base mb-1">
          Hi there, I'm
        </p>
        <h1 className="font-serif font-semibold text-[#0f172a] leading-[1.05] mb-4"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
          {PROFILE.name.split(" ")[0]}
          <br />
          <em className="text-[#0a95ac]">{PROFILE.name.split(" ")[1]}.</em>
        </h1>

        <p className="text-[#475569] text-base leading-relaxed mb-8 max-w-md">
          A <strong className="text-[#0f172a] font-medium">software engineer</strong>{" "}
          {PROFILE.bio.replace("A software engineer who loves", "who loves")}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="bg-[#0a95ac] hover:bg-[#0d4a55] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
          >
            See my work
          </a>
          <a
            href="https://storage.googleapis.com/portfolio2_0/cv/Akhil_varghese_2026-04.pdf"
            download
            target="_blank"
            className="border border-[#cbd5e1] hover:border-[#475569] text-[#0f172a] text-sm px-6 py-3 rounded-full transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-center md:items-end gap-4">
        {/* Profile card */}
        <div className="relative bg-[#f0f4ff] border border-[#e0e7ff] rounded-3xl p-8 w-full max-w-sm overflow-hidden">
          {/* decorative circle */}
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0a95ac]/10 pointer-events-none" />

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#60a5fa] to-[#0a95ac] flex items-center justify-center font-serif text-3xl italic text-white mb-5">
            {PROFILE.name[0]}
          </div>

          <p className="font-serif font-semibold text-[#0f172a] text-xl mb-0.5">
            {PROFILE.name}
          </p>
          <p className="text-xs text-[#475569] mb-5">{PROFILE.role}</p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-[#e0e7ff] border border-[#e0e7ff] rounded-xl overflow-hidden">
            {PROFILE.stats.map((stat) => (
              <div key={stat.label} className="bg-[#ffffff] p-3 text-center">
                <div className="font-serif font-semibold text-[#0f172a] text-2xl leading-none">
                  {stat.num}
                </div>
                <div className="text-[10px] text-[#475569] mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info chips */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <div className="flex items-center gap-3 bg-[#f0f4ff] border border-[#e0e7ff] rounded-xl px-4 py-3">
            <span className="text-xl">📍</span>
            <div>
              <p className="text-sm font-medium text-[#0f172a]">{PROFILE.location}</p>
              <p className="text-xs text-[#475569]">{PROFILE.locationNote}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#f0f4ff] border border-[#e0e7ff] rounded-xl px-4 py-3">
            <span className="text-xl">☕</span>
            <div>
              <p className="text-sm font-medium text-[#0f172a]">{PROFILE.funFact}</p>
              <p className="text-xs text-[#475569]">{PROFILE.funFactSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
