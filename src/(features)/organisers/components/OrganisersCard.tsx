import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface OrganisersCardProps extends HTMLAttributes<HTMLDivElement> {}

export function OrganisersCard({
  className,
  children,
  ...props
}: OrganisersCardProps) {
  return (
    <div
      className={cn(
        "w-[350px] h-[450px] bg-white border-27 border-teal-500 rounded-[20px] shadow-lg absolute",
        className
      )}
      {...props}
    />
  );
}
