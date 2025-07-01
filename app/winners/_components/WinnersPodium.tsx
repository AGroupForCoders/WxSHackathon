import {
  CentrePodium,
  LeftPodium,
  RightPodium,
  PodiumStar,
} from "@/assets/svg/winners/Podiums";
import { Winner } from "@/types/WinnerType";

export default function WinnersPodium({
  orderedWinners,
}: {
  orderedWinners: Winner[];
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center w-full gap-10">
      {/* Left podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#DAF1EB" className="z-10  -mb-5" />
        <LeftPodium className="z-0" />
        <h3>{orderedWinners[1]?.teamName}</h3>
      </div>
      {/* Centre podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#FFF2CC" className="z-10 -mb-5" />
        <CentrePodium className="z-0" />
        <h3>{orderedWinners[0]?.teamName}</h3>
      </div>
      {/* Right podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#E5D2F9" className="z-10  -mb-5" />
        <RightPodium className="z-0" />
        <h3>{orderedWinners[2]?.teamName}</h3>
      </div>
    </div>
  );
}
