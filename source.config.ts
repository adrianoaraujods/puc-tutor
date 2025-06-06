import { defineConfig, defineDocs } from "fumadocs-mdx/config";

import { GITHUB_CONTENT } from "@/lib/config";

export const docs = defineDocs({
  dir: GITHUB_CONTENT,
});

export default defineConfig();
