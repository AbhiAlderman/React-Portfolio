import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full",
                "bg-card border border-border shadow-md",
                "hover:scale-110 transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-accent" />
            ) : (
                <Moon className="h-5 w-5 text-primary" />
            )}
        </button>
    );
};