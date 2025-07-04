// worlds most overengineered cube component fr

import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";
import Image from "next/image";

const block = tv({
  base: "absolute w-full pt-4 mx-auto group flex flex-col items-center justify-center text-center",
  variants: {
    color: {
      blue: "text-wdcc-blue-60",
      teal: "text-sesa-teal-60",
      yellow: "text-yoyo-yellow-60",
      amethyst: "text-andrew-amethyst-60",
      apricot: "text-abbey-apricot-60"
    },
  },
  defaultVariants: {
    color: "blue",
  }
});

interface StatsBlockProps {
  variant: VariantProps<typeof block>;
  number: string;
  caption: string;
  className?: string;
}
export default function StatsBlock({variant, number, caption, className}: StatsBlockProps) {
  return(
    <div className={`group grid place-items-center ${className} transition-all duration-[600ms] hover:duration-[200ms] hover:scale-[1.07] hover:rotate-z-[-4deg]`}>
      <Image src={`/assets/statcube_${variant.color}.webp`} alt={"A statistic about the event!"} width={1000} height={1000}
      className="w-full h-fit"/>
      <div className={cn(block(variant))}>
        <p className="text-5xl font-bold">{number}</p>
        <p className="text-lg font-medium leading-tight">{caption}</p>
      </div>
    </div>
  )
}