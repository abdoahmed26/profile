import CerCom from "./CerCom";
import html from "../../Images/Cerfit/HTML_certificate.jpg"
import css from "../../Images/Cerfit/CSS_certificate.jpg"
import js from "../../Images/Cerfit/JavaScript Intermediate_certificate.jpg"
import respon from "../../Images/Cerfit/Responsive Web Design_certificate.jpg"
import web from "../../Images/Cerfit/Web Development Fundamentals_certificate.jpg"
import angular from "../../Images/Cerfit/Angular_certificate.jpg"
import sql from "../../Images/Cerfit/SQL_certificate.jpg"

const Certificates = () => {
    return (
        <div id="Certificates" className="flex justify-center py-14 bg-bgcolor-1">
            <div className="container">
                <div>
                    <h1 className="text-5xl font-bold text-center text-lightcolor">My 
                        <span className="text-primarycolor"> Certificates</span>
                    </h1>
                    <div className="mt-8">
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <CerCom image={html} data="fade-right"/>
                            <CerCom image={css} data="fade-up"/>
                            <CerCom image={respon} data="fade-down"/>
                            <CerCom image={js} data="fade-right"/>
                            <CerCom image={angular} data="fade-up"/>
                            <CerCom image={web} data="fade-down"/>
                            <CerCom image={sql} data="fade-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
