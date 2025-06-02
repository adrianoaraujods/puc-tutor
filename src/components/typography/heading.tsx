import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";

const headingVariants = cva("block", {
  variants: {
    element: {
      // Must be an HTML Tag
      h1: "mb-4 text-4xl font-extrabold tracking-tighter",
      h2: "mb-3 text-4xl",
      h3: "mb-2 text-2xl",
      h4: "mb-1 text-xl",
      span: "text-lg",
    },
    roleType: {
      title: "scroll-m-20 font-semibold tracking-tight",
      subtitle: "scroll-m-16 font-extralight text-muted-foreground",
    },
    variant: {
      normal: "font-normal",
      mono: "font-mono",
      italic: "font-extralight italic",
      bold: "font-bold",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
  },
  defaultVariants: {
    roleType: "title",
    variant: "normal",
    element: "span",
  },
});

function Heading({
  className,
  element = "span",
  roleType = "title",
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : String(element);

  return (
    <Comp
      data-slot="heading"
      className={cn(
        headingVariants({ element, roleType, variant, size, className })
      )}
      {...props}
    />
  );
}

export { Heading, headingVariants };
