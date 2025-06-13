import { DocsLayout as PrimitiveDocsLayout } from "fumadocs-ui/layouts/docs";

import { docsConfig } from "@/components/docs.config";
import { BackgroundPattern } from "@/components/layout/background-pattern";

import type { ReactNode } from "react";

export default function ContentLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <PrimitiveDocsLayout {...docsConfig}>
        <main>{children}</main>
      </PrimitiveDocsLayout>

      <BackgroundPattern />
    </>
  );
}
