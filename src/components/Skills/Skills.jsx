/* eslint-disable react/style-prop-object */
import SkillsCom from "./SkillsCom"

const Skills = () => {
    return (
        <div id="Skills" className="flex justify-center py-14 bg-bgcolor-1">
            <div className="container">
                <div>
                    <h1 className="text-5xl font-bold text-center text-lightcolor">My 
                        <span className="text-primarycolor"> Skills</span>
                    </h1>
                    <div className="py-6 mt-5 rounded-xl bg-bgcolor-2">
                        <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4'>
                            <SkillsCom image={"https://skillicons.dev/icons?i=html"} name={"HTML"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=css"} name={"CSS"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=js"} name={"JavaScript"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=typescript"} name={"TypeScript"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=bootstrap"} name={"Bootstrap"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=tailwind"} name={"Tailwind CSS"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=react"} name={"React JS"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=redux"} name={"Redux Toolkit"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=next"} name={"Next JS"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=prisma"} name={"Prisma"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=materialui"} name={"Material UI"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=nodejs"} name={"Nodejs"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=expressjs"} name={"Expressjs"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=mongodb"} name={"Mongodb"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=github"} name={"GitHub"} style={"rounded-xl"} />
                            <SkillsCom image={"https://skillicons.dev/icons?i=git"} name={"Git"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;