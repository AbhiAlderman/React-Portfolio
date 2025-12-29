import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="pt-24 px-4">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            This is a placeholder. We'll build the hero section and project grid next!
          </p>

          {/* Color palette demo */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Color Palette Preview:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border p-4 rounded-lg">
                <div className="text-foreground font-medium">Background</div>
              </div>
              <div className="bg-primary p-4 rounded-lg">
                <div className="text-primary-foreground font-medium">Primary</div>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-secondary-foreground font-medium">Secondary</div>
              </div>
              <div className="bg-accent p-4 rounded-lg">
                <div className="text-accent-foreground font-medium">Accent</div>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg">
                <div className="text-foreground font-medium">Card</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};