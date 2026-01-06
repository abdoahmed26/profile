/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const LargeNav = () => {
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#About" },
        { name: "Experience", href: "#Experience" },
        { name: "Skills", href: "#Skills" },
        { name: "Services", href: "#Services" },
        { name: "Projects", href: "#Projects" },
        { name: "Contact", href: "#Contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.replace('#', ''));
            const currentSection = sections.find(section => {
                if (section === '') return window.scrollY < 100;
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(currentSection || '');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hidden lg:block">
            <ul className="flex items-center gap-1 list-none">
                {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                        <li key={index}>
                            <a
                                href={link.href}
                                className={`
                                    group relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                                    ${isActive 
                                        ? 'text-primarycolor bg-primarycolor/15 shadow-sm' 
                                        : 'text-lightcolor hover:text-primarycolor hover:bg-primarycolor/10'
                                    }
                                `}
                            >
                                {link.name}
                                {/* Underline animation */}
                                <span className={`
                                    absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primarycolor transition-all duration-300
                                    ${isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'}
                                `}></span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LargeNav;
