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
                        <h2 className="my-5 text-3xl font-bold text-lightcolor">Frontend 
                            <span className="text-primarycolor"> Developer</span>
                        </h2>
                        <p className="text-seconderycolor">
                            Iam a frontend web developer .I can provide clean code 
                            and pixel perfect designer . I also make the website more & more
                            interactive with web animations . A responsive design makes
                            your webiste available on all devices .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;