import { FaqsSection } from "@/(features)/hero/faqs";
import { Hero } from "@/(features)/hero";
import { Opportunity } from "@/(features)/hero/opportunity";
import { Sponsors } from "@/(features)/hero/sponsors";
import { AboutStats, About } from "@/(features)/hero";

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
      </div>
    </main>
  );
}
