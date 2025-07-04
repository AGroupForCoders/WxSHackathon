'use client'

import React, {useEffect, useRef} from "react";
import StatsBlock from "@/(features)/hero/components/StatsBlock";
import Image from "next/image";
import {animate, createScope, eases, Scope, onScroll} from "animejs";

export default function AboutGallery() {



  // animation specific:
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {

    scope.current = createScope({
      root
    }).add(() => {

      animate(".gallery", {
        x: ['50%', '-50%'],
        duration: 200,
        ease: eases.outQuad,

        autoplay: onScroll({
          container: ".scroll-container",
          sync: 1,
          enter: 'bottom',
          leave: 'top',
          debug: false
        })

      })

      return () => {
        if (scope.current) {
          scope.current.revert();
        }
      }
    }
    )

  }, [])

  // Note to future developers:
  // The layout on this uses basically a big pile of nested flexboxes (as columns). It's hardcoded I'm sorry.

  const columnThemeCommon = "flex flex-col w-full sm:w-[200px] h-[400px]"

  return (
    <div ref={root} className="scroll-container">
      <section className="gallery w-[2500px] h-[400px] bg-gradient-to-r from-abbey-apricot-50 to-andrew-amethyst-50">
        <div className="flex gap-2">
          <div className={`${columnThemeCommon}`}>
            <Image
              className="h-auto w-full rounded-lg hover:opacity-80 transition object-cover"
              src={'/gallery/2024/image-1.png'}
              alt={`An image from a previous iteration of this event!`}
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>

  );
}
