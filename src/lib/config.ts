import type { Translations } from "fumadocs-ui/i18n";

export const THEMES = ["system", "light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

export const CONTENT_PATH = "public/content";

export const GITHUB_OWNER = "adrianoaraujods";
export const GITHUB_REPO = "puc-tutor";
export const GITHUB_BRANCH = "master";
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

export const translations: Partial<Translations> = {
  editOnGithub: "Edite essa página no GitHub",
  tocNoHeadings: "Sem títulos",
  chooseTheme: "Trocar Tema",
  nextPage: "Próximo",
  previousPage: "Anterior",
  search: "Pesquisar",
  searchNoResult: "Nenhum resultado encontrado",
  toc: "Nessa página",
  lastUpdate: "Editado pela última vez em",
};

export type NavigationLink = {
  title: string;
  href: string;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { title: "Sobre", href: "/about" },
  { title: "Contato", href: "/contact" },
  { title: "Termos", href: "/terms" },
];
