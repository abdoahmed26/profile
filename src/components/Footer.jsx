import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#About" },
        { name: "Experience", href: "#Experience" },
        { name: "Skills", href: "#Skills" },
        { name: "Services", href: "#Services" },
        { name: "Projects", href: "#Projects" },
        { name: "Contact", href: "#Contact" }
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/abdoahmed26", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/abdelrahman-ahmed-460873357", label: "LinkedIn" },
        { icon: <Mail size={20} />, href: "mailto:abdulrahman.ahmed2623@gmail.com", label: "Email" }
    ];

    return (
        <footer className="relative bg-bgcolor-1 border-t border-lightcolor/10">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
            
            <div className="container py-12 mx-auto">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-lightcolor">
                            My 
                            <span className="text-primarycolor"> Portfolio</span>
                        </h2>
                        <p className="text-seconderycolor">
                            Full Stack Developer specializing in building exceptional digital experiences. 
                            Let's create something amazing together!
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="group p-3 rounded-xl bg-bgcolor-1 hover:bg-primarycolor border border-transparent hover:border-primarycolor transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primarycolor/30"
                                >
                                    <div className="text-lightcolor group-hover:text-white transition-colors">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-lightcolor">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-seconderycolor hover:text-primarycolor transition-colors duration-300"
                                    >
                                        <span className="w-0 h-0.5 bg-primarycolor group-hover:w-4 transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-lightcolor">Get In Touch</h3>
                        <div className="space-y-3 text-seconderycolor">
                            <p className="flex items-start gap-2">
                                <Mail size={20} className="flex-shrink-0 mt-1 text-primarycolor" />
                                <a href="mailto:abdulrahman.ahmed2623@gmail.com" className="hover:text-primarycolor transition-colors">
                                    abdulrahman.ahmed2623@gmail.com
                                </a>
                            </p>
                            <p className="leading-relaxed">
                                Available for freelance work and full-time opportunities.
                            </p>
                        </div>
                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 px-4 py-2 bg-primarycolor/10 hover:bg-primarycolor text-primarycolor hover:text-white rounded-full transition-all duration-300 border border-primarycolor/30 hover:shadow-lg hover:shadow-primarycolor/30"
                        >
                            Back to Top
                            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-10 border-t border-lightcolor/10">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-center text-seconderycolor md:text-left">
                            &copy; {currentYear}
                            <span className="font-bold text-primarycolor"> Abdulrahman Ahmed</span>
                            . All Rights Reserved
                        </p>
                        <p className="flex items-center gap-2 text-sm text-seconderycolor">
                            Made with <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" /> and passion
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
