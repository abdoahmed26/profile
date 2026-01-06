import { useMemo, useState, useEffect } from "react";
import ProjectCom from "./ProjectCom";
import { arrayProjects } from "./arrayProject";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = useMemo(() => {
    let total = [];
    for (let i = arrayProjects.length - 1; i >= 0; i--) {
      total.push(arrayProjects[i]);
    }
    return total;
  }, []);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  const filters = [
    { label: "All", value: "" },
    { label: "HTML & CSS", value: "HTML" },
    { label: "JavaScript", value: "JS" },
    { label: "React.js", value: "React" },
    { label: "Next.js", value: "Next" },
    { label: "Express.js", value: "Expressjs" },
    { label: "Nest.js", value: "Nest" },
  ];

  const filteredProjects = projects.filter((ele) =>
    ele.skills.includes(search)
  );

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to projects section
    document
      .getElementById("Projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div
      id="Projects"
      className="relative flex justify-center py-20 overflow-hidden bg-bgcolor-2"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primarycolor/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primarycolor/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-5xl font-bold sm:text-6xl text-lightcolor">
            My
            <span className="text-primarycolor"> Projects</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-seconderycolor">
            A showcase of my recent work and personal projects
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primarycolor to-transparent"></div>
        </div>

        {/* Filter Section */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter size={20} className="text-primarycolor" />
            <p className="text-sm font-semibold tracking-wider uppercase text-lightcolor">
              Filter by Technology
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setSearch(filter.value)}
                className={`
                                    group relative px-6 py-2.5 rounded-full font-semibold transition-all duration-300 
                                    ${
                                      search === filter.value
                                        ? "bg-primarycolor text-white shadow-lg shadow-primarycolor/30 scale-105"
                                        : "bg-bgcolor-1 text-lightcolor border-2 border-lightcolor/20 hover:border-primarycolor/50 hover:scale-105"
                                    }
                                `}
              >
                {filter.label}
                {search === filter.value && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primarycolor/0 via-white/20 to-primarycolor/0 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-sm text-seconderycolor">
              Showing{" "}
              <span className="font-bold text-primarycolor">
                {indexOfFirstProject + 1}-
                {Math.min(indexOfLastProject, filteredProjects.length)}
              </span>{" "}
              of{" "}
              <span className="font-bold text-primarycolor">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {currentProjects.map((ele, index) => (
                <ProjectCom
                  key={index}
                  image={ele.image}
                  title={ele.title}
                  desc={ele.desc}
                  skills={ele.skills}
                  url={ele.url}
                  git={ele.git}
                  data={ele.data}
                  duration={"1000"}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-seconderycolor">
                No projects found with this filter
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredProjects.length > projectsPerPage && (
          <div className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Previous Button */}
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                                    ${
                                      currentPage === 1
                                        ? "bg-bgcolor-1 text-seconderycolor cursor-not-allowed opacity-50"
                                        : "bg-bgcolor-1 text-lightcolor hover:bg-primarycolor hover:text-white hover:scale-105 border-2 border-transparent hover:border-primarycolor/50"
                                    }
                                `}
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 text-seconderycolor"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`
                                            w-10 h-10 rounded-lg font-semibold transition-all duration-300
                                            ${
                                              currentPage === page
                                                ? "bg-primarycolor text-white shadow-lg shadow-primarycolor/30 scale-110"
                                                : "bg-bgcolor-1 text-lightcolor hover:bg-primarycolor/20 hover:scale-105 border-2 border-transparent hover:border-primarycolor/50"
                                            }
                                        `}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next Button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                                    ${
                                      currentPage === totalPages
                                        ? "bg-bgcolor-1 text-seconderycolor cursor-not-allowed opacity-50"
                                        : "bg-bgcolor-1 text-lightcolor hover:bg-primarycolor hover:text-white hover:scale-105 border-2 border-transparent hover:border-primarycolor/50"
                                    }
                                `}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Page Info */}
            <div className="mt-4 text-center">
              <p className="text-sm text-seconderycolor">
                Page{" "}
                <span className="font-bold text-primarycolor">
                  {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-bold text-primarycolor">
                  {totalPages}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
