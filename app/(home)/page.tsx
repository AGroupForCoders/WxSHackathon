import Faqs from "./_components/Faqs";
import Hero from "./_components/Hero";
import Opportunity from "./_components/Opportunity";
import Sponsors from "./_components/Sponsors";
import AboutStats from "./_components/visuals/AboutStats";
import About from "./_components/visuals/About";

export default function Home() {
  return (
    <main className="min-h-screen responsive-body">
      <Hero />
      <div className="gap-32 flex flex-col mt-[-800px]">
        <AboutStats/>
        <About/>
        <Opportunity />
        <Faqs />
        <Sponsors />
      </div>
    </main>
  );
}
