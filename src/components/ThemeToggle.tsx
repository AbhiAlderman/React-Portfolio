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
                "p-2 rounded-md",
                "text-foreground/70 hover:text-accent",
                "transition-colors duration-300",
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    );
};