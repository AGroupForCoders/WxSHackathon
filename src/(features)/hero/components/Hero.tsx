import { Button } from "@/components/primitives/Button";
import Image from "next/image";

import wdcc from "@/assets/image/WDCC-Dark.png";
import sesa from "@/assets/image/SESA-Dark.png";

export default function Hero() {
  return (
    <section className="w-full min-h-screen grid place-items-center responsive-fullwidth">
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
    </section>
  );
}
