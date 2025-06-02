"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PaletteIcon } from "lucide-react";

import type { Theme } from "@/lib/config";

export function ThemesDropdown({
  size = "icon",
  variant = "ghost",
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme: currentTheme, setTheme } = useTheme();

  const themes: {
    [key in Theme]: string;
  } = {
    dark: "Escuro",
    light: "Claro",
    system: "Sistema",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={size} variant={variant} {...props}>
          {children || (
            <>
              <PaletteIcon className="size-6" />

              <span className="sr-only">Alterar tema</span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Alterar tema</DropdownMenuLabel>

        <DropdownMenuSeparator />

        {Object.keys(themes).map((theme) => (
          <DropdownMenuCheckboxItem
            key={theme}
            checked={theme === currentTheme}
            onCheckedChange={() => setTheme(theme)}
          >
            {themes[theme as Theme]}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
