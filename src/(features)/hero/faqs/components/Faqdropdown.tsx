"use client";

import React, { useState } from "react";

interface FaqdropdownProps {
  question: string;
  answer: string;
}

export function Faqdropdown({ question, answer }: FaqdropdownProps) {
  const [toggled, setToggled] = useState<boolean>(false);

  function handleToggle() {
    setToggled(!toggled);
  }
  return (
    <div
      onClick={handleToggle}
      className="flex w-[448px] items-center gap-4 cursor-pointer flex-col justify-center"
    >
      <p>{question}</p>
      {toggled ? <p>{answer}</p> : null}
    </div>
  );
}
