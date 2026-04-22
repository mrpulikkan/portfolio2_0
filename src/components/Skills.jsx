import { SKILLS } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f0f4ff] border-t border-[#e0e7ff]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.18em] text-[#2563eb] font-medium mb-2">
          Skills & Stack
        </p>
        <h2 className="font-serif font-semibold text-[#0f172a] mb-3"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
          What I work with
        </h2>
        <p className="text-sm text-[#475569] leading-relaxed max-w-md mb-12">
          Technologies I've used to build real products that real people use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="font-serif italic text-[#1e293b] text-base mb-4 pb-3 border-b border-[#e0e7ff]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-[#0f172a] border border-[#cbd5e1] bg-[#ffffff] px-3 py-1.5 rounded-full font-medium hover:border-[#2563eb]/60 hover:text-[#2563eb] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
