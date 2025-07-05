import React from "react";
import { techSponsors } from "../data/techSponsors";
import { foodSponsors } from "../data/foodSponsors";
import { SponsorTier } from "./SponsorTier";

export function Sponsors() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-16">
      <h1 className="text-4xl font-bold text-center">Sponsors</h1>
      <SponsorTier title="Tech Sponsors" sponsors={techSponsors} type="tech" />
      <SponsorTier title="Food Sponsors" sponsors={foodSponsors} type="food" />
    </section>
  );
}
