export interface Project {
  id: number;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: 'fullstack' | 'ai' | 'backend';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  proficiency?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Stats {
  label: string;
  value: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  phone?: string;
  location: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  roles: string[];
  stats: Stats[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo;
  socialLinks: SocialLink[];
}