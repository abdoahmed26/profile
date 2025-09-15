import mycv from "../Images/mycv.pdf";
import facebook from "../Images/facebook_lcon.png"
import whatsApp from "../Images/download (1).jpg"
import instagram from "../Images/instgram-icon.png"
import linkedin from "../Images/download (1).png"
import github from "../Images/github_icon.png"
import Lottie from "lottie-react";
import laptop from "../animation/Animation - 1716757935563.json"
import { TypeAnimation } from "react-type-animation";

const Body = () => {
    return (
        <div className='flex justify-center py-10 md:py-5 bg-bgcolor-1'>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <p className='text-xl text-seconderycolor'>Hello , my name is</p>
                        <h1 className='my-2 text-4xl font-bold text-lightcolor'>Abdulrahman 
                            <span className='text-primarycolor'> Ahmed</span>
                        </h1>
                        <h2 className='my-4 text-2xl font-bold text-lightcolor'>I'm a 
                            <span className='text-primarycolor'> 
                            <TypeAnimation className="ml-1"
                                sequence={[
                                    'Full Stack Developer',
                                    1000,
                                    'Mern Stack Developer',
                                    1000,
                                    'Front-End Developer',
                                    1000,
                                    'Back-End Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                // style={{ fontSize: '24px', display: 'inline-block' }}
                                repeat={Infinity}
                                />
                            </span>
                        </h2>
                        <div className='my-6'>
                            <a className='px-4 py-2 text-white border-2 rounded-full border-primarycolor bg-primarycolor hover:bg-bgcolor-1'
                            href={mycv} download="Abdulrahman_Ahmed_CV.pdf" >
                                Download My CV
                            </a>
                        </div>
                        <div className="flex gap-6 mt-8">
                            <a href="https://www.facebook.com/profile.php?id=100029822832042" rel="noreferrer" target="_blank">
                                <img className="duration-300 w-7 h-7 hover:scale-125" src={facebook} alt="" />
                            </a>
                            <a href="https://wa.me/+0201207583096" rel="noreferrer" target="_blank">
                                <img className="duration-300 rounded-full w-7 h-7 hover:scale-125" src={whatsApp} alt="" />
                            </a>
                            <a href="https://www.instagram.com/abdo26.6/" rel="noreferrer" target="_blank" >
                                <img className="duration-300 w-7 h-7 hover:scale-125" src={instagram} alt="" />
                            </a>
                            <a href="https://linkedin.com/in/abdelrahman-ahmed-460873357" rel="noreferrer" target="_blank">
                                <img className="duration-300 rounded w-7 h-7 hover:scale-125" src={linkedin} alt="" />
                            </a>
                            <a href="https://github.com/abdoahmed26" rel="noreferrer" target="_blank">
                                <img className="duration-300 w-7 h-7 hover:scale-125" src={github} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Lottie className="w-[400px]" animationData={laptop} />;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;