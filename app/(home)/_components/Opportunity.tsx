import ContentImage from "@/components/primitives/ContentImage";
import React from "react";

export default function Opportunity() {
  return (
    <section className="flex flex-col gap-48">
      <h2 className="font-bold text-4xl text-center">
        A unique weekend opportunity
      </h2>
      <div className="flex justify-between">
        <div className="w-[316px] h-[267px] bg-abbey-apricot-05" />
        <div className="flex flex-col w-[50%]">
          <h3 className="text-3xl font-bold">
            <span className="text-abbey-apricot-50">Develop</span> skills,
            friends, and code
          </h3>
          <p>
            Learn new tools and techniques in our range of workshops, individual
            technical sessions, and project process. You’ll speak with
            experienced professionals who’ve been there and done that, so you
            know you’re learning the latest stacks and best tools.
          </p>
        </div>
      </div>
      <ContentImage
        image={<div className="w-[316px] h-[267px] bg-abbey-apricot-05" />}
        imgFirst={true}
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
    </section>
  );
}
