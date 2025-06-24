import { Button } from "@/components/primitives/Button";
import ContentImage from "@/components/primitives/ContentImage";
import React from "react";

export default function Opportunity() {
  return (
    <section className="flex flex-col gap-48">
      <h1 className="font-bold text-4xl text-center">
        A unique weekend opportunity
      </h1>
      <ContentImage
        image={<div className="w-[316px] h-[267px] bg-abbey-apricot-05" />}
      >
        <h3 className="text-3xl font-bold">
          <span className="text-abbey-apricot-50">Develop</span> skills,
          friends, and code
        </h3>
        <p>
          Learn new tools and techniques in our range of workshops, individual
          technical sessions, and project process. You’ll speak with experienced
          professionals who’ve been there and done that, so you know you’re
          learning the latest stacks and best tools.
        </p>
      </ContentImage>
      <ContentImage
        image={<div className="w-[316px] h-[267px] bg-andrew-amethyst-05" />}
        imgFirst={true}
      >
        <h3 className="text-3xl font-bold">
          <span className="text-accent-amethyst">Design</span> your future in
          tech
        </h3>
        <p>
          Chat with a variety of sponsors, experienced students, and other
          mentor figures who can help guide you on your own student tech story.
        </p>
      </ContentImage>
      <ContentImage
        image={<div className="w-[316px] h-[267px] bg-wdcc-blue-05" />}
      >
        <h3 className="text-3xl font-bold">
          <span className="text-accent-wdcc">Create</span> memorable moments
        </h3>
        <p>
          Hang out, grab a coffee, and work on some creative technical
          challenges with like-minded peers. We’ll make sure you’re covered to
          both lock in to your project and have casual yaps with new friends.
        </p>
      </ContentImage>
      <div className="flex justify-center gap-6">
        <Button>Add to Calender</Button>
        <Button variant={{ style: "secondary" }}>Some other button CTA</Button>
      </div>
    </section>
  );
}
