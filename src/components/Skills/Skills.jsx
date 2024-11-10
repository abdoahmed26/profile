/* eslint-disable react/style-prop-object */
import { mySkills } from "./MySkills";
import SkillsCom from "./SkillsCom"

const Skills = () => {
    const myskills = mySkills;
    return (
        <div id="Skills" className="flex justify-center py-14 bg-bgcolor-1">
            <div className="container">
                <div>
                    <h1 className="text-5xl font-bold text-center text-lightcolor">My 
                        <span className="text-primarycolor"> Skills</span>
                    </h1>
                    <div className="py-6 mt-5 rounded-xl bg-bgcolor-2">
                        <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4'>
                            {
                                myskills.map((skill, index) => (
                                    <SkillsCom key={index} image={skill.image} name={skill.name} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;