import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Code2, Github } from "lucide-react";
AOS.init();

const ProjectCom = ({
  image,
  title,
  desc,
  skills,
  url,
  git,
  data,
  duration,
}) => {
  return (
    <div
      data-aos={data}
      data-aos-duration={duration}
      className="group relative rounded-2xl bg-bgcolor-1 overflow-hidden border-2 border-transparent hover:border-primarycolor/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primarycolor/20 min-h-[400px] flex flex-col"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={desc}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bgcolor-1 via-transparent to-transparent opacity-60"></div>

        {/* Hover Overlay with Link */}
        {(url || git) && (
          <div className="absolute inset-0 bg-primarycolor/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={url || git}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-primarycolor rounded-full font-bold hover:scale-110 transition-transform duration-300"
            >
              {url ? "View Project" : "View Code"}
              {url ? <ExternalLink size={20} /> : <Github size={20} />}
            </a>
          </div>
        )}

        {/* Corner Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-primarycolor rounded-full text-white text-xs font-bold shadow-lg">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-lightcolor group-hover:text-primarycolor transition-colors duration-300">
          {desc}
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-primarycolor/30 group-hover:bg-primarycolor group-hover:w-full transition-all duration-500 rounded-full"></div>

        {/* Skills */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Code2 size={16} className="text-primarycolor" />
            <p className="text-sm font-semibold text-seconderycolor">
              Technologies:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.split(",").map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primarycolor/10 text-primarycolor border border-primarycolor/20 hover:bg-primarycolor/20 transition-colors"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex justify-between gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 px-6 py-2.5 border-2 rounded-full border-primarycolor bg-primarycolor hover:bg-transparent text-white transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primarycolor/30"
            >
              Demo
              <ExternalLink
                size={18}
                className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
              />
            </a>
          )}
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className={`group/btn inline-flex items-center gap-2 px-6 py-2.5 border-2 rounded-full transition-all duration-300 font-semibold hover:shadow-lg ${
                url
                  ? "border-lightcolor/30 bg-transparent text-lightcolor hover:border-primarycolor hover:bg-primarycolor hover:text-white hover:shadow-primarycolor/30"
                  : "border-primarycolor bg-primarycolor hover:bg-transparent text-white hover:shadow-primarycolor/30"
              }`}
            >
              <Github
                size={18}
                className="group-hover/btn:rotate-12 transition-transform duration-300"
              />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primarycolor to-transparent group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ProjectCom;
