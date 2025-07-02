"use client";

import { useState } from "react";
import {
  pastWinners,
  YearDropdown,
  SpecialAwards,
  WinnersPodium,
} from "@/(features)/winners";
import { PastWinners } from "@/(features)/winners";

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
        <WinnersPodium
          orderedWinners={dataForSelectedYear.orderedWinners}
          year={selectedYear}
        />
        <SpecialAwards
          specialAwards={dataForSelectedYear.specialAwards}
          year={selectedYear}
        />
      </div>
    </main>
  );
}
