import { OrganisersCard } from "@/(features)/organisers";
export default function OrganisersPage() {
  return (
    <main className="min-h-screen responsive-body">
      <div className="my-24 ">
        <h1 className="text-center font-bold text-6xl">Organisers</h1>
        <div className="w-full relative h-[1000px]">
          <OrganisersCard className="bottom-0 left-1/2 -translate-x-1/2 z-50" />
          <OrganisersCard className="bottom-95 left-1/2 -translate-x-1/2 z-40" />
          <OrganisersCard className="right-8 top-15 rotate-[4.5deg] z-30" />
          <OrganisersCard className="right-5 bottom-30 rotate-[9deg] z-40" />
          <OrganisersCard className="left-8 top-15 -rotate-[4.5deg] z-30" />
          <OrganisersCard className="left-5 bottom-30 -rotate-[9deg] z-40" />
        </div>
      </div>
    </main>
  );
}
