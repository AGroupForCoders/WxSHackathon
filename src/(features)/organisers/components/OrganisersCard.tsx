import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import { tv, VariantProps } from "tailwind-variants";
import Image from "next/image";

const organiserscard = tv({
  base: "w-full h-full rounded-4xl border-4 border-abbey-apricot-02",
  variants: {
    backgroundColor: {
      wdcc: "bg-wdcc-blue-50",
      sesa: "bg-sesa-teal-50",
      wdccsesa: "bg-gradient-to-r from-sesa-teal-50 to-wdcc-blue-50",
    },
  },
  defaultVariants: {
    backgroundColor: "wdcc",
  },
});

interface OrganisersCardProps
  extends VariantProps<typeof organiserscard>,
    HTMLAttributes<HTMLDivElement> {
  imagesrc: string;
  alttext: string;
}

export function OrganisersCard({
  className,
  children,
  backgroundColor,
  imagesrc,
  alttext,
  ...props
}: OrganisersCardProps) {
  return (
    <div
      className={cn("w-[350px] h-[450px] rounded-[30px] absolute", className)}
      {...props}
    >
      <div className="relative w-full h-full">
        <div
          className={organiserscard({ backgroundColor: backgroundColor })}
        ></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] bg-white rounded-4xl">
          <Image
            width={280}
            height={380}
            src={imagesrc}
            alt={alttext}
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </div>
  );
}
