import type {
  ContactLink,
  ExperienceItem,
  NavLink,
  ProjectItem,
  SkillItem,
} from "@/types";

export const SITE = {
  name: "Yazan Rashwani",
  firstName: "Yazan",
  lastName: "Rashwani",
  initials: ["Y", "R"] as const,
  role: "Full Stack & AI Agents Developer",
  tagline: "I build web platforms with AI agents built in — assistants that understand your users and get real work done for them.",
  // Live URL — set automatically by the GitHub Pages workflow (NEXT_PUBLIC_SITE_URL)
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://yazan342.github.io").replace(/\/$/, ""),
  location: "Damascus, Syria",
  description:
    "Yazan Rashwani is a Full Stack Developer specializing in AI agents for the web — building Laravel, Node.js and Next.js platforms with built-in AI assistants that plan, generate, analyse and act on behalf of users.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT = {
  eyebrow: "// 01_about",
  heading: "Web platforms with a brain.",
  paragraphs: [
    "I'm a Full Stack Developer who specializes in building AI agents into websites and web apps — not chatbots bolted on the side, but assistants that understand the product, use its data and take real actions for the user.",
    "I build agents that learn a business and its users, plan and generate content, analyse data like reviews, engagement and history, and connect to backend tools and APIs to take action — from the first prompt design to a reliable production deploy.",
    "Underneath the AI is solid engineering: Laravel, Node.js, React and Next.js, RESTful APIs, authentication, database design, payments and integrations — shipped to production for teams in Saudi Arabia, Kuwait and beyond.",
    "I hold a degree in Information Technology Engineering from Damascus University, specialized in Artificial Intelligence.",
  ],
  stats: [
    { label: "Years of experience", value: "4+" },
    { label: "Live platforms shipped", value: "4+" },
    { label: "Agents, built end to end", value: "AI" },
  ],
};

export const AI_AGENTS = {
  eyebrow: "// 02_ai_agents",
  title: "AI agents, built into the product.",
  description:
    "I design and build AI agents that live inside websites and web apps — they know the product, use its data, and do the work alongside your users.",
  capabilities: [
    {
      icon: "bot",
      title: "In-app AI assistants",
      text: "Agents that guide users through the product, answer questions with real account data, and complete tasks for them instead of just chatting.",
    },
    {
      icon: "sparkles",
      title: "Content & planning agents",
      text: "Agents that learn a brand or domain and generate plans, posts and documents on demand — consistent, on-brand and ready to publish.",
    },
    {
      icon: "chart",
      title: "Analysis & insight agents",
      text: "Agents that read reviews, metrics and history, then turn them into clear recommendations that feed straight back into the workflow.",
    },
    {
      icon: "plug",
      title: "Tools, APIs & integrations",
      text: "Agents wired into your backend with tool calling — databases, internal APIs and third-party services — built on the Anthropic API.",
    },
  ],
  caseStudy: {
    label: "Case study · AIland Media",
    title: "An AI marketing agent that runs a brand's social media",
    points: [
      "Analyses a business's website to learn its brand and voice",
      "Builds a content strategy and post plan, then writes the posts",
      "Reads reviews and reach to decide what to post next",
      "Built end to end with Next.js, Neon (PostgreSQL) and the Anthropic API",
    ],
    url: "https://www.ailandmedia.com/",
  },
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "towards-greatness",
    role: "Full Stack & AI Agents Developer",
    company: "Towards Greatness",
    location: "Saudi Arabia · Remote, Full-Time",
    start: "Apr 2025",
    end: "Present",
    current: true,
    summary:
      "Developing and maintaining web applications for a Saudi Arabia-based company, working remotely across the full stack with Laravel, Node.js and React.",
    highlights: [
      "Develop and maintain web applications using Laravel, Node.js and React, including the Tahkem arbitration platform (tahkem.sa)",
      "Build RESTful APIs, administrative dashboards and authentication systems; design and maintain application databases",
      "Manage deployment, testing and debugging, collaborating with a remote team through Git",
    ],
    projects: ["tahkem.sa"],
  },
  {
    id: "ailand-media",
    role: "Full Stack & AI Agents Developer",
    company: "AIland Media",
    companyUrl: "https://www.ailandmedia.com/",
    location: "Remote · Freelance",
    start: "Dec 2025",
    end: "Jun 2026",
    summary:
      "Built the complete AI marketing agent end to end — from data model and agent workflows to production deploy.",
    highlights: [
      "Built the platform with Next.js and Neon (PostgreSQL), integrated the Anthropic API and deployed on Vercel",
      "Implemented workflows that help businesses manage social media pages and generate post plans and content",
      "Built AI-assisted analysis of reviews and reach to inform new posts based on previous results",
    ],
    projects: ["ailandmedia.com"],
  },
  {
    id: "b-wire",
    role: "Laravel Developer",
    company: "B-wire",
    location: "Full-Time",
    start: "2024",
    end: "Feb 2025",
    summary:
      "Developed APIs, Blade interfaces and dashboards, wiring in payments, notifications and verification services.",
    highlights: [
      "Developed APIs, Blade interfaces and dashboards; managed MySQL and SQLite databases",
      "Integrated MyFatoorah payments, Firebase, Mailgun and mobile OTP verification",
      "Deployed projects on Hostinger and cPanel",
    ],
  },
  {
    id: "freelance-laravel",
    role: "Freelance Laravel Developer",
    company: "Independent",
    location: "Remote · Freelance",
    start: "2022",
    end: "2023",
    summary:
      "Built PHP/Laravel backends and REST APIs powering mobile applications.",
    highlights: [
      "Built PHP/Laravel backends and REST APIs for mobile applications, collaborating on database design",
      "Improved performance through code refactoring and query optimization",
      "Performed unit testing and debugging",
    ],
  },
  {
    id: "eastmed",
    role: "Database Designer & Analyst",
    company: "Eastmed",
    location: "Syria",
    start: "2021",
    end: "2022",
    summary:
      "Designed data models and SQL for ETL workflows, with a focus on performance and data protection.",
    highlights: [
      "Designed data models, gathered requirements and developed SQL queries for ETL workflows",
      "Optimized queries and indexes and implemented security measures to protect sensitive data",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ailand-media",
    title: "AIland Media",
    client: "AIland Media",
    country: "AI Agent",
    description:
      "An AI marketing agent that learns a brand, plans content, writes on-brand posts, and analyses reviews and reach to decide what to post next. Built end to end.",
    tech: ["Next.js", "Anthropic API", "Neon", "PostgreSQL", "Vercel"],
    url: "https://www.ailandmedia.com/",
    image: "/projects/ailand-media.jpg",
  },
  {
    id: "tahkem",
    title: "Tahkem",
    client: "Towards Greatness",
    country: "Saudi Arabia",
    description:
      "A digital arbitration platform serving cities across Saudi Arabia — connecting users with arbitration services, member directories and case requests through a simple, secure flow.",
    tech: ["Laravel", "PHP", "MySQL", "REST APIs"],
    url: "https://tahkem.sa/",
    image: "/projects/tahkem.jpg",
  },
  {
    id: "sour-kw",
    title: "Sour KW",
    client: "Sour Al-Kuwait Company",
    country: "Kuwait",
    description:
      "Website for a Kuwaiti facility management and manpower provider — services, staff categories and quote requests for corporate and banking clients.",
    tech: ["React", "Node.js", "Express"],
    url: "https://sourkw.com/",
    image: "/projects/sour-kw.jpg",
  },
  {
    id: "thamrah",
    title: "Thamrah",
    client: "Thamrah",
    country: "Kuwait · GCC",
    description:
      "An e-learning platform for university students across the Gulf — courses filtered by country, university and subject, with student accounts and a companion mobile app.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    url: "https://thamrah.com/",
    image: "/projects/thamrah.jpg",
  },
];

export const SKILLS: SkillItem[] = [
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Authentication", category: "backend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Blade", category: "frontend" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "SQLite", category: "database" },
  { name: "Database Design", category: "database" },
  { name: "Query Optimization", category: "database" },
  { name: "AI Agents", category: "tooling" },
  { name: "Tool Calling", category: "tooling" },
  { name: "Git", category: "tooling" },
  { name: "Vercel", category: "tooling" },
  { name: "Anthropic API", category: "tooling" },
  { name: "Firebase", category: "tooling" },
];

export const CONTACT: ContactLink[] = [
  {
    label: "Email",
    value: "rashwaniyazan@gmail.com",
    href: "mailto:rashwaniyazan@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+963 968 894 558",
    href: "tel:+963968894558",
    icon: "phone",
  },
  {
    label: "Location",
    value: "Damascus, Syria",
    href: "#",
    icon: "mapPin",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/963968894558",
    icon: "whatsapp",
  },
  {
    label: "GitLab",
    value: "gitlab.com/rashwaniyazan",
    href: "https://gitlab.com/rashwaniyazan",
    icon: "gitlab",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yazan-rashwani-18ab6118b",
    href: "https://www.linkedin.com/in/yazan-rashwani-18ab6118b/",
    icon: "linkedin",
  },
];

export const RESUME_PATH = "/resume/Yazan-Rashwani-CV.pdf";

export const HERO_PHOTO_PATH = "/profile/yazan-rashwani.png";
