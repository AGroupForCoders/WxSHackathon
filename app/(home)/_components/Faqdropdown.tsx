"use client";

import React, { useState } from "react";

interface FaqdropdownProps {
  question: string;
}
export default function Faqdropdown({ question }: FaqdropdownProps) {
  const [toggled, setToggled] = useState<boolean>(false);

  function handleToggle() {
    setToggled(!toggled);
  }
  return (
    <div
      onClick={handleToggle}
      className="flex w-[448px] items-center gap-4 cursor-pointer"
    >
      <span>{question}</span>
    </div>
  );
}
