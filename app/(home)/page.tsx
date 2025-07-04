import { FaqsSection } from "@/(features)/hero/faqs";
import { Hero } from "@/(features)/hero";
import { Opportunity } from "@/(features)/hero/opportunity";
import { Sponsors } from "@/(features)/hero/sponsors";
import { AboutStats, About } from "@/(features)/hero";
import AboutGallery from "@/(features)/hero/components/visuals/AboutGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="gap-32 flex flex-col mt-[-800px] mb-32 overflow-hidden">
        <AboutStats />
        <div className="responsive-body">
          <About/>
        </div>
        <AboutGallery />
        <div className="responsive-body">
          <div className="gap-32 flex flex-col responsive-body">
            <Opportunity />
            <FaqsSection />
            <Sponsors />
          </div>
        </div>
      </div>
    </main>
  );
}
