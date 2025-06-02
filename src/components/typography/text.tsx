import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      normal: "font-normal",
      mono: "font-mono",
      italic: "font-extralight italic",
      bold: "font-bold",
      muted: "text-muted-foreground",
      destructive: "text-destructive-foreground",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
  },
  defaultVariants: {
    variant: "normal",
    size: "md",
  },
});

function Text({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(textVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Text, textVariants };
