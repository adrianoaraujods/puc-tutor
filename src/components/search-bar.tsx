"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";

import { SearchIcon } from "lucide-react";

export function SearchBar({
  className,
  variant = "outline",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "children">) {
  return (
    <>
      <Button
        className={cn(
          "bg-muted w-48 justify-between gap-4 max-md:hidden",
          className
        )}
        variant={variant}
        {...props}
      >
        <Text className="text-muted-foreground">Pesquisar...</Text>

        <SearchIcon />
      </Button>

      <Button className="md:hidden" size="icon" variant="ghost">
        <SearchIcon className="size-6" />
      </Button>
    </>
  );
}
