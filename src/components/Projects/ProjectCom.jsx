import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ProjectCom = ({image,title,desc,skills,url,data,duration}) => {
    return (
        <div data-aos={data} data-aos-duration={duration} 
        className="rounded-xl bg-bgcolor-1 h-[400px]">
            <img src={image} className="w-full rounded-t-xl h-[55%]" alt="" />
            <div className="py-4 text-center">
                <h1 className="text-xl font-bold text-primarycolor">{title}</h1>
                <p className="my-2 text-seconderycolor">The Project Is {desc}</p>
                <div className="my-2 text-thirdcolor">
                    <p>The Skills Used :</p>
                    <p>{skills}</p>
                </div>
                <div className="mt-2">
                    <a href={url} target="_blank" rel="noreferrer"
                    className="px-7 py-[4px] border-2 rounded-full border-primarycolor hover:bg-bgcolor-1 duration-300 bg-primarycolor text-lightcolor">
                        See
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCom;
