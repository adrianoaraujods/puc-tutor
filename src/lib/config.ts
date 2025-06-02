export const THEMES = ["system", "light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

export const GITHUB_URL = "https://github.com/adrianoaraujods/puc-tutor";

export type NavigationLink = {
  title: string;
  href: string;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { title: "Sobre", href: "/about" },
  { title: "Contato", href: "/contact" },
  { title: "Termos", href: "/terms" },
];
