import ContentImage from "@/components/primitives/ContentImage";
import React from "react";
import {Button} from "@/components/primitives/Button";

export default function About({...props}){
  return(
    <section className="py-12">
      <ContentImage
        image={<div className="w-[316px] h-[267px] bg-abbey-apricot-05" />}
      >
        <h2 className="text-4xl font-bold tracking-tight leading-[40px">
          The{" "}
          <span className="text-accent-wdcc">
              WDCC
            </span>{" "}

          {" x "}
          <span className="text-accent-sesa">
              SESA
            </span>{" "}
          Hackathon
        </h2>
        <p className="font-medium text-lg">
          New Zealand's largest tertiary hackathon is proudly hosted in collaboration between WDCC and SESA.
          Over 48 hours, students are brought together to build, innovate and code, creating solutions that align with our annual theme. Join us for our 5th consecutive year of collaboration, creativity and hacking!
        </p>
        <div className="flex gap-4">
          <Button>Add to calendar</Button>
          <Button variant={{style: "secondary"}}>Learn more?</Button>
        </div>
      </ContentImage>

    </section>
  )
}