import Link from 'next/link';
import {Button} from "@/components/primitives/Button";

export default function Navbar(){

  const navLinkStyles = "font-semibold transition hover:opacity-50"

  return(
    <nav className="py-4 px-32 flex justify-between">
      <div className="flex gap-8 items-center">
        <Link href="/" className="bg-accent-wdcc h-full w-[45px] rounded-full grid place-items-center">
          {/* PLACEHOLDER FOR LOGO OF SOME KIND */}
          <span className="text-white text-xs">logo?</span>
        </Link>
        <Link href="/" className={navLinkStyles}>About</Link>
        <Link href="/" className={navLinkStyles}>Sponsors</Link>
        <Link href="/" className={navLinkStyles}>FAQ</Link>
        <Link href="/gallery" className={navLinkStyles}>Gallery</Link>
        <Link href="/themes" className={navLinkStyles}>Past themes</Link>
        <Link href="/winners" className={navLinkStyles}>Past winners</Link>
        <Link href="/organisers" className={navLinkStyles}>Organisers</Link>
      </div>
      <div>
        <Button variant={{style: "secondary"}} href="https://www.youtube.com/watch?v=p7YXXieghto">Registration -></Button>
      </div>
    </nav>
  )
}