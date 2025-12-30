import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Palette = () => {
  return (
    <div className="min-h-screen bg-background">
        <NavBar />
        <section className="py-24 px-4">
            <div className="container max-w-4xl">
            <h1 className="text-3xl font-bold mb-2 text-center text-foreground">Hey! You're not supposed to be here!</h1>
            <p className="text-center text-foreground/70 mb-8">This is my super secret page I use to test out color palettes. Congrats, you found the secret! Now go back and <a href="/#projects" className="text-primary hover:underline">look at my projects</a>!</p>
            <h2 className="text-3xl font-bold mb-2 text-center text-foreground">Color Palette Preview</h2>
            <p className="text-center text-foreground/70 mb-8">Background colors with their corresponding text (foreground) colors</p>
            <div className="flex justify-center mb-8">
            <ThemeToggle />
            </div>
            {/* Background + Foreground Pairings */}
            <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Background & Text Color Pairings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Primary */}
                    <div className="bg-primary p-8 rounded-lg shadow-lg border border-border">
                        <div className="text-primary-foreground font-bold text-lg mb-2">Primary Background</div>
                        <div className="text-primary-foreground/90 text-sm mb-3">with primary-foreground text</div>
                        <div className="text-primary-foreground/70 text-xs">Used for: Buttons, CTAs, important elements</div>
                    </div>

                    {/* Secondary */}
                    <div className="bg-secondary p-8 rounded-lg shadow-lg border border-border">
                        <div className="text-secondary-foreground font-bold text-lg mb-2">Secondary Background</div>
                        <div className="text-secondary-foreground/90 text-sm mb-3">with secondary-foreground text</div>
                        <div className="text-secondary-foreground/70 text-xs">Used for: Alt buttons, badges, highlights</div>
                    </div>

                    {/* Accent */}
                    <div className="bg-accent p-8 rounded-lg shadow-lg border border-border">
                        <div className="text-accent-foreground font-bold text-lg mb-2">Accent Background</div>
                        <div className="text-accent-foreground/90 text-sm mb-3">with accent-foreground text</div>
                        <div className="text-accent-foreground/70 text-xs">Used for: Emphasis, alerts, special elements</div>
                    </div>

                    {/* Background/Card */}
                    <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                        <div className="text-foreground font-bold text-lg mb-2">Card Background</div>
                        <div className="text-foreground/90 text-sm mb-3">with foreground text</div>
                        <div className="text-foreground/70 text-xs">Used for: Cards, panels, elevated surfaces</div>
                    </div>
                </div>
            </div>

            {/* Individual Color Swatches */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">All Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-background border border-border p-6 rounded-lg">
                        <div className="text-foreground font-medium">background</div>
                        <div className="text-foreground/60 text-sm mt-1">Main page bg</div>
                    </div>
                    <div className="bg-foreground p-6 rounded-lg">
                        <div className="text-background font-medium">foreground</div>
                        <div className="text-background/80 text-sm mt-1">Main text color</div>
                    </div>
                    <div className="bg-primary p-6 rounded-lg">
                        <div className="text-primary-foreground font-medium">primary</div>
                        <div className="text-primary-foreground/80 text-sm mt-1">Buttons, links</div>
                    </div>
                    <div className="bg-primary-foreground p-6 rounded-lg border border-border">
                        <div className="text-primary font-medium">primary-foreground</div>
                        <div className="text-primary/80 text-sm mt-1">Text on primary</div>
                    </div>
                    <div className="bg-secondary p-6 rounded-lg">
                        <div className="text-secondary-foreground font-medium">secondary</div>
                        <div className="text-secondary-foreground/80 text-sm mt-1">Alt elements</div>
                    </div>
                    <div className="bg-secondary-foreground p-6 rounded-lg">
                        <div className="text-secondary font-medium">secondary-foreground</div>
                        <div className="text-secondary/80 text-sm mt-1">Text on secondary</div>
                    </div>
                    <div className="bg-accent p-6 rounded-lg">
                        <div className="text-accent-foreground font-medium">accent</div>
                        <div className="text-accent-foreground/80 text-sm mt-1">Emphasis</div>
                    </div>
                    <div className="bg-accent-foreground p-6 rounded-lg border border-border">
                        <div className="text-accent font-medium">accent-foreground</div>
                        <div className="text-accent/80 text-sm mt-1">Text on accent</div>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-lg">
                        <div className="text-foreground font-medium">card</div>
                        <div className="text-foreground/60 text-sm mt-1">Card surfaces</div>
                    </div>
                    <div className="border-4 border-border p-6 rounded-lg bg-background">
                        <div className="text-foreground font-medium">border</div>
                        <div className="text-foreground/60 text-sm mt-1">Dividers</div>
                    </div>
                </div>
            </div>

            {/* Text Color Explanation */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-foreground">How Text Colors Work</h3>
                <ul className="space-y-2 text-foreground/90 text-sm">
                    <li><span className="font-mono text-primary">--foreground</span>: Main text color used on background/card surfaces</li>
                    <li><span className="font-mono text-primary">--primary-foreground</span>: Text color with good contrast on primary backgrounds</li>
                    <li><span className="font-mono text-primary">--secondary-foreground</span>: Text color with good contrast on secondary backgrounds</li>
                    <li><span className="font-mono text-primary">--accent-foreground</span>: Text color with good contrast on accent backgrounds</li>
                </ul>
                <p className="mt-4 text-foreground/70 text-xs italic">
                    Tip: The pattern is {"{"}color{"}"}-foreground is the text color to use on {"{"}color{"}"} backgrounds for optimal readability.
                </p>
            </div>
            </div>
        </section>
      </div>
);
};