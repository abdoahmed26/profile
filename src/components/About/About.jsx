import Lottie from "lottie-react";
import about from "../../animation/Animation - 1716899844977.json"
import { Code2, Database, Layers, Zap } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: <Code2 className="w-6 h-6 text-primarycolor" />,
            title: "Modern Stack",
            description: "React, Next.js, Node.js"
        },
        {
            icon: <Database className="w-6 h-6 text-primarycolor" />,
            title: "Databases",
            description: "MongoDB, PostgreSQL, MySQL"
        },
        {
            icon: <Layers className="w-6 h-6 text-primarycolor" />,
            title: "Full Stack",
            description: "Frontend & Backend"
        },
        {
            icon: <Zap className="w-6 h-6 text-primarycolor" />,
            title: "Fast Delivery",
            description: "Quality & Performance"
        }
    ];

    return (
        <div id="About" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-2">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
            
            <div className="container relative z-10">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                    {/* Left Animation */}
                    <div className="relative flex items-center justify-center lg:w-1/3">
                        <div className="absolute inset-0 bg-primarycolor/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative p-8 rounded-3xl bg-bgcolor-1/50 backdrop-blur-sm border border-primarycolor/20 shadow-2xl">
                            <Lottie className="w-[250px] md:w-[300px]" animationData={about} />
                        </div>
                    </div>
                    
                    {/* Right Content */}
                    <div className="flex-1 space-y-6">
                        {/* Header */}
                        <div className="space-y-3">
                            <h1 className="text-5xl font-bold text-center lg:text-6xl md:text-left text-lightcolor">
                                About 
                                <span className="text-primarycolor"> Me</span>
                            </h1>
                            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primarycolor to-transparent md:mx-0"></div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-center md:text-3xl md:text-left text-lightcolor">
                            Full Stack 
                            <span className="text-primarycolor"> Developer</span>
                        </h2>
                        
                        {/* Description */}
                        <div className="space-y-4 text-base leading-relaxed text-center md:text-left text-seconderycolor md:text-lg">
                            <p>
                                <span className="font-semibold text-lightcolor">Abdulrahman Ahmed</span> is a skilled full stack developer with experience in
                                both front-end and back-end technologies. Proficient in languages
                                such as <span className="text-primarycolor font-medium">JavaScript</span> and frameworks like <span className="text-primarycolor font-medium">React.js</span> and <span className="text-primarycolor font-medium">Next.js</span>, Abdulrahman specializes
                                in building dynamic, user-friendly web applications.
                            </p>
                            <p>
                                With a deep understanding of database management, server-side logic,
                                and modern front-end development, he ensures that both the design
                                and functionality of his projects are seamless and efficient.
                            </p>
                            <p className="font-medium text-lightcolor">
                                Passionate about creating scalable solutions and delivering high-quality, performant software.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-4">
                            {highlights.map((item, index) => (
                                <div 
                                    key={index}
                                    className="group p-4 rounded-xl bg-bgcolor-1 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primarycolor/20"
                                >
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <div className="p-2 rounded-lg bg-primarycolor/10 group-hover:bg-primarycolor/20 transition-colors">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-sm font-bold text-lightcolor">{item.title}</h3>
                                        <p className="text-xs text-seconderycolor">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats or Badge */}
                        <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primarycolor/10 border border-primarycolor/30">
                                <span className="text-2xl font-bold text-primarycolor">2+</span>
                                <span className="text-sm text-seconderycolor">Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primarycolor/10 border border-primarycolor/30">
                                <span className="text-2xl font-bold text-primarycolor">20+</span>
                                <span className="text-sm text-seconderycolor">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;