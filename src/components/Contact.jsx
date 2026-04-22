import { useState } from "react";
import { PROFILE } from "../constants/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g. EmailJS, Formspree, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactDetails = [
    { icon: "✉", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: "in", label: PROFILE.linkedin, href: `https://${PROFILE.linkedin}` },
    { icon: "⌥", label: PROFILE.github, href: `https://${PROFILE.github}` },
  ];

  return (
    <section id="contact" className="bg-[#f0f4ff] border-t border-[#e0e7ff]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#0a95ac] font-medium mb-4">
              Let's Talk
            </p>
            <p className="font-serif italic text-[#0f172a] text-2xl leading-relaxed mb-6">
              "The best projects start with a{" "}
              <em className="text-[#0a95ac]">good conversation.</em>"
            </p>
            <p className="text-sm text-[#475569] leading-relaxed mb-8 max-w-sm">
              Whether you have a role, a project, or just want to say hello —
              my inbox is always open.
            </p>

            <div className="flex flex-col gap-3">
              {contactDetails.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#0a95ac] transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-[#e0e7ff] flex items-center justify-center text-sm group-hover:bg-[#0a95ac]/10 transition-colors flex-shrink-0">
                    {c.icon}
                  </span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {sent && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
                Message sent! I'll get back to you soon. 🙌
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="col-span-1 px-4 py-3 bg-[#ffffff] border border-[#cbd5e1] rounded-xl text-sm text-[#0f172a] placeholder:text-[#64748b] focus:outline-none focus:border-[#60a5fa] focus:ring-1 focus:ring-[#3b82f6]/20 transition-colors"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="col-span-1 px-4 py-3 bg-[#ffffff] border border-[#cbd5e1] rounded-xl text-sm text-[#0f172a] placeholder:text-[#64748b] focus:outline-none focus:border-[#60a5fa] focus:ring-1 focus:ring-[#3b82f6]/20 transition-colors"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject — role, project, collab..."
              className="px-4 py-3 bg-[#ffffff] border border-[#cbd5e1] rounded-xl text-sm text-[#0f172a] placeholder:text-[#64748b] focus:outline-none focus:border-[#60a5fa] focus:ring-1 focus:ring-[#3b82f6]/20 transition-colors"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me what's on your mind..."
              className="px-4 py-3 bg-[#ffffff] border border-[#cbd5e1] rounded-xl text-sm text-[#0f172a] placeholder:text-[#64748b] focus:outline-none focus:border-[#60a5fa] focus:ring-1 focus:ring-[#3b82f6]/20 transition-colors resize-y"
            />
            <button
              type="submit"
              className="self-start bg-[#0a95ac] hover:bg-[#0d4a55] text-white text-sm font-medium px-7 py-3 rounded-full transition-colors"
            >
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
