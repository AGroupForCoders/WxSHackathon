"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
    <div className="flex w-full cursor-pointer flex-col justify-center">
      <div
        onClick={handleToggle}
        className="flex items-center gap-4 justify-between"
      >
        <h6 className="font-bold text-xl">{question}</h6>
        <motion.span
          animate={{ rotate: toggled ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {toggled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-2">
              <p className="text-left">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
