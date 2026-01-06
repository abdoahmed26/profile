import CerCom from "./CerCom";
import html from "../../Images/Cerfit/HTML_certificate.jpg"
import css from "../../Images/Cerfit/CSS_certificate.jpg"
import js from "../../Images/Cerfit/JavaScript Intermediate_certificate.jpg"
import respon from "../../Images/Cerfit/Responsive Web Design_certificate.jpg"
import web from "../../Images/Cerfit/Web Development Fundamentals_certificate.jpg"
import angular from "../../Images/Cerfit/Angular_certificate.jpg"
import sql from "../../Images/Cerfit/SQL_certificate.jpg"
import depi from "../../Images/Cerfit/DEPI.jpg"
import { Award, GraduationCap } from "lucide-react";

const Certificates = () => {
    const certificates = [
        { image: depi, data: "fade-up" },
        { image: html, data: "fade-right" },
        { image: css, data: "fade-up" },
        { image: respon, data: "fade-down" },
        { image: js, data: "fade-right" },
        { image: angular, data: "fade-up" },
        { image: web, data: "fade-down" },
        { image: sql, data: "fade-right" }
    ];

    return (
        <div id="Certificates" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-1">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primarycolor/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primarycolor/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <GraduationCap size={40} className="text-primarycolor" />
                        <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
                            My 
                            <span className="text-primarycolor"> Certificates</span>
                        </h1>
                    </div>
                    <p className="max-w-2xl mx-auto text-lg text-seconderycolor">
                        Professional certifications and achievements in web development
                    </p>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-bgcolor-2 border border-primarycolor/30">
                        <Award size={24} className="text-primarycolor" />
                        <div>
                            <p className="text-2xl font-bold text-primarycolor">{certificates.length}</p>
                            <p className="text-xs text-seconderycolor">Certificates</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-bgcolor-2 border border-primarycolor/30">
                        <GraduationCap size={24} className="text-primarycolor" />
                        <div>
                            <p className="text-2xl font-bold text-primarycolor">100+</p>
                            <p className="text-xs text-seconderycolor">Hours Learning</p>
                        </div>
                    </div>
                </div>

                {/* Certificates Grid */}
                <div className="mt-10">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {certificates.map((cert, index) => (
                            <CerCom 
                                key={index}
                                image={cert.image} 
                                data={cert.data}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-16 text-center">
                    <p className="text-seconderycolor">
                        Continuously learning and earning new certifications 📚
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
