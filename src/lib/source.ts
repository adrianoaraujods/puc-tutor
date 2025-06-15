import { createElement } from "react";

import { loader } from "fumadocs-core/source";

import { content } from "@/../.source";

import { icons } from "lucide-react";

export const source = loader({
  baseUrl: "/content",
  source: content.toFumadocsSource(),
  icon: (icon) => {
    if (!icon) return;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
