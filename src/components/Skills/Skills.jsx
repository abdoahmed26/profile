/* eslint-disable react/style-prop-object */
import { mySkills } from "./MySkills";
import SkillsCom from "./SkillsCom"

const Skills = () => {
    const categories = [
        { name: "Frontend Development", key: "frontend", icon: "💻" },
        { name: "Backend Development", key: "backend", icon: "⚙️" },
        { name: "Database", key: "database", icon: "🗄️" },
        { name: "Tools & Version Control", key: "tools", icon: "🛠️" }
    ];

    return (
        <div id="Skills" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-2">
            {/* Animated background elements */}
            <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primarycolor/5 blur-3xl animate-pulse"></div>
            <div className="absolute delay-700 rounded-full bottom-20 right-10 w-96 h-96 bg-primarycolor/5 blur-3xl animate-pulse"></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center">
                    <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
                        My 
                        <span className="text-primarycolor"> Skills</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-lightcolor/70">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
                </div>

                {/* Skills Categories */}
                <div className="space-y-12">
                    {categories.map((category, idx) => (
                        <div 
                            key={category.key}
                            className="animate-fadeIn"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{category.icon}</span>
                                <h2 className="text-2xl font-bold sm:text-3xl text-lightcolor">
                                    {category.name}
                                </h2>
                                <div className="flex-1 h-px ml-4 bg-gradient-to-r from-primarycolor/50 to-transparent"></div>
                            </div>

                            {/* Skills Grid */}
                            <div className="p-6 border shadow-xl sm:p-8 rounded-2xl bg-bgcolor-2/50 backdrop-blur-sm border-lightcolor/5">
                                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                    {mySkills[category.key].map((skill, index) => (
                                        <SkillsCom 
                                            key={index} 
                                            image={skill.image} 
                                            name={skill.name}
                                            level={skill.level}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-lightcolor/50">
                        Always learning and expanding my skillset 🚀
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;