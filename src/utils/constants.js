export const NAVIGATION_LINKS = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const SKILL_CATEGORIES = [
  "Programming",
  "Web Development",
  "Database",
  "Tools & Platforms",
];

export const ADMIN_ROUTES = {
  LOGIN: "/admin/login",
  DASHBOARD: "/admin",
  PROFILE: "/admin/profile",
  EDUCATION: "/admin/education",
  SKILLS: "/admin/skills",
  PROJECTS: "/admin/projects",
  CERTIFICATES: "/admin/certificates",
  RESUME: "/admin/resume",
  MESSAGES: "/admin/messages",
};

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";