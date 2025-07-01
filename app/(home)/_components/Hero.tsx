"use client";

import { Button } from "@/components/primitives/Button";
import Image from "next/image";
import { animate, createScope, Scope, eases, onScroll } from "animejs";

import wdcc from "@/assets/image/WDCC-Dark.png";
import sesa from "@/assets/image/SESA-Dark.png";
import React from "react";

import Skyline1 from "./visuals/Skyline1";
import Skyline2 from "./visuals/Skyline2";
import Skyline3 from "./visuals/Skyline3";

export default function Hero() {
  const root = React.useRef(null);
  const scope = React.useRef<Scope>(null);

  React.useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".skyline1", {
        y: ["0", "-350px"],
        duration: 200,
        ease: eases.outQuad,
        autoplay: onScroll({
          container: ".scroll-container",
          sync: 1,
          enter: "bottom",
          leave: "top",
          debug: false,
        }),
      });
      animate(".skyline2", {
        y: ["-200px", "-850px"],
        duration: 200,
        ease: eases.outQuad,
        autoplay: onScroll({
          container: ".scroll-container",
          sync: 1,
          enter: "bottom",
          leave: "top",
          debug: false,
        }),
      });
      animate(".skyline3", {
        y: ["-800px", "-950px"],
        duration: 200,
        ease: eases.outQuad,
        autoplay: onScroll({
          container: ".scroll-container",
          sync: 1,
          enter: "bottom",
          leave: "top",
          debug: false,
        }),
      });
    });
    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, []);

  return (
    <section
      ref={root}
      className="scroll-container w-full min-h-screen responsive-fullwidth"
    >
      <div className="grid place-items-center py-48">
        <div className="max-w-[700px] flex flex-col gap-6 mr-[-20%] pb-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 font-sm text-foreground-subtle">
              <Image src={wdcc} alt="WDCC logo" className="w-[70px] h-full" />
              <span className="font-semibold text-xl">+</span>
              <Image src={sesa} alt="sesa logo" className="w-[80px] h-full" />
              <span className="italic">presents</span>
            </div>
            <h1 className="text-6xl font-bold tracking-tight leading-[62px]">
              The{" "}
              <span className="bg-linear-to-br from-wdcc-blue-40 to-sesa-teal-40 bg-clip-text text-transparent pb-[10px]">
                biggest
              </span>{" "}
              tertiary hackathon in New Zealand
            </h1>
          </div>
          <div className="text-xl">
            <p className="text-2xl font-bold tracking-tight leading-tight bg-linear-to-r from-andrew-amethyst-50 to-abbey-apricot-40 text-transparent bg-clip-text w-fit">
              A vibrant, in-person event in the heart of Auckland
            </p>
            <div className="flex gap-3 items-center font-medium text-lg">
              <p>Location, Region of Auckland here</p>
              <div className="w-[5px] h-[5px] bg-accent-wdcc rounded-full"></div>
              <p>August 2-3, 2025</p>
            </div>
          </div>
          <div>
            <Button>Add to calendar</Button>
          </div>
        </div>
      </div>
      <Skyline1 />
      <Skyline2 />
      <Skyline3 />
    </section>
  );
}
