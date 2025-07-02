import {
  CentrePodium,
  LeftPodium,
  RightPodium,
  PodiumStar,
} from "@/assets/svg/winners/Podiums";
import { Winner } from "@/(features)/winners";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

export default function WinnersPodium({
  orderedWinners,
  year,
}: {
  orderedWinners: Winner[];
  year: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center w-full gap-10">
      {/* Left podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#DAF1EB" className="z-10  -mb-5" />
        <LeftPodium className="z-0" />
        <Link
          href={`/winners/${year}/${slugify(orderedWinners[1].teamName)}`}
          className="hover:underline"
        >
          {orderedWinners[1].teamName}
        </Link>
      </div>
      {/* Centre podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#FFF2CC" className="z-10 -mb-5" />
        <CentrePodium className="z-0" />
        <Link
          href={`/winners/${year}/${slugify(orderedWinners[0].teamName)}`}
          className=" hover:underline"
        >
          {orderedWinners[0].teamName}
        </Link>
      </div>
      {/* Right podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#E5D2F9" className="z-10  -mb-5" />
        <RightPodium className="z-0" />
        <Link
          href={`/winners/${year}/${slugify(orderedWinners[2].teamName)}`}
          className=" hover:underline"
        >
          {orderedWinners[2].teamName}
        </Link>
      </div>
    </div>
  );
}
