import {
  CentrePodium,
  LeftPodium,
  RightPodium,
  PodiumStar,
} from "@/assets/svg/winners/Podiums";

export default function WinnersPodium() {
  return (
    <div className="flex flex-row items-end justify-center w-full gap-10">
      {/* Left podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#DAF1EB" className="z-10  mb-[-20px]" />
        <LeftPodium className="z-0" />
      </div>
      {/* Centre podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#FFF2CC" className="z-10  mb-[-26px]" />
        <CentrePodium className="z-0" />
      </div>
      {/* Right podium */}
      <div className="flex flex-col items-center">
        <PodiumStar color="#E5D2F9" className="z-10  mb-[-26px]" />
        <RightPodium className="z-0" />
      </div>
    </div>
  );
}
