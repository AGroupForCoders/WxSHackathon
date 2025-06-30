import Link from 'next/link';
import {Button} from "@/components/primitives/Button";
import NavbarMobile from "@/components/navigation/navbar/NavbarMobile";

export default function Navbar(){

  const navLinkStyles = "font-semibold transition hover:opacity-50"

  return(
    <nav className="py-4 px-8 md:px-32 flex justify-between absolute top-0 w-full">
      <div className="flex gap-8 items-center">
        <Link href="/" className="bg-accent-wdcc h-full w-[45px] rounded-full grid place-items-center">
          {/* PLACEHOLDER FOR LOGO OF SOME KIND */}
          <span className="text-white text-xs">logo?</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className={`${navLinkStyles} hidden lg:inline`}>About</Link>
          <Link href="/" className={`${navLinkStyles} hidden lg:inline`}>Sponsors</Link>
          <Link href="/" className={`${navLinkStyles} hidden lg:inline`}>FAQ</Link>
          <Link href="/gallery" className={navLinkStyles}>Gallery</Link>
          <Link href="/themes" className={navLinkStyles}>Past themes</Link>
          <Link href="/winners" className={navLinkStyles}>Past winners</Link>
          <Link href="/organisers" className={navLinkStyles}>Organisers</Link>
        </div>
      </div>
      <div>
        <NavbarMobile
          className="md:hidden"
        />
        <Button className="hidden md:flex" variant={{style: "secondary"}} href="https://www.youtube.com/watch?v=p7YXXieghto" arrow={true}>Registration</Button>
      </div>
    </nav>
  )
}