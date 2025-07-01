"use client";

import { HTMLAttributes, ReactNode, useState } from "react";
import Link, { LinkProps } from "next/link";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";

import Arrow from "@/assets/svg/Arrow";
import "./utils/LinkAnimations.css";

/**
 * General button component for navigation and click actions.
 *
 * Takes the following parameters as props of variants:
 * @variation style [primary, secondary] - the general style and importance of the button, see Figma. Can add more as needed.
 * @variation color [primary, wdcc, sesa] - the color of the button. Primary are general buttons, wdcc/sesa self explanatory.
 * @variation width [full, fit] - whether the element scales to the full width of the parent.
 * @variation arrow [true, false] - whether the button has a corresponding arrow.
 *
 * example usage:
 * <Button variant={{ style: "primary", color: "wdcc", width: {full}, arrow: {true} }}>primary blue</Button>
 *
 * Labels are provided as children of this element.
 * This Button dynamically determines its element type as either <button/> or <Link/> depending on the optional href attribute.
 */

const button = tv({
  base: "group flex items-center justify-center gap-2 rounded-full px-6 pt-[6px] pb-[8px] font-semibold whitespace-nowrap transition-all duration-[500ms] hover:gap-4 hover:duration-[300ms] hover:cursor-pointer",
  variants: {
    /* Realistically we probably don't need to codify the whole style/color variant split since there's so few buttons and basically no variants, but whatever.  */
    style: {
      primary: "border-2",
      secondary: "border-2",
    },
    color: {
      primary:
        "border-wdcc-blue-10 bg-linear-to-br text-wdcc-blue-70 hover:border-wdcc-blue-20",
      wdcc: "border-wdcc-blue-20 hover:border-wdcc-blue-30",
      sesa: "border-sesa-teal-20 hover:border-sesa-teal-30",
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
      class: "from-wdcc-blue-10 to-sesa-teal-10 hover:from-wdcc-blue-20",
    },
    {
      style: "secondary",
      color: "primary",
      class:
        "from-wdcc-blue-05 to-sesa-teal-05 hover:bg-yellow-200  hover:from-wdcc-blue-10",
    },
    {
      style: "primary",
      color: "wdcc",
      class: "bg-accent-wdcc text-white hover:bg-wdcc-blue-60",
    },
    {
      style: "secondary",
      color: "wdcc",
      class: "bg-wdcc-blue-10 text-wdcc-blue-70 hover:bg-wdcc-blue-20",
    },
    {
      style: "primary",
      color: "sesa",
      class: "bg-accent-sesa text-white hover:bg-sesa-teal-60",
    },
    {
      style: "secondary",
      color: "sesa",
      class: "bg-sesa-teal-10 text-sesa-teal-70 hover:bg-sesa-teal-20",
    },
  ],
});

type CommonProps = {
  children: ReactNode;
  arrow?: boolean;
};

type Variant = { variant?: VariantProps<typeof button> };

// Type if rendered as a button (no href provided)
type ButtonVersionProps = Variant &
  HTMLAttributes<HTMLButtonElement> &
  CommonProps & { href?: never };

// Type if rendered as a Link (href provided)
type LinkVersionProps = Variant &
  LinkProps &
  CommonProps & { href: string; newTab?: boolean; className?: string };

// Type guard to determine if the props are for a Link or Button
function isLinkProps(
  props: ButtonVersionProps | LinkVersionProps
): props is LinkVersionProps {
  return props.href !== undefined;
}

function Button(props: ButtonVersionProps | LinkVersionProps) {
  // Code exclusive to arrow
  const [exitAnimation, setExitAnimation] = useState(false);

  const ArrowStyle = exitAnimation
    ? "animate-[arrow-out_0.5s_forwards_ease-in-out]"
    : "-rotate-45 group-hover:animate-[arrow-in_0.5s_forwards_ease-in-out]";

  // Conditionally render as Link or button depending on whether a local link (href attribute) is provided.
  if (isLinkProps(props)) {
    // Is Link (default to newTab if newTab undefined & href is external)
    const {
      children,
      href,
      className,
      newTab = href.startsWith("http"),
      arrow,
      ...rest
    } = props;
    return (
      <Link
        {...rest}
        href={href}
        className={cn(button(props.variant), className)}
        target={newTab ? "_blank" : "_self"}
        onMouseEnter={() => setExitAnimation(false)}
        onMouseLeave={() => setExitAnimation(true)}
      >
        {children}
        {arrow && <Arrow className={ArrowStyle} />}
      </Link>
    );
  } else {
    // Is button
    const { children, className, arrow, ...buttonProps } = props;
    return (
      <button
        {...buttonProps}
        className={cn(button(props.variant), className)}
        onMouseEnter={() => setExitAnimation(false)}
        onMouseLeave={() => setExitAnimation(true)}
      >
        {children}
        {arrow && <Arrow className={ArrowStyle} />}
      </button>
    );
  }
}

export { Button };
