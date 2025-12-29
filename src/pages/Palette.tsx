import { ThemeToggle } from "../components/ThemeToggle";

export const Palette = () => {
  return (
    <div className="min-h-screen">
        <ThemeToggle />
        <section className="py-12 px-4 bg-card">
            <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Color Palette Preview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-background border border-border p-6 rounded-lg">
                <div className="text-foreground font-medium">Background</div>
                <div className="text-foreground/60 text-sm mt-1">Main bg color</div>
                </div>
                <div className="bg-primary p-6 rounded-lg">
                <div className="text-primary-foreground font-medium">Primary</div>
                <div className="text-primary-foreground/80 text-sm mt-1">Buttons, links</div>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                <div className="text-secondary-foreground font-medium">Secondary</div>
                <div className="text-secondary-foreground/80 text-sm mt-1">Alt buttons, badges</div>
                </div>
                <div className="bg-accent p-6 rounded-lg">
                <div className="text-accent-foreground font-medium">Accent</div>
                <div className="text-accent-foreground/80 text-sm mt-1">Emphasis, alerts</div>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg">
                <div className="text-foreground font-medium">Card</div>
                <div className="text-foreground/60 text-sm mt-1">Card backgrounds</div>
                </div>
                <div className="border-4 border-border p-6 rounded-lg bg-background">
                <div className="text-foreground font-medium">Border</div>
                <div className="text-foreground/60 text-sm mt-1">Outlines, dividers</div>
                </div>
            </div>
            </div>
        </section>
      </div>
);
};