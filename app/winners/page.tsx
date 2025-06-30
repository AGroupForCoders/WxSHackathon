"use client";
import WinnersPodium from "./_components/WinnersPodium";
import { useState } from "react";
import YearDropdown from "./_components/YearDropdown";
import SpecialAwards from "./_components/SpecialAwards";

export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const years = ["2024", "2023", "2022", "2021"];

  return (
    <main className="min-h-screen">
      <div className="my-24 h-128 flex flex-col items-center gap-y-5  ">
        <h1 className="text-6xl font-bold text-center">Past winners</h1>
        <YearDropdown
          value={selectedYear}
          options={years}
          onChange={setSelectedYear}
        />
        <WinnersPodium />
        <SpecialAwards />
      </div>
    </main>
  );
}
