import { EXPERIENCE } from "../constants/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#ffffff] border-t border-[#e0e7ff]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#0a95ac] font-medium mb-2">
              Experience
            </p>
            <h2
              className="font-serif font-semibold text-[#0f172a] mb-2"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Where I've worked
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed max-w-md">
              Four years of shipping real software at real companies.
            </p>
          </div>
          <a
            href="
https://storage.googleapis.com/portfolio2_0/cv/Akhil_varghese_2026-04.pdf"
            download
            target="_blank"
            className="text-sm text-[#0a95ac] hover:underline hidden md:block"
          >
            Full resume ↗
          </a>
        </div>

        <div className="divide-y divide-[#e0e7ff] border-t border-[#e0e7ff]">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 py-8 group"
            >
              <p className="text-xs text-[#475569] pt-1 leading-relaxed">
                {exp.period}
              </p>
              <div>
                <h3 className="font-serif font-semibold text-[#0f172a] text-xl mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#0a95ac] font-medium mb-3">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-[#475569] leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
