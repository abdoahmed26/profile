import Lottie from "lottie-react";
import ContactForm from "./ContactForm";
import message from "../../animation/Animation - 1716847156388.json"
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6 text-primarycolor" />,
            title: "Email",
            value: "abdulrahman.ahmed2623@gmail.com",
            link: "mailto:abdulrahman.ahmed2623@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6 text-primarycolor" />,
            title: "Phone",
            value: "+20 120 758 3096",
            link: "tel:+0201207583096"
        },
        {
            icon: <MapPin className="w-6 h-6 text-primarycolor" />,
            title: "Location",
            value: "Egypt",
            link: null
        }
    ];

    return (
        <div id="Contact" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-2">
            {/* Background Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primarycolor/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primarycolor/5 rounded-full blur-3xl"></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center">
                    <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
                        Contact
                        <span className="text-primarycolor"> Me</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-seconderycolor">
                        Have a project in mind? Let's work together to create something amazing!
                    </p>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
                </div>

                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    {/* Left Side - Form */}
                    <div className="flex-1">
                        <div className="p-8 rounded-2xl bg-bgcolor-1/50 backdrop-blur-sm border border-lightcolor/5 shadow-xl">
                            <h2 className="mb-6 text-2xl font-bold text-lightcolor">
                                Send Me a Message 💬
                            </h2>
                            <ContactForm/>
                        </div>
                    </div>
                    
                    {/* Right Side - Info & Animation */}
                    <div className="flex flex-col gap-8 lg:w-2/5">
                        {/* Animation */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primarycolor/20 rounded-full blur-3xl"></div>
                                <Lottie className="w-[280px] md:w-[320px] lg:w-[360px] relative z-10" animationData={message} />
                            </div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            <h3 className="mb-4 text-xl font-bold text-center text-lightcolor lg:text-left">
                                Get In Touch
                            </h3>
                            {contactInfo.map((info, index) => (
                                <div 
                                    key={index}
                                    className="group p-4 rounded-xl bg-bgcolor-1 border border-transparent hover:border-primarycolor/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primarycolor/20"
                                >
                                    {info.link ? (
                                        <a href={info.link} className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-primarycolor/10 group-hover:bg-primarycolor/20 transition-colors">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-seconderycolor uppercase">{info.title}</p>
                                                <p className="text-sm font-medium text-lightcolor group-hover:text-primarycolor transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-primarycolor/10 group-hover:bg-primarycolor/20 transition-colors">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-seconderycolor uppercase">{info.title}</p>
                                                <p className="text-sm font-medium text-lightcolor">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Additional CTA */}
                        <div className="p-6 text-center rounded-xl bg-gradient-to-br from-primarycolor/10 to-transparent border border-primarycolor/30">
                            <p className="mb-2 text-lg font-bold text-lightcolor">
                                Available for Freelance
                            </p>
                            <p className="text-sm text-seconderycolor">
                                Ready to start your project right away 🚀
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;