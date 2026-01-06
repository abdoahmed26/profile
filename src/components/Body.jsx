import mycv from "../Images/mycv.pdf";
import facebook from "../Images/facebook_lcon.png"
import whatsApp from "../Images/download (1).jpg"
import instagram from "../Images/instgram-icon.png"
import linkedin from "../Images/download (1).png"
import github from "../Images/github_icon.png"
import Lottie from "lottie-react";
import laptop from "../animation/Animation - 1716757935563.json"
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight } from "lucide-react";

const Body = () => {
    return (
        <div className='relative flex justify-center overflow-hidden bg-bgcolor-1 pt-24 pb-14 md:pt-32 md:pb-20'>
            {/* Animated Background Elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-primarycolor/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primarycolor/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="container relative z-10">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        {/* Greeting Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primarycolor/10 border border-primarycolor/30 backdrop-blur-sm">
                            <span className="text-2xl animate-wave">👋</span>
                            <p className='text-lg font-medium text-seconderycolor'>Hello, my name is</p>
                        </div>
                        
                        {/* Name with Gradient */}
                        <h1 className='text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-lightcolor animate-fadeIn'>
                            Abdulrahman 
                            <span className='block mt-2 text-transparent bg-gradient-to-r from-primarycolor to-primarycolor/60 bg-clip-text'> 
                                Ahmed
                            </span>
                        </h1>
                        
                        {/* Animated Role */}
                        <div className='flex flex-wrap items-center justify-center gap-2 md:justify-start'>
                            <h2 className='text-2xl font-bold md:text-3xl text-lightcolor'>I'm a</h2>
                            <div className='inline-flex items-center px-4 py-2 rounded-lg bg-primarycolor/20 border border-primarycolor/30'>
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        1500,
                                        'MERN Stack Developer',
                                        1500,
                                        'Front-End Developer',
                                        1500,
                                        'Back-End Developer',
                                        1500,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className='text-2xl font-bold md:text-3xl text-primarycolor'
                                    repeat={Infinity}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <p className='text-lg text-seconderycolor max-w-xl'>
                            Building modern web applications with cutting-edge technologies. 
                            Passionate about creating seamless user experiences and scalable solutions.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className='flex flex-wrap items-center justify-center gap-4 md:justify-start'>
                            <a 
                                className='group relative px-6 py-3 text-white border-2 rounded-full border-primarycolor bg-primarycolor hover:bg-transparent transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg shadow-primarycolor/30 hover:shadow-primarycolor/50 overflow-hidden'
                                href={mycv} 
                                download="Abdulrahman_Ahmed_CV.pdf"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download size={20} />
                                    Download CV
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primarycolor/0 via-white/20 to-primarycolor/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </a>
                            
                            <a 
                                href="#Contact"
                                className='group px-6 py-3 text-lightcolor border-2 rounded-full border-primarycolor/40 hover:border-primarycolor hover:text-primarycolor hover:bg-primarycolor/10 transition-all duration-300 flex items-center gap-2 font-semibold hover:shadow-lg hover:shadow-primarycolor/20'
                            >
                                Let's Talk
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="pt-6">
                            <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-seconderycolor">Connect with me</p>
                            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                                <a href="https://www.facebook.com/profile.php?id=100029822832042" rel="noreferrer" target="_blank"
                                    className="group relative p-3 rounded-xl bg-bgcolor-2 hover:bg-primarycolor/10 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                    <img className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" src={facebook} alt="Facebook" />
                                    <div className="absolute inset-0 rounded-xl bg-primarycolor/20 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a href="https://wa.me/+0201207583096" rel="noreferrer" target="_blank"
                                    className="group relative p-3 rounded-xl bg-bgcolor-2 hover:bg-primarycolor/10 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                    <img className="w-6 h-6 rounded-full transition-transform duration-300 group-hover:scale-110" src={whatsApp} alt="WhatsApp" />
                                    <div className="absolute inset-0 rounded-xl bg-primarycolor/20 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a href="https://www.instagram.com/abdo26.6/" rel="noreferrer" target="_blank"
                                    className="group relative p-3 rounded-xl bg-bgcolor-2 hover:bg-primarycolor/10 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                    <img className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" src={instagram} alt="Instagram" />
                                    <div className="absolute inset-0 rounded-xl bg-primarycolor/20 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a href="https://linkedin.com/in/abdelrahman-ahmed-460873357" rel="noreferrer" target="_blank"
                                    className="group relative p-3 rounded-xl bg-bgcolor-2 hover:bg-primarycolor/10 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                    <img className="w-6 h-6 rounded transition-transform duration-300 group-hover:scale-110" src={linkedin} alt="LinkedIn" />
                                    <div className="absolute inset-0 rounded-xl bg-primarycolor/20 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                                <a href="https://github.com/abdoahmed26" rel="noreferrer" target="_blank"
                                    className="group relative p-3 rounded-xl bg-bgcolor-2 hover:bg-primarycolor/10 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                    <img className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" src={github} alt="GitHub" />
                                    <div className="absolute inset-0 rounded-xl bg-primarycolor/20 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Animation */}
                    <div className="flex-1 hidden md:flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primarycolor/20 rounded-full blur-3xl animate-pulse"></div>
                            <Lottie className="w-[400px] lg:w-[500px] relative z-10 drop-shadow-2xl" animationData={laptop} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-primarycolor/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-2 bg-primarycolor rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default Body;