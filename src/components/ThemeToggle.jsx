import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl bg-primarycolor/10 hover:bg-primarycolor/20 border-2 border-primarycolor/30 hover:border-primarycolor/50 transition-all duration-300 hover:scale-110 group overflow-hidden shadow-md hover:shadow-lg"
            aria-label="Toggle theme"
        >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primarycolor/0 to-primarycolor/0 group-hover:from-primarycolor/10 group-hover:to-transparent transition-all duration-300"></div>
            
            {/* Icons with rotation animation */}
            <div className="relative w-5 h-5">
                <Sun 
                    size={20}
                    className={`absolute inset-0 text-primarycolor transition-all duration-500 ${
                        theme === 'light' 
                            ? 'rotate-0 opacity-100 scale-110' 
                            : 'rotate-90 opacity-0 scale-50'
                    }`}
                />
                <Moon 
                    size={20}
                    className={`absolute inset-0 text-primarycolor transition-all duration-500 ${
                        theme === 'dark' 
                            ? 'rotate-0 opacity-100 scale-110' 
                            : '-rotate-90 opacity-0 scale-50'
                    }`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;

