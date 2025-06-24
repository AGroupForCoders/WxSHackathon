import Hero from "./_components/Hero";
import Opportunity from "./_components/Opportunity";

export default function Home() {
  return (
    <main className="min-h-screen responsive-body">
      <Hero />
      <Opportunity />
      <div className="h-128">Placeholder spacing</div>
    </main>
  );
}
