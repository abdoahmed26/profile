import Lottie from "lottie-react";
import about from "../../animation/Animation - 1716899844977.json"
import { Code2, Rocket, Target } from "lucide-react";

const About = () => {
    return (
        <div id="About" className="relative flex justify-center py-16 overflow-hidden bg-bgcolor-2">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
            
            <div className="container relative z-10">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
                    {/* Left Animation */}
                    <div className="relative flex items-center justify-center lg:w-1/3">
                        <div className="absolute inset-0 bg-primarycolor/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative p-6 rounded-3xl bg-bgcolor-1/50 backdrop-blur-sm border border-primarycolor/20 shadow-2xl">
                            <Lottie className="w-[220px] md:w-[280px]" animationData={about} />
                        </div>
                    </div>
                    
                    {/* Right Content */}
                    <div className="flex-1 space-y-5">
                        {/* Header */}
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-center lg:text-5xl md:text-left text-lightcolor">
                                About 
                                <span className="text-primarycolor"> Me</span>
                            </h1>
                            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primarycolor to-transparent md:mx-0"></div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-center md:text-2xl md:text-left text-lightcolor">
                            Full Stack 
                            <span className="text-primarycolor"> Developer</span>
                        </h2>
                        
                        {/* Description */}
                        <p className="text-base leading-relaxed text-center md:text-left text-seconderycolor">
                            Hi, I'm <span className="font-semibold text-lightcolor">Abdulrahman Ahmed</span>, a passionate full stack developer with <span className="text-primarycolor font-medium">2+ years</span> of experience. 
                            I specialize in building modern web applications using <span className="text-primarycolor font-medium">React.js</span>, <span className="text-primarycolor font-medium">Next.js</span>, and <span className="text-primarycolor font-medium">Node.js</span>.
                            Currently working at <span className="text-primarycolor font-medium">Corelia</span> and taking on freelance projects.
                        </p>

                        {/* Quick Highlights */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primarycolor/10 border border-primarycolor/30 hover:bg-primarycolor/20 transition-colors">
                                <Code2 size={18} className="text-primarycolor" />
                                <span className="text-sm font-medium text-lightcolor">Frontend & Backend</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primarycolor/10 border border-primarycolor/30 hover:bg-primarycolor/20 transition-colors">
                                <Target size={18} className="text-primarycolor" />
                                <span className="text-sm font-medium text-lightcolor">10+ Projects</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primarycolor/10 border border-primarycolor/30 hover:bg-primarycolor/20 transition-colors">
                                <Rocket size={18} className="text-primarycolor" />
                                <span className="text-sm font-medium text-lightcolor">2+ Years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;