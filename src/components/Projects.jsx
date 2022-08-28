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
                <img src="https://placeimg.com/400/400/arch" alt="Album" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">Project Name : Comming sooonn</h2>
                <p>Coming Soon......</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Demo</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
