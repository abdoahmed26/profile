import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "Corelia",
            type: "Full-time",
            location: "Hybrid",
            period: "2025 - Present",
            duration: "Present",
            description: "Working with React.js and Next.js to build modern, scalable web applications. Focusing on creating exceptional user experiences with cutting-edge technologies.",
            technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
            color: "from-blue-500 to-cyan-500",
            current: true
        },
        {
            title: "Full Stack Developer",
            company: "Freelancer",
            type: "Freelance",
            location: "Remote",
            period: "2024 - Present",
            duration: "2+ year",
            description: "Developing full-stack web applications for clients worldwide. Building custom solutions using modern web technologies and delivering high-quality, performant applications.",
            technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "My SQL"],
            color: "from-primarycolor to-emerald-600",
            current: true
        }
    ];

    return (
        <div id="Experience" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-1">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primarycolor/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primarycolor/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Briefcase size={40} className="text-primarycolor" />
                        <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
                            My 
                            <span className="text-primarycolor"> Experience</span>
                        </h1>
                    </div>
                    <p className="max-w-2xl mx-auto text-lg text-seconderycolor">
                        Professional journey and work experience in web development
                    </p>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primarycolor via-primarycolor/50 to-transparent"></div>

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primarycolor border-4 border-bgcolor-1 z-10 shadow-lg shadow-primarycolor/50">
                                    <div className="absolute inset-0 rounded-full bg-primarycolor animate-ping opacity-75"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="group relative p-6 md:p-8 rounded-2xl bg-bgcolor-2 border-2 border-transparent hover:border-primarycolor/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primarycolor/20">
                                        {/* Gradient Header Background */}
                                        <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${exp.color}`}></div>
                                        
                                        {/* Current Badge */}
                                        {exp.current && (
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primarycolor/20 border border-primarycolor/40 flex items-center gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-primarycolor animate-pulse"></div>
                                                <span className="text-xs font-semibold text-primarycolor">Current</span>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="space-y-4 pt-2">
                                            {/* Title & Company */}
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-lightcolor group-hover:text-primarycolor transition-colors duration-300">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-xl font-semibold text-primarycolor mt-1">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            {/* Meta Info */}
                                            <div className="flex flex-wrap gap-4 text-sm text-seconderycolor">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={16} className="text-primarycolor" />
                                                    <span>{exp.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <TrendingUp size={16} className="text-primarycolor" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin size={16} className="text-primarycolor" />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="px-2 py-0.5 rounded-full bg-primarycolor/10 text-primarycolor font-medium">
                                                    {exp.type}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-seconderycolor leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-lightcolor">Technologies:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, techIndex) => (
                                                        <span 
                                                            key={techIndex}
                                                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primarycolor/10 text-primarycolor border border-primarycolor/20 hover:bg-primarycolor/20 transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primarycolor/0 group-hover:border-primarycolor/50 rounded-br-2xl transition-all duration-300"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="p-6 rounded-xl bg-bgcolor-2 border border-primarycolor/20 text-center hover:border-primarycolor/40 transition-colors">
                        <p className="text-4xl font-bold text-primarycolor mb-2">2+</p>
                        <p className="text-seconderycolor">Years Experience</p>
                    </div>
                    <div className="p-6 rounded-xl bg-bgcolor-2 border border-primarycolor/20 text-center hover:border-primarycolor/40 transition-colors">
                        <p className="text-4xl font-bold text-primarycolor mb-2">1</p>
                        <p className="text-seconderycolor">Companies Worked</p>
                    </div>
                    <div className="p-6 rounded-xl bg-bgcolor-2 border border-primarycolor/20 text-center hover:border-primarycolor/40 transition-colors">
                        <p className="text-4xl font-bold text-primarycolor mb-2">10+</p>
                        <p className="text-seconderycolor">Projects Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

