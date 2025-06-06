"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";

export function AppFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <Section asChild>
      <footer
        data-slot="app-footer"
        className={cn("bg-background h-12 border-t", className)}
        {...props}
      ></footer>
    </Section>
  );
}
