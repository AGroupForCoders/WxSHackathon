import { Button } from "@/components/primitives/Button";
import React from "react";

interface SeeMoreCardProps {
  label: string;
  link: string;
}

export function SeeMoreCard({ label, link }: SeeMoreCardProps) {
  return (
    <Button
      href={link}
      variant={{ style: "secondary" }}
      className="p-5 rounded-2xl flex flex-col items-start gap-4"
      arrow
    >
      <div className="bg-white w-3xs h-40" />

      <div className="flex flex-row items-center gap-2">
        <span>{label}</span>
      </div>
    </Button>
  );
}
