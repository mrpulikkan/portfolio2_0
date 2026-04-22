export const PROFILE = {
  name: "Akhil Varghese",
  role: "Full Stack Software Engineer",
  tagline: "Building things that are fast, reliable, and genuinely useful.",
  bio: "A software engineer who loves building things that are fast, reliable, and genuinely useful. Based in Kerala, working with teams worldwide.",
  location: "Kochi, Kerala, India",
  locationNote: "Open to remote & relocation",
  email: "mrpulikkan@gmail.com",
  linkedin: "www.linkedin.com/in/akhil-varghese-474639222/",
  github: "github.com/mrpulikkan",
  twitter: "twitter.com/mrpulikkan",
  funFact: "Loves clean code",
  funFactSub: "And strong coffee",
  stats: [
    { num: "3+", label: "Years exp." },
    { num: "7+", label: "Projects" },
    { num: "7+", label: "Clients" },
    { num: "∞", label: "Curiosity" },
  ],
  available: true,
};

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Redux"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js",  "FastAPI", "Django", "Express",  "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GCP", "AWS", "PostgreSQL", "Redis", "Git", "Linux", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    tag: "Featured",
    name: "AI & Knowledge Graph powered business analytics platform",
    description:
      "An AI-powered analytics platform that transforms complex data into intuitive insights. Built a custom knowledge graph to connect disparate data sources, enabling users to ask natural language questions and get instant, accurate answers. The platform has been adopted by 50+ businesses, reducing their time-to-insight by 70%.",
    techs: ["Next js", "FastAPI", "OpenAI", "LangGraph", "PostgreSQL", "Redis"],
    liveUrl: "https://figlabs.ai",
    // githubUrl: "#",
    featured: true,
    emoji: "📊",
  },
  {
    id: 2,
    tag: "Personal",
    name: "Finologix App",
    description:"Personal finance management app with AI-powered insights.",
    techs: ["React", "Django REST", "Supabase","GCP"],
    liveUrl: "https://app.finologix.akhilvarghese.in/",
    githubUrl: "https://github.com/mrpulikkan?tab=repositories",
    featured: false,
    emoji: "⚙️",
  },
  {
    id: 3,
    tag: "SaaS",
    name: "Safety Violation and Realtime video narration System",
    description:
      "A safety violation detection system for industrial sites that uses AI to identify unsafe behaviors in real-time. The system provides instant video narration and alerts to site managers, helping them address safety issues proactively.",
    techs: ["Next.js", "Stripe", "Plaid"],
    // liveUrl: "#",
    // caseStudyUrl: "#",
    featured: false,
    emoji: "💳",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    period: "Nov 2022 — Present",
    role: "Senior Software Engineer",
    company: "Pumex Infotech Pvt Ltd",
    location: "On Site - Kochi . Full Time",
    description:
      "Worked on an AI-powered real-time safety violation detection system using RTSP video streams from security cameras. Built scalable frontend applications with Next.js and developed backend services using Python and Node.js for data processing and exploration. Integrated third-party services like SuperTokens, Stripe, QuickBooks, and Google Cloud Platform (GCP) to enhance authentication, payments, and cloud capabilities.",
  },
  {
    id: 2,
    period: "Sept 2022 —  Nov 2022",
    role: "CRM Executive",
    company: "Cochin International Airport Limited",
    location: "On Site - Kochi .Contract",
    description:
      "Owned the payments module end-to-end, processing ₹2 Cr+ monthly. Shipped 3 major product releases and reduced checkout drop-off by 22% with UX improvements.",
  },
  // {
  //   id: 3,
  //   period: "2020 — 2021",
  //   role: "Freelance Developer",
  //   company: "Self-employed",
  //   location: "Kerala",
  //   description:
  //     "Built 10+ websites and web apps for clients across retail, education, and hospitality. Learned how to manage projects, communicate with clients, and deliver on deadlines.",
  // },
];
