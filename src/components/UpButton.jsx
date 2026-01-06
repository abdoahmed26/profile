import { ArrowUpToLine } from "lucide-react";
import { useState, useEffect } from "react";

const UpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button 
            onClick={scrollUp}
            className={`
                fixed z-50 p-3 text-white rounded-xl right-5 bottom-5 bg-primarycolor 
                hover:bg-primarycolor/90 hover:scale-110 shadow-lg shadow-primarycolor/30 
                transition-all duration-300 group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
            aria-label="Scroll to top"
        >
            <ArrowUpToLine 
                size={24} 
                className='text-white transition-transform duration-300 group-hover:-translate-y-1'
            />
        </button>
    );
}

export default UpButton;
