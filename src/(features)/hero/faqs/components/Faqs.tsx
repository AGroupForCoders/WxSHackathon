import React from "react";
import { Faqdropdown } from "./Faqdropdown";
import faqInfo from "../data/FaqInfo";

export default function Faqs() {
  return (
    <section className="flex flex-col text-center gap-12">
      <h1 className="font-bold text-4xl">Frequently asked questions</h1>
      <div className="flex flex-col gap-2">
        {faqInfo.map((faq, index) => (
          <Faqdropdown
            question={faq.question}
            answer={faq.answer}
            key={faq.question + index}
          />
        ))}
      </div>
    </section>
  );
}
