export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  projects?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  country: string;
  description: string;
  tech: string[];
  url?: string;
  /** Optional local screenshot path in /public/projects. Falls back to a placeholder. */
  image?: string;
}

export interface SkillItem {
  name: string;
  category: "backend" | "frontend" | "database" | "tooling";
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "mapPin" | "github" | "gitlab" | "linkedin" | "whatsapp";
}
