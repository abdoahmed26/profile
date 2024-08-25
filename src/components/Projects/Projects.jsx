import { useMemo, useState } from "react";
import ProjectCom from "./ProjectCom";
import { arrayProjects } from "./arrayProject";

const Projects = () => {
    const projects = useMemo(()=>{
        let total = []
        for(let i=arrayProjects.length-1;i>=0;i--){
            total.push(arrayProjects[i])
        }
        return total;
    },[]);
    const [search,setSearch] = useState("")
    return (
        <div id="Projects" className="flex justify-center py-14 bg-bgcolor-2">
            <div className="container">
                <div>
                    <h1 className="text-5xl font-bold text-center text-lightcolor">My 
                        <span className="text-primarycolor"> Projects</span>
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2 mt-5">
                        <button onClick={()=>setSearch("")} 
                        className={`p-1 px-3 ${search==="" ? "bg-primarycolor text-white" : "bg-white text-black"} rounded`}>
                            All
                        </button>
                        <button onClick={()=>setSearch("HTML")} className={`${search==="HTML" ? "bg-primarycolor text-white" : "bg-white text-black"} p-1 px-3 rounded`}>
                            HTML & CSS
                        </button>
                        <button onClick={()=>setSearch("JS")} className={`p-1 px-3 ${search==="JS" ? "bg-primarycolor text-white" : "bg-white text-black"} rounded`}>
                            JavaScript
                        </button>
                        <button onClick={()=>setSearch("React")} className={`p-1 px-3 ${search==="React" ? "bg-primarycolor text-white" : "bg-white text-black"} rounded`}>
                            React.js
                        </button>
                        <button onClick={()=>setSearch("Next")} className={`p-1 px-3 ${search==="Next" ? "bg-primarycolor text-white" : "bg-white text-black"} rounded`}>
                            Next.js
                        </button>
                    </div>
                    <div className="mt-8">
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {
                                projects.map((ele,index)=>{
                                    return ele.skills.includes(search) ? <ProjectCom key={index} image={ele.image}
                                    title={ele.title} desc={ele.desc} skills={ele.skills} url={ele.url} 
                                    data={ele.data} duration={"1000"}/>
                                    :null;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
