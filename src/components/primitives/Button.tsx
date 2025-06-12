"use client";

import type { HTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";

const button = tv({
  base: "flex items-center justify-center gap-2 rounded-full px-6 py-2 font-semibold whitespace-nowrap transition duration-200 hover:cursor-pointer",
  variants: {
    /* Realistically we probably don't need to codify the whole style/color variant split since there's so few buttons and basically no variants, but whatever.  */
    style: {
      primary: "border-2",
      secondary: "border-2",
    },
    color: {
      primary: "",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    style: "primary",
    color: "primary",
    width: "fit",
  },
  compoundVariants: [
    {
      style: "primary",
      color: "primary",
      class: "border-wdcc-blue-10 bg-linear-to-br from-wdcc-blue-10 to-sesa-teal-10 text-wdcc-blue-70 transition hover:from-wdcc-blue-20 hover:border-wdcc-blue-20",
    },
    {
      style: "secondary",
      color: "primary",
      class: "border-wdcc-blue-10 bg-linear-to-br from-wdcc-blue-05 to-sesa-teal-05 text-wdcc-blue-70 hover:bg-yellow-200 transition hover:from-wdcc-blue-10 hover:border-wdcc-blue-20",
    },
  ],
});

type CommonProps = {
  children: ReactNode;
};

type Variant = { variant?: VariantProps<typeof button> };

// Type if rendered as a button (no href provided)
type ButtonVersionProps = Variant & HTMLAttributes<HTMLButtonElement> & CommonProps & { href?: never };

// Type if rendered as a Link (href provided)
type LinkVersionProps = Variant & LinkProps & CommonProps & { href: string; newTab?: boolean; className?: string };

// Type guard to determine if the props are for a Link or Button
function isLinkProps(props: ButtonVersionProps | LinkVersionProps): props is LinkVersionProps {
  return props.href !== undefined;
}

function Button(props: ButtonVersionProps | LinkVersionProps) {
  // Conditionally render as Link or button depending on whether a local link (href attribute) is provided.
  if (isLinkProps(props)) {
    // Is Link (default to newTab if newTab undefined & href is external)
    const { children, href, className, newTab = href.startsWith("http"), ...rest } = props;
    return (
      <Link
        {...rest}
        href={href}
        className={cn(button(props.variant), className)}
        target={newTab ? "_blank" : "_self"}
      >
        {children}
      </Link>
    );
  } else {
    // Is button
    const { children, className } = props;
    return (
      <button {...props} className={cn(button(props.variant), className)}>
        {children}
      </button>

    );
  }
}

export { Button };