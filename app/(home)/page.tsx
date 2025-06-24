import Faqs from "./_components/Faqs";
import Hero from "./_components/Hero";
import Opportunity from "./_components/Opportunity";
import Sponsors from "./_components/Sponsors";

export default function Home() {
  return (
    <main className="min-h-screen responsive-body">
      <Hero />
      <div className="gap-32 flex flex-col">
        <Opportunity />
        <Faqs />
        <Sponsors />
      </div>
    </main>
  );
}
