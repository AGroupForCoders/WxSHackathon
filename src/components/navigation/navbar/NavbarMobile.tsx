"use client";

import {useState, useEffect, useRef, ReactNode} from "react";
import Link from "next/link";
import { animate, createScope, Scope, eases} from 'animejs';
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


  // animation specific:
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {

    scope.current = createScope({
      root
    }).add(() => {

      animate(".navanim", {
        x: ['100%', '0'],
        duration: 200,
        ease: eases.outQuad,
      })

    })

    return() => {
      if(scope.current){
        scope.current.revert();
      }
    }

  }, [navOpen])

  return (
    <>
      <button className={`${className} navanim stroke-foreground hover:stroke-foreground-muted transition cursor-pointer`} onClick={handleToggle}>
        <MenuIcon />
      </button>

      {/*  Navbar menu  */}
      <div ref={root}>
        {navOpen &&
            <div
                className={`${className} fixed top-0 left-0 h-screen w-full px-8 py-4 backdrop-blur-lg bg-background`}
            >
                <div className="flex flex-col items-start gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/" className="">
                            logo?
                        </Link>
                        <button onClick={handleToggle}>
                            <ExitIcon className="stroke-foreground hover:stroke-foreground-muted transition duration-300 " />
                        </button>
                    </div>

                    <div className="navanim w-full flex flex-col items-start gap-4">
                        <div className="h-[2px] w-full rounded-full bg-gray-20" />

                        <div className="my-2 flex w-full flex-col divide-y-2 divide-dashed divide-gray-10 ">
                            <NavigationMenuLink href="/">Home</NavigationMenuLink>
                            <NavigationMenuLink href="/">Home  (links TBD)</NavigationMenuLink>
                            <NavigationMenuLink href="/">Home</NavigationMenuLink>
                            <NavigationMenuLink href="/">Home</NavigationMenuLink>
                            <NavigationMenuLink href="/">Home</NavigationMenuLink>
                            <NavigationMenuLink href="/">Links TBD</NavigationMenuLink>
                        </div>
                        <Button variant={{width: "full"}} href="">
                            Registration
                        </Button>
                        <div className="h-[2px] w-full rounded-full bg-gray-20" />
                        <div className="flex flex-col gap-2 w-full">
                            <Button variant={{width: "full", color: "sesa"}} href="">
                                Join SESA
                            </Button>
                            <Button variant={{width: "full", color: "wdcc"}} href="">
                                Join WDCC
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        }
      </div>

    </>
  );
};

const NavigationMenuLink = ({ href, children }: { href: string, children: ReactNode }) => {
  return (
    <Link
      href={href}
      className="group/item w-full py-4 text-xl font-semibold leading-none hover:duration-200"
    >
      <p className="transition duration-500 group-hover/item:translate-x-3 group-hover/item:text-wdcc-blue-70 group-hover/item:duration-200">
        {children}
      </p>
    </Link>
  );
}


export default NavbarMobile;
