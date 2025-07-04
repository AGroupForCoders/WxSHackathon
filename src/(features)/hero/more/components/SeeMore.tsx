import React from "react";
import { SeeMoreCard } from "./SeeMoreCard";

export function SeeMore() {
  return (
    <section className="flex flex-col  items-center justify-center w-full gap-16">
      <h1 className="font-bold text-4xl">See more</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-end w-full justify-between">
        <SeeMoreCard label="Past Winners" link="/winners" />
        <SeeMoreCard label="Past Themes" link="/themes" />
        <SeeMoreCard label="Organisers" link="/organisers" />
      </div>
    </section>
  );
}
