const Card = ({icon, title, desc, index}) => {
    return (
        <div 
            className='group relative p-8 text-center rounded-2xl bg-bgcolor-2 border-2 border-transparent hover:border-primarycolor/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primarycolor/20 overflow-hidden'
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primarycolor/0 via-primarycolor/0 to-primarycolor/0 group-hover:from-primarycolor/10 group-hover:via-primarycolor/5 group-hover:to-transparent transition-all duration-500"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primarycolor/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primarycolor/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-8 -translate-x-8"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-4">
                {/* Icon with animation */}
                <div className="flex justify-center">
                    <div className="relative p-4 rounded-2xl bg-primarycolor/10 group-hover:bg-primarycolor/20 transition-all duration-300 group-hover:rotate-6 transform">
                        <div className="group-hover:scale-110 transition-transform duration-300">
                            {icon}
                        </div>
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-primarycolor/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                </div>
                
                {/* Title */}
                <h1 className='text-2xl font-bold text-white group-hover:text-primarycolor transition-colors duration-300'>
                    {title}
                </h1>
                
                {/* Divider */}
                <div className="w-16 h-1 mx-auto bg-primarycolor/30 group-hover:bg-primarycolor group-hover:w-24 transition-all duration-300 rounded-full"></div>
                
                {/* Description */}
                <p className='text-seconderycolor leading-relaxed group-hover:text-seconderycolor/90'>
                    {desc}
                </p>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primarycolor/0 group-hover:border-primarycolor/50 rounded-tl-2xl transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primarycolor/0 group-hover:border-primarycolor/50 rounded-br-2xl transition-all duration-300"></div>
        </div>
    );
}

export default Card;