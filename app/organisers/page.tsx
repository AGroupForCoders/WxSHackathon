export default function OrganisersPage() {
  return (
    <main className="min-h-screen responsive-body">
      <div className="my-24 ">
        <h1 className="text-center font-bold text-6xl">Organisers</h1>
        <div className="w-full relative h-[1000px]">
          <Card />
        </div>
      </div>
    </main>
  );
}

function Card() {
  return (
    <div className="w-[400px] h-[500px] bg-white border-14 border-teal-500 rounded-[30px] shadow-lg" />
  );
}
