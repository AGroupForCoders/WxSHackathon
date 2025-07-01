"use client";
import WinnersPodium from "./_components/WinnersPodium";
import { useState } from "react";
import YearDropdown from "./_components/YearDropdown";
import SpecialAwards from "./_components/SpecialAwards";
import { pastWinners } from "./_data/pastWinners";
import { PastWinners } from "@/types/WinnerType";

export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const years = ["2024", "2023", "2022", "2021"];

  const dataForSelectedYear: PastWinners | undefined = pastWinners.find(
    (entry) => entry.year.toString() === selectedYear
  );

  if (!dataForSelectedYear) {
    return (
      <div className="text-center mt-10">No data found for this year.</div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="my-24 h-128 flex flex-col items-center gap-y-5  ">
        <h1 className="text-6xl font-bold text-center">Past winners</h1>
        <YearDropdown
          value={selectedYear}
          options={years}
          onChange={setSelectedYear}
        />
        <WinnersPodium orderedWinners={dataForSelectedYear.orderedWinners} />
        <SpecialAwards specialAwards={dataForSelectedYear.specialAwards} />
      </div>
    </main>
  );
}
