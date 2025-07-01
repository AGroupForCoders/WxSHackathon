import React from "react";
import { Faqdropdown } from "./Faqdropdown";

export default function Faqs() {
  return (
    <section className="flex flex-col text-center">
      <h1 className="font-bold text-4xl">Frequently asked questions</h1>
      <div className="flex flex-wrap">
        <Faqdropdown question="????" answer="lol" />
      </div>
    </section>
  );
}
