import { notFound } from "next/navigation";
import { pastWinners, PastWinners, Winner } from "@/(features)/winners";
import { slugify } from "@/utils/slugify";
import IndividualWinner from "../../../src/(features)/winners/components/[...slug]/IndividualWinner";

export default async function TeamDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug || slug.length !== 2) return notFound();

  const [year, teamSlug] = slug;
  const decodedSlug = decodeURIComponent(teamSlug);

  const yearToIndex: Record<string, number> = {
    "2024": 0,
    "2023": 1,
    "2022": 2,
    "2021": 3,
  };
  const yearIndex = yearToIndex[slug[0]];
  if (yearIndex === undefined) return notFound();

  const data: PastWinners = pastWinners[yearIndex];
  const allWinners: Winner[] = [...data.orderedWinners, ...data.specialAwards];

  const winner = allWinners.find((w) => slugify(w.teamName) === decodedSlug);
  if (!winner) return notFound();

  const placeBgMap: Record<string, string> = {
    "1st Place": "yoyo-yellow-10",
    "2nd Place": "sesa-teal-10",
    "3rd Place": "andrew-amethyst-10",
  };
  const bgColorClass = placeBgMap[winner.place] || "gray-10";

  return (
    <>
      <main className="min-h-screen">
        <div className="my-24 h-128 flex flex-col items-center gap-y-5 ">
          <h1 className="text-5xl font-bold">{winner.teamName}</h1>
          <div className="flex flex-row gap-2">
            <p className={`border rounded-3xl py-1 px-4 bg-${bgColorClass}`}>
              {winner.place}
            </p>
            <p className="border rounded-3xl py-1 px-4">{year}</p>
          </div>

          <IndividualWinner winner={winner} />
        </div>
      </main>
    </>
  );
}
