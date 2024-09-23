import Lottie from "lottie-react";
import about from "../../animation/Animation - 1716899844977.json"

const About = () => {
    return (
        <div id="About" className="flex justify-center py-14 bg-bgcolor-2">
            <div className="container">
                <div className="flex items-center gap-10">
                    <div className="hidden md:block">
                        <Lottie className="md:w-[250px]" animationData={about} />;
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-center md:text-start text-lightcolor">About 
                            <span className="text-primarycolor"> Me</span>
                        </h1>
                        {/* <h2 className="my-5 text-3xl font-bold text-lightcolor">Full Stack 
                            <span className="text-primarycolor"> Developer</span>
                        </h2> */}
                        <p className="text-seconderycolor">
                            Abdulrahman Ahmed is a skilled full stack developer with experience in
                            both front-end and back-end technologies. Proficient in languages
                            such as JavaScript and frameworks like Reactjs and Nextjs, Abdulrahman specializes
                            in building dynamic, user-friendly web applications. 
                            With a deep understanding of database management, server-side logic,
                            and modern front-end development, he ensures that both the design
                            and functionality of his projects are seamless and efficient.
                            Passionate about creating scalable solutions, Abdulrahman is
                            committed to staying updated with the latest industry trends
                            and delivering high-quality, performant software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;