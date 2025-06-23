import {FooterBg01, FooterBg02} from "@/assets/svg/footer/FooterBg";
import wdcc from "@/assets/image/WDCC-Light.png"
import sesa from "@/assets/image/SESA-Light.png"
import Image from "next/image";

export default function Footer(){
  return(

    /* BG Colors are currently hardcoded, need to fix eventually */

    <footer className="mt-64 text-white isolate">

      <div className="bg-[#054D94] relative pt-16 pb-32 isolate">

        <FooterBg01 className="w-full top-[-160px] absolute z-[-10]"/>

        <div className="flex flex-col gap-3 justify-center items-center text-lg">
          <p className="font-bold w-fit">Brought to you by</p>
          <div className="flex gap-16 justify-center z-90">
              <div className="flex gap-8 justify-center items-center">
                <Image src={wdcc} alt="" className="w-[150px] h-fit"/>
                <div className="leading-tight">
                  <p className="font-bold">Web Development and Consulting Club</p>
                  <p>wdcc.co.nz</p>
                </div>
              </div>
            <div className="flex gap-8 justify-center items-center">
                <Image src={sesa} alt="" className="w-[150px] h-fit"/>
                <div className="leading-tight">
                  <p className="font-bold">Software Engineering Students Association</p>
                  <p>sesa.org.nz</p>
                </div>
              </div>
          </div>
        </div>

      </div>

      <div className="bg-[#033363] relative pt-16 isolate z-10">

        <FooterBg02 className="w-full top-[-120px] absolute z-[-10]"/>

        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <p className="font-bold w-fit text-lg">Built in Rust, C#, React Native, JAX-RS, and Yamada UI by WDCC and SESA</p>
          <div className="flex flex-col opacity-80">
            <p className="font-bold">Tech Lead</p>
            <p>Anton Garay</p>
          </div>
          <div className="flex flex-col opacity-80">
            <p className="font-bold">Developed with ☕😭⌨️ by:</p>
            <p>Anton Garay, Jos Badenas, Yoyo Chen, Andrew Qiu, Abbey Martinez, Tony Lim, Jerry Nguyen, and Matthew Ren</p>
          </div>
          <div className="flex flex-col opacity-80">
            <p className="font-bold">Designed with 💜✨🧋  by:</p>
            <p>Andrew Qiu, Abbey Martinez, and Yoyo Chen</p>
          </div>
        </div>

        <p className="pt-24 pb-6 text-center opacity-50">Copyright © WDCC x SESA 2025 - all rights reserved.</p>

      </div>

    </footer>
  )
}