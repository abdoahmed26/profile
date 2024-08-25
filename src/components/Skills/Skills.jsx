/* eslint-disable react/style-prop-object */
import html from "../../Images/Skills/html.svg"
import css from "../../Images/Skills/css.svg"
import javascript from "../../Images/Skills/javascript.svg"
import typescript from "../../Images/Skills/typescript.svg"
import bootstrap from "../../Images/Skills/bootstrap.svg"
import tailwind from "../../Images/Skills/Tailwind.png"
import ReactImge from '../../Images/Skills/react.svg';
import next from '../../Images/Skills/Nextjs.jpeg';
import material from '../../Images/Skills/MaterialUi.png';
import AngularImge from '../../Images/Skills/Angular.png';
import GitHubImge from '../../Images/Skills/GitHub.webp';
import GitImge from '../../Images/Skills/Git.svg';
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
                            <SkillsCom image={html} name={"HTML"} />
                            <SkillsCom image={css} name={"CSS"} />
                            <SkillsCom image={javascript} name={"JavaScript"} style={"rounded-xl"} />
                            <SkillsCom image={typescript} name={"TypeScript"} style={"rounded-xl"} />
                            <SkillsCom image={bootstrap} name={"Bootstrap"} />
                            <SkillsCom image={tailwind} name={"Tailwind CSS"} style={"rounded-xl"} />
                            <SkillsCom image={ReactImge} name={"React JS"} />
                            <SkillsCom image={next} name={"Next JS"} style={"rounded-xl"} />
                            <SkillsCom image={material} name={"Material UI"} style={"rounded-xl"} />
                            <SkillsCom image={AngularImge} name={"Angular (basics)"} />
                            <SkillsCom image={GitHubImge} name={"GitHub"} style={"rounded-xl"} />
                            <SkillsCom image={GitImge} name={"Git"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;