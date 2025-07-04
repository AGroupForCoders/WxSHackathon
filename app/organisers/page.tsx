import { OrganisersCard } from "@/(features)/organisers";
export default function OrganisersPage() {
  return (
    <main className="min-h-screen responsive-body">
      <div className="my-24 ">
        <h1 className="text-center font-bold text-6xl">Organisers</h1>
        <div className="w-full relative h-[1000px]">
          <OrganisersCard />
        </div>
      </div>
    </main>
  );
}

