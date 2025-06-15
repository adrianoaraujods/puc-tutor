import { defineConfig, defineDocs } from "fumadocs-mdx/config";

import { CONTENT_PATH } from "@/lib/config";

export const content = defineDocs({
  dir: CONTENT_PATH,
});

export default defineConfig({ lastModifiedTime: "git" });
