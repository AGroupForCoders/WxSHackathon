import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface OrganisersCardProps extends HTMLAttributes<HTMLDivElement> {
}

export function OrganisersCard({className, children, ...props} : OrganisersCardProps) {
  return (
    <div className={cn('w-[400px] h-[500px] bg-white border-14 border-teal-500 rounded-[30px] shadow-lg', className)} />
  );
}
