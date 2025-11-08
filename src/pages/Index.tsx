import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Workflow } from "@/components/Workflow";
import { Demo } from "@/components/Demo";
import { Datasets } from "@/components/Datasets";
import { Models } from "@/components/Models";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Workflow />
      <Demo />
      <Datasets />
      <Models />
      <Footer />
    </main>
  );
};

export default Index;
