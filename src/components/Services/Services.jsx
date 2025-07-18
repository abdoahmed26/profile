import { Code, Database, Rocket, Server, ShieldCheck, Smartphone } from "lucide-react";
import Card from "./Card";

const Services = () => {
    const services = [
        {
            icon: <Code size={50} className='font-bold text-primarycolor' />,
            title: "Front End Development",
            description:
            "I build modern, high-performance user interfaces using React.js and Next.js with reusable components and responsive layouts.",
        },
        {
            icon: <Server size={50} className='font-bold text-primarycolor' />,
            title: "Back End Development",
            description:
            "I develop secure and scalable backends using Node.js and Express.js, build REST APIs, integrate databases, and handle auth.",
        },
        {
            icon: <Smartphone size={50} className='font-bold text-primarycolor' />,
            title: "Responsive Design",
            description:
            "I design responsive web applications optimized for mobile, tablet, and desktop using Tailwind CSS.",
        },
        {
            icon: <Database size={50} className='font-bold text-primarycolor' />,
            title: "Database Integration",
            description:
            "I integrate and manage MongoDB and PostgreSQL to build reliable, structured data systems.",
        },
        {
            icon: <ShieldCheck size={50} className='font-bold text-primarycolor' />,
            title: "Authentication & Authorization",
            description:
            "I implement secure login systems using JWT and role-based access control to protect your application.",
        },
        {
            icon: <Rocket size={50} className='font-bold text-primarycolor' />,
            title: "Deployment & DevOps",
            description:
            "I deploy full-stack apps using Docker, Vercel, or Render with a focus on performance and uptime.",
        },
    ];
    
    return (
        <div id="Services" className="flex justify-center py-14 bg-bgcolor-2">
            <div className="container">
                <div>
                    <h1 className="text-5xl font-bold text-center text-lightcolor">Our 
                        <span className="text-primarycolor"> Services</span>
                    </h1>
                    <div className="grid grid-cols-1 mt-6 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            services.map((service, index) => (
                                <Card key={index} icon={service.icon} title={service.title} desc={service.description} />
                            ))
                        }
                        {/* <Card icon={<CodeXml size={50} className='font-bold text-primarycolor'/>}
                            title={"Front End Development"} desc={"I can build website using modern frontend Development tools like React JS, Next JS."}/>
                        <Card icon={<FileCode size={50} className='font-bold text-primarycolor'/>}
                        title={"Back End Development"} desc={"I can build register & login Page, Build databases, send mails."}/>
                        <Card icon={<Palette size={50} className='font-bold text-primarycolor'/>}
                        title={"Responsive Design"} desc={"I can build responsive web design for all devices mobile , tablet and desktop."}/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
