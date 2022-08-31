import projects_data from "../constants/projects_list";
import { useEffect, useState } from "react";

export const Projects = ({ showLessProjects }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setProjects(projects_data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-20">
      {projects
        .slice(0, showLessProjects ? 3 : projects.length)
        .map((project, index) => {
          return (
            <div
              key={index}
              className="card lg:card-side bg-gray-800 hover:bg-gray-900 shadow-xl cursor-default mx-4 mb-8 md:mx-20"
            >
              <figure>
                <img src={project?.projectImg} alt="Project" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{project?.projectTitle}</h2>
                <p>{project?.projectDescription}</p>
                <div className="card-actions justify-start mt-4">
                  Tech Stack Used :
                  {project?.techStack.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className={`badge text-base badge-${tag?.color} p-3`}
                      >
                        {tag?.tech}
                      </div>
                    );
                  })}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary mt-4">
                    {project?.buttonData}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
