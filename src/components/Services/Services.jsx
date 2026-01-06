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
        <div id="Services" className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-1">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primarycolor/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primarycolor/5 rounded-full blur-3xl"></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center">
                    <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
                        My 
                        <span className="text-primarycolor"> Services</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-seconderycolor">
                        Comprehensive full-stack development services to bring your ideas to life
                    </p>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((service, index) => (
                            <Card 
                                key={index} 
                                icon={service.icon} 
                                title={service.title} 
                                desc={service.description}
                                index={index}
                            />
                        ))
                    }
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="mb-4 text-seconderycolor">
                        Ready to start your project?
                    </p>
                    <a 
                        href="#Contact"
                        className="inline-flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 border-2 rounded-full border-primarycolor bg-primarycolor hover:bg-transparent hover:shadow-lg hover:shadow-primarycolor/30"
                    >
                        Get in Touch
                        <Rocket size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Services;
