import { DocsLayout as PrimitiveDocsLayout } from "fumadocs-ui/layouts/docs";

import { source } from "@/lib/source";
import { AppNavbar } from "@/components/layout/app-navbar";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { Section } from "@/components/layout/section";

import type { ReactNode } from "react";

export default function ContentLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <PrimitiveDocsLayout
        nav={{ component: <AppNavbar /> }}
        sidebar={{ className: "bg-sidebar border-sidebar-border" }}
        searchToggle={{ enabled: false }}
        themeSwitch={{ enabled: false }}
        tree={source.pageTree}
      >
        {children}
      </PrimitiveDocsLayout>

      <BackgroundPattern />
    </>
  );
}
