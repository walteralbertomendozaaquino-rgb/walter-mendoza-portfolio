import Hero from "./components/Hero";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="fixed left-0 top-0 -z-10 h-full w-full bg-background/50 radial-gradient(circle_farthest-corner_at_10%_20%,rgba(37,99,235,0.05)_0%,rgba(0,0,0,0)_90%)"></div>

      <Hero />
      <About />
      <ProjectShowcase />
      <TechStack />
      <Footer />
    </main>
  );
}
