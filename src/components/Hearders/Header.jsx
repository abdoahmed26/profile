/* eslint-disable jsx-a11y/anchor-is-valid */
import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";
import ThemeToggle from "../ThemeToggle";
import { Code2 } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-bgcolor-2/95 backdrop-blur-md shadow-xl shadow-primarycolor/5' 
                    : 'bg-bgcolor-2'
            }`}
        >
            {/* Top accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
            
            <div className="container py-4 mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="p-2 transition-colors duration-300 rounded-lg bg-primarycolor/10 group-hover:bg-primarycolor">
                            <Code2 className="transition-colors text-primarycolor group-hover:text-white" size={24} />
                        </div>
                        <h1 className="text-2xl font-bold md:text-3xl text-lightcolor">
                            My 
                            <span className="text-primarycolor"> Portfolio</span>
                        </h1>
                    </a>
                    
                    {/* Navigation & Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <nav>
                            <LargeNav />
                            <SmallNav />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
