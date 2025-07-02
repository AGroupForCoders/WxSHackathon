import Image from "next/image";
import { Winner } from "@/(features)/winners";

interface IndividualWinnerProps {
  winner: Winner;
}

export default function IndividualWinner({ winner }: IndividualWinnerProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:gap-40 gap-20">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl text-gray-70">Team Members</h3>

        <ul className="list-inside">
          {(winner.members ?? []).map((member) => (
            <li key={member} className="text-lg">
              {member}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={`${winner.image}`}
        alt={`${winner.teamName} photo`}
        width={400}
        height={600}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  );
}
