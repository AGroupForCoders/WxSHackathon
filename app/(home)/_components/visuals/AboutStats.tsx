import React from "react";

export default function AboutStats() {
  return (
    <section className="py-12 flex flex-col w-full gap-12 justify-center items-center z-10">
      <h2 className="text-4xl font-bold tracking-tight leading-[40px] max-w-[500px] text-center">
        Build something{" "}
        <span className="bg-linear-to-br from-wdcc-blue-40 to-sesa-teal-40 bg-clip-text text-transparent pb-[10px]">
          amazing
        </span>{" "}
        with hundreds of new friends, and
      </h2>

      <div className="w-full">
        <div className="pb-12 bg-gray-10 w-full h-[200px] grid place-items-center">
          <p>placeholder for stats cubes</p>
        </div>
      </div>
    </section>
  );
}
