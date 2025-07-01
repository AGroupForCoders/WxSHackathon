import React from "react";
import { Faqdropdown } from "./Faqdropdown";
import faqInfo from "../data/FaqInfo";

export default function Faqs() {
  return (
    <section className="flex flex-col text-center">
      <h1 className="font-bold text-4xl">Frequently asked questions</h1>
      <div className="flex flex-wrap">
        {faqInfo.map((faq, index) => (
          <Faqdropdown
            question={faq.question}
            answer={faq.question}
            key={faq.question + index}
          />
        ))}
      </div>
    </section>
  );
}
