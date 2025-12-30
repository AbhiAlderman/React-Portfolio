import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import resume_pdf from "../../public/AbhiAlderman_Resume.pdf"

const navItems = [
    {name: "Home", href: "#home", homeHref: "/"},
    {name: "Projects", href: "#projects", homeHref: "/#projects"},
    {name: "Resume", href: resume_pdf},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/abhialderman/"},
    {name: "GitHub", href: "https://github.com/AbhiAlderman?tab=repositories"},
]

export const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <nav
        className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled
                ? "py-3 bg-background/90 backdrop-blur-md shadow-md border-b border-border"
                : "py-5 bg-background/50"
        )}
    >
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold flex items-center hover:opacity-80 transition-opacity" href={isHomePage ? "#home" : "/"}>
                <span className="relative z-10">
                    <span className="text-foreground">Abhi</span>
                    <span className="text-primary ml-2">Alderman</span>
                </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, key) => {
                    const isExternal = item.href.startsWith('http') || item.href.endsWith('.pdf');
                    const finalHref = isHomePage ? item.href : (item.homeHref || item.href);
                    return (
                        <a
                            key={key}
                            href={finalHref}
                            className="text-foreground/70 hover:text-accent font-medium transition-colors duration-300"
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                        >
                            {item.name}
                        </a>
                    );
                })}
                
                {/* Theme Toggle */}
                <ThemeToggle />
            </div>

            {/* mobile nav */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-foreground hover:bg-card transition-colors z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
                "flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => {
                        const isExternal = item.href.startsWith('http') || item.href.endsWith('.pdf');
                        const finalHref = isHomePage ? item.href : (item.homeHref || item.href);
                        return (
                            <a
                                key={key}
                                href={finalHref}
                                className="text-foreground/80 hover:text-accent font-medium transition-colors duration-300 text-center"
                                onClick={() => setIsMenuOpen(false)}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                    {/* Theme Toggle */}
                    <div className="flex justify-center">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}