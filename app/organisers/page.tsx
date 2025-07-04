import { OrganisersCard } from "@/(features)/organisers";
export default function OrganisersPage() {
  return (
    <main className="min-h-screen responsive-body">
      <div className="my-24 ">
        <h1 className="text-center font-bold text-6xl">Organisers</h1>
        <div className="w-full relative h-[1000px]">
          <OrganisersCard className="bottom-0 left-0 " />
          <OrganisersCard className="bottom-0 right-0" backgroundColor="sesa" />
          <OrganisersCard className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <OrganisersCard className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <OrganisersCard className="bottom-0 left-0 " />
          <OrganisersCard className="bottom-0 left-0 " />
        </div>
      </div>
    </main>
  );
}
