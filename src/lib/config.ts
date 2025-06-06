export const THEMES = ["system", "light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

export const GITHUB_OWNER = "adrianoaraujods";
export const GITHUB_REPO = "puc-tutor";
export const GITHUB_BRANCH = "master";
export const GITHUB_CONTENT = "public";
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

export type NavigationLink = {
  title: string;
  href: string;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { title: "Sobre", href: "/about" },
  { title: "Contato", href: "/contact" },
  { title: "Termos", href: "/terms" },
];
