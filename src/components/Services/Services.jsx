import { CodeXml, FileCode, Palette } from "lucide-react";
import Card from "./Card";

const Services = () => {
    return (
        <div id="Services" className="flex justify-center py-14 bg-bgcolor-2">
            <div className="container">
                <div>
                    <h1 className="text-5xl font-bold text-center text-lightcolor">Our 
                        <span className="text-primarycolor"> Services</span>
                    </h1>
                    <div className="grid grid-cols-1 mt-6 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        <Card icon={<CodeXml size={70} className='font-bold text-primarycolor'/>}
                            title={"Front End Development"} desc={"I can build website using modern frontend Development tools like React JS, Next JS, Angular."}/>
                        <Card icon={<FileCode size={70} className='font-bold text-primarycolor'/>}
                        title={"Back End Development"} desc={"I can build register & login Page, Build databases, send mails."}/>
                        <Card icon={<Palette size={70} className='font-bold text-primarycolor'/>}
                        title={"Responsive Design"} desc={"I can build responsive web design for all devices mobile , tablet and desktop."}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
