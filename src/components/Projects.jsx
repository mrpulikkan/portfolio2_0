import { PROJECTS } from "../constants/data";

function ProjectCard({ project, featured = false }) {
  if (featured) {
    return (
      <div className="col-span-1 md:col-span-2 bg-[#f0f4ff] border border-[#e0e7ff] rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-[#bfdbfe] transition-all hover:-translate-y-0.5 cursor-pointer">
        <div>
          <span className="text-[10px] uppercase tracking-[0.12em] text-[#0a95ac] bg-[#0a95ac]/10 px-3 py-1 rounded-full font-medium inline-block mb-4">
            {project.tag}
          </span>
          <h3 className="font-serif font-semibold text-[#0f172a] text-2xl mb-3 leading-snug">
            {project.name}
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techs.map((t) => (
              <span key={t} className="text-[11px] text-[#475569] border border-[#cbd5e1] px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer"
                className="text-sm text-[#0a95ac] font-medium hover:underline">
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer"
                className="text-sm text-[#0a95ac] font-medium hover:underline">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
        <div className="bg-[#e0e7ff] rounded-2xl h-48 flex items-center justify-center text-6xl">
          {project.emoji}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f4ff] border border-[#e0e7ff] rounded-2xl p-7 hover:border-[#bfdbfe] transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col">
      <span className="text-[10px] uppercase tracking-[0.12em] text-[#0a95ac] bg-[#0a95ac]/10 px-3 py-1 rounded-full font-medium inline-block mb-4 self-start">
        {project.tag}
      </span>
      <h3 className="font-serif font-semibold text-[#0f172a] text-xl mb-2 leading-snug">
        {project.name}
      </h3>
      <p className="text-sm text-[#475569] leading-relaxed mb-5 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techs.map((t) => (
          <span key={t} className="text-[11px] text-[#475569] border border-[#cbd5e1] px-2.5 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer"
            className="text-sm text-[#0a95ac] font-medium hover:underline">
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer"
            className="text-sm text-[#0a95ac] font-medium hover:underline">
            GitHub ↗
          </a>
        )}
        {project.caseStudyUrl && (
          <a href={project.caseStudyUrl} target="_blank" rel="noreferrer"
            className="text-sm text-[#0a95ac] font-medium hover:underline">
            Case Study ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t border-[#e0e7ff]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#0a95ac] font-medium mb-2">
              Selected Work
            </p>
            <h2 className="font-serif font-semibold text-[#0f172a] mb-2"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Projects I'm proud of
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed max-w-md">
              A few things I've built — from side projects to production systems.
            </p>
          </div>
          <a href="#" className="text-sm text-[#0a95ac] hover:underline hidden md:block">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
