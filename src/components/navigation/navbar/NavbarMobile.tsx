"use client";

import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import { animate, createScope, Scope} from 'animejs';
import {Button} from "@/components/primitives/Button";
import MenuIcon from "@/assets/svg/MenuIcon";
import ExitIcon from "@/assets/svg/ExitIcon";

export interface NavbarMobileProps {
  className?: string;
}

const NavbarMobile = ({className} : NavbarMobileProps) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };


  // animate(".navanim", {
  //   x: ['-300px', 0],
  //   duration: 1000
  // })

  // animation specific:
  const root = useRef(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const newScope = createScope({
      root: container.current,
    });

    newScope.current = createScope({root}).add(self => {

      animate(".navanim", {
        x: ['300px', '100px'],
        scale: [1.15, 0],
        duration: 1000,
        loop: true,
      })

    })

    return() => {
      if(scope.current){
        scope.current.revert();
      }
    }

  }, [])

  return (
    <>
      <button className={`${className} stroke-foreground hover:stroke-foreground-muted transition cursor-pointer`} onClick={handleToggle}>
        <MenuIcon />
      </button>

      {/*  Navbar menu  */}
      <div ref={root}>
        {navOpen &&
            <div
                className={`${className} navanim fixed top-0 left-0 h-screen w-full px-8 py-4 backdrop-blur-lg`}
            >
                <div className="flex flex-col items-start gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/">
                            dsa
                        </Link>
                        <button onClick={handleToggle}>
                            <ExitIcon className="stroke-white transition duration-300 hover:stroke-blue-200" />
                        </button>
                    </div>

                    <div className="h-[2px] w-full rounded-full bg-gray-100/25" />

                    <div className="my-2 flex w-full flex-col divide-y-2 divide-dashed divide-gray-100/25 text-white">
                    </div>
                    <Button
                        className=""
                        href="https://go.wdcc.co.nz"
                    >
                      {/* I probably shouldnt use CSS transforms to scale this down but whatever lol */}
                        <div className="scale-[80%] fill-blue-100">
                            dsa
                        </div>
                    </Button>
                    <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform?usp=sharing"
                    >
                        Join WDCC
                    </Button>
                </div>
            </div>
        }
      </div>

    </>
  );
};

export default NavbarMobile;
