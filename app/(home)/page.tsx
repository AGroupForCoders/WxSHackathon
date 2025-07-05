import { FaqsSection } from "@/(features)/hero/faqs";
import { Hero } from "@/(features)/hero";
import { Opportunity } from "@/(features)/hero/opportunity";
import { Sponsors } from "@/(features)/hero/sponsors";
import { AboutStats, About } from "@/(features)/hero";
import { SeeMore } from "@/(features)/hero/more";

export default function Home() {
  return (
    <main className="min-h-screen responsive-body">
      <Hero />
      <div className="gap-32 flex flex-col mt-[-800px]">
        <AboutStats />
        <About />
        <Opportunity />
        <FaqsSection />
        <Sponsors />
        <SeeMore />
      </div>
    </main>
  );
}
