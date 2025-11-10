import { useMemo, useState } from "react";
import ProjectCom from "./ProjectCom";
import { arrayProjects } from "./arrayProject";
import { Filter } from "lucide-react";

const Projects = () => {
    const projects = useMemo(()=>{
        let total = []
        for(let i=arrayProjects.length-1;i>=0;i--){
            total.push(arrayProjects[i])
        }
        return total;
    },[]);
    
    const [search, setSearch] = useState("");

    const filters = [
        { label: "All", value: "" },
        { label: "HTML & CSS", value: "HTML" },
        { label: "JavaScript", value: "JS" },
        { label: "React.js", value: "React" },
        { label: "Next.js", value: "Next" },
        { label: "Node.js", value: "Node" }
    ];

    const filteredProjects = projects.filter(ele => ele.skills.includes(search));

    return (
        <div id="Projects" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-2">
            {/* Background Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primarycolor/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primarycolor/5 rounded-full blur-3xl"></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
                        My 
                        <span className="text-primarycolor"> Projects</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-seconderycolor">
                        A showcase of my recent work and personal projects
                    </p>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
                </div>

                {/* Filter Section */}
                <div className="mb-10">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Filter size={20} className="text-primarycolor" />
                        <p className="text-sm font-semibold tracking-wider uppercase text-lightcolor">
                            Filter by Technology
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                onClick={() => setSearch(filter.value)} 
                                className={`
                                    group relative px-6 py-2.5 rounded-full font-semibold transition-all duration-300 
                                    ${search === filter.value 
                                        ? "bg-primarycolor text-white shadow-lg shadow-primarycolor/30 scale-105" 
                                        : "bg-bgcolor-1 text-lightcolor border-2 border-lightcolor/20 hover:border-primarycolor/50 hover:scale-105"
                                    }
                                `}
                            >
                                {filter.label}
                                {search === filter.value && (
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primarycolor/0 via-white/20 to-primarycolor/0 animate-pulse"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-seconderycolor">
                            Showing <span className="font-bold text-primarycolor">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="mt-10">
                    {filteredProjects.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {filteredProjects.map((ele, index) => (
                                <ProjectCom 
                                    key={index} 
                                    image={ele.image}
                                    title={ele.title} 
                                    desc={ele.desc} 
                                    skills={ele.skills} 
                                    url={ele.url} 
                                    data={ele.data} 
                                    duration={"1000"}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <p className="text-xl text-seconderycolor">
                                No projects found with this filter
                            </p>
                        </div>
                    )}
                </div>

                {/* View More Section */}
                {filteredProjects.length > 6 && (
                    <div className="mt-12 text-center">
                        <button className="px-6 py-3 font-semibold text-white transition-all duration-300 border-2 rounded-full border-primarycolor bg-primarycolor hover:bg-transparent hover:shadow-lg hover:shadow-primarycolor/30">
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
