import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { ProjectGrid } from "../components/ProjectGrid";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Projects
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in software development and technology.
          </p>
          <ProjectGrid />
        </div>
      </section>

      {/* Footer - Coming later */}
    </div>
  );
};