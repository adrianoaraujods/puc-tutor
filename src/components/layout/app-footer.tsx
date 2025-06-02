"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function AppFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="app-footer"
      className={cn("bg-background h-12 border-t", className)}
      {...props}
    ></footer>
  );
}
