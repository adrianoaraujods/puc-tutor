import { source } from "@/lib/source";
import { AppNavbar } from "@/components/layout/app-navbar";

import type { Translations } from "fumadocs-ui/i18n";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";

export const docsConfig: DocsLayoutProps = {
  tree: source.pageTree,
  containerProps: {
    className: "[--fd-nav-height:var(--navbar-height)]",
  },
  nav: {
    component: <AppNavbar />,
  },
  sidebar: {
    className: "bg-sidebar",
  },
  searchToggle: {
    enabled: false,
  },
  themeSwitch: {
    enabled: false,
  },
};

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
