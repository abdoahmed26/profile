const SkillsCom = ({ image, name, level }) => {
    return (
        <div className="relative p-6 transition-all duration-300 transform border border-transparent group rounded-xl bg-bgcolor-1 hover:bg-gradient-to-br hover:from-primarycolor/10 hover:to-transparent hover:border-primarycolor/30 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primarycolor/20">
            {/* Animated background glow */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-br from-primarycolor/0 to-primarycolor/0 group-hover:from-primarycolor/5 group-hover:to-transparent group-hover:opacity-100"></div>
            
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center space-y-3">
                {/* Icon container with rotation effect */}
                <div className="relative transition-transform duration-300 transform group-hover:rotate-6 group-hover:scale-110">
                    <img 
                        src={image} 
                        className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-lg" 
                        alt={`${name} icon`} 
                    />
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-primarycolor/20 blur-xl group-hover:opacity-100 -z-10"></div>
                </div>
                
                {/* Skill name */}
                <p className="text-sm font-bold text-center transition-colors duration-300 text-lightcolor sm:text-base group-hover:text-primarycolor">
                    {name}
                </p>
                
                {/* Progress bar */}
                {level && (
                    <div className="w-full">
                        <div className="w-full h-1.5 bg-bgcolor-2 rounded-full overflow-hidden">
                            <div 
                                className="h-full transition-all duration-700 ease-out origin-left transform scale-x-0 rounded-full bg-gradient-to-r from-primarycolor to-primarycolor/70 group-hover:scale-x-100"
                                style={{ width: `${level}%` }}
                            ></div>
                        </div>
                        <p className="mt-1 text-xs text-center transition-opacity duration-300 opacity-0 text-lightcolor/60 group-hover:opacity-100">
                            {level}%
                        </p>
                    </div>
                )}
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-10 h-10 transition-all duration-300 border-t-2 border-r-2 border-primarycolor/0 group-hover:border-primarycolor/50 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 transition-all duration-300 border-b-2 border-l-2 border-primarycolor/0 group-hover:border-primarycolor/50 rounded-bl-xl"></div>
        </div>
    );
}

export default SkillsCom;
