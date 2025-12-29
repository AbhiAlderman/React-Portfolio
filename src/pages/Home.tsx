import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section - Coming next */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projects
          </h2>
          <p className="text-center text-foreground/70">
            Project grid will go here...
          </p>
        </div>
      </section>

      {/* Footer - Coming later */}
    </div>
  );
};