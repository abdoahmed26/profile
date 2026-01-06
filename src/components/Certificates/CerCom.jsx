import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Award, ZoomIn } from 'lucide-react';
import { useState } from 'react';
AOS.init();

const CerCom = ({image, data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div 
                data-aos={data}  
                data-aos-duration="1000" 
                className="group relative rounded-2xl overflow-hidden bg-bgcolor-2 border-2 border-transparent hover:border-primarycolor/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primarycolor/20 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                    <img 
                        src={image} 
                        alt="Certificate" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bgcolor-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="p-4 bg-primarycolor rounded-full">
                                <ZoomIn size={32} className="text-white" />
                            </div>
                            <p className="text-white font-semibold text-lg px-4">Click to View Full</p>
                        </div>
                    </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 p-2 bg-primarycolor rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award size={20} className="text-white" />
                </div>

                {/* Border Accent */}
                <div className="absolute inset-0 border-4 border-primarycolor/0 group-hover:border-primarycolor/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>

            {/* Modal for Full View */}
            {isModalOpen && (
                <div 
                    className="fixed top-16 inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-4 z-10 p-2 bg-primarycolor rounded-full hover:bg-primarycolor/80 transition-colors"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex items-center justify-center">
                            <img 
                                src={image} 
                                alt="Certificate Full View" 
                                className="w-auto h-[85vh] rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CerCom;
