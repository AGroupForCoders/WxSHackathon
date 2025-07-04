import React from "react";
import StatsBlock from "@/(features)/hero/components/StatsBlock";

export default function AboutStats() {
  return (
    <section className="py-12 flex flex-col w-full gap-12 justify-center items-center z-10 responsive-fullwidth overflow-hidden">
      <h2 className="text-4xl font-bold tracking-tight leading-[40px] max-w-[500px] text-center">
        Build something{" "}
        <span className="bg-linear-to-br from-wdcc-blue-40 to-sesa-teal-40 bg-clip-text text-transparent pb-[10px]">
          amazing
        </span>{" "}
        with hundreds of new friends, and
      </h2>

      {/*
      Yes, the following positions and sizes are hardcoded.
      It is what it is #scuffed
      */}

      <div className="w-full flex gap-4 items-center justify-center flex-wrap">

        <StatsBlock variant={{color: "blue"}} number="1000+" caption="dumplings catered"
                    className=" rotate-6 translate-y-[-50px] w-[250px]"></StatsBlock>
        <StatsBlock variant={{color: "teal"}} number="2000+" caption="code commits"
                    className=" -rotate-3 translate-y-[20px] w-[280px]"></StatsBlock>
        <StatsBlock variant={{color: "amethyst"}} number="15+" caption="teams"
                    className=" rotate-12 translate-x-[-40px] w-[300px]"></StatsBlock>
        <StatsBlock variant={{color: "yellow"}} number="100+" caption="hackers"
                    className=" rotate-3 translate-y-[30px] w-[300px]"></StatsBlock>
        <StatsBlock variant={{color: "apricot"}} number="$1,500+" caption="in prizes"
                    className=" rotate-[10deg] w-[300px]"></StatsBlock>
        <StatsBlock variant={{color: "blue"}} number="73" caption="production errors"
                    className=" rotate-3 translate-x-[20px] w-[250px]"></StatsBlock>
        <StatsBlock variant={{color: "teal"}} number="48" caption="hour event"
                    className=" -rotate-[9deg] translate-y-[50px] w-[280px]"></StatsBlock>
        <StatsBlock variant={{color: "amethyst"}} number="5" caption="years of hacking"
                    className=" -rotate-[9deg] translate-y-[50px] w-[280px]"></StatsBlock>
        <StatsBlock variant={{color: "apricot"}} number="2" caption="student clubs"
                    className=" -rotate-[9deg] translate-y-[50px] w-[300px]"></StatsBlock>
        <StatsBlock variant={{color: "yellow"}} number="48" caption="hour event"
                    className=" -rotate-[9deg] translate-y-[50px] w-[280px]"></StatsBlock>
        {/*<div className="pb-12 bg-gray-10 w-full h-[200px] grid place-items-center">*/}
        {/*  <p>placeholder for stats cubes</p>*/}
        {/*  */}
        {/*</div>*/}
      </div>
    </section>
  );
}
