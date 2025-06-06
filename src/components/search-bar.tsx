"use client";

import * as React from "react";

import {
  LargeSearchToggle,
  SearchToggle,
} from "fumadocs-ui/components/layout/search-toggle";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SearchBar({
  className,
  variant = "outline",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "children">) {
  return (
    <>
      <Button
        className={cn("max-md:hidden", className)}
        variant={variant}
        {...props}
        asChild
      >
        <LargeSearchToggle />
      </Button>

      <Button className="md:hidden" size="icon" variant="ghost" asChild>
        <SearchToggle />
      </Button>
    </>
  );
}
