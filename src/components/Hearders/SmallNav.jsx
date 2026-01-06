import React, { useState } from 'react';
import SmallList from './SmallList';
import { Menu, X } from 'lucide-react';

const SmallNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='lg:hidden'>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='relative p-2 rounded-lg bg-primarycolor/10 hover:bg-primarycolor/20 border border-primarycolor/30 hover:border-primarycolor/50 transition-all duration-300 shadow-sm hover:shadow-md'
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-primarycolor" />
                ) : (
                    <Menu className="w-6 h-6 text-primarycolor" />
                )}
            </button>

            {/* Mobile Menu */}
            <SmallList isOpen={isOpen} onClose={() => setIsOpen(false)} />

            {/* Backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}

export default SmallNav;