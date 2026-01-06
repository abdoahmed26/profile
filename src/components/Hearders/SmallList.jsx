import React from 'react';
import { Home, User, Code, Briefcase, FolderGit2, Award, Mail } from 'lucide-react';

const SmallList = ({isOpen, onClose}) => {
    const navLinks = [
        { name: "Home", href: "#", icon: <Home size={18} /> },
        { name: "About", href: "#About", icon: <User size={18} /> },
        { name: "Experience", href: "#Experience", icon: <Briefcase size={18} /> },
        { name: "Skills", href: "#Skills", icon: <Code size={18} /> },
        { name: "Services", href: "#Services", icon: <Briefcase size={18} /> },
        { name: "Projects", href: "#Projects", icon: <FolderGit2 size={18} /> },
        { name: "Contact", href: "#Contact", icon: <Mail size={18} /> }
    ];

    return (
        <div 
            className={`
                fixed top-16 right-4 z-50 w-64 rounded-2xl bg-bgcolor-2/98 backdrop-blur-lg border-2 border-primarycolor/30 shadow-2xl overflow-hidden
                transition-all duration-300 origin-top-right
                ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
            `}
        >
            <ul className="flex flex-col p-2 space-y-1 list-none">
                {navLinks.map((link, index) => (
                    <li key={index} style={{ animationDelay: `${index * 50}ms` }}>
                        <a
                            href={link.href}
                            onClick={onClose}
                            className='group flex items-center gap-3 px-4 py-3 rounded-lg text-lightcolor hover:text-primarycolor hover:bg-primarycolor/15 transition-all duration-300 hover:translate-x-1'
                        >
                            <div className="p-1.5 rounded-md bg-primarycolor/15 group-hover:bg-primarycolor/25 transition-colors">
                                {link.icon}
                            </div>
                            <span className="font-medium">{link.name}</span>
                            <div className="ml-auto w-0 h-0.5 bg-primarycolor group-hover:w-4 transition-all duration-300"></div>
                        </a>
                    </li>
                ))}
            </ul>
            
            {/* Bottom decoration */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
        </div>
    );
}

export default SmallList;