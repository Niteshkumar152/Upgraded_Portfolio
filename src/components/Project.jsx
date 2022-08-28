import { Projects } from "./Projects";

export const Project = () => {
  return (
    <div className="fade-in my-20">
      <div className="text-center text-5xl md:text-6xl cursor-default mb-4">
        Projects
      </div>
      <div className="w-20 h-1 mb-14 bg-primary mx-auto rounded"></div>

      <Projects showLessProjects={true} />

      <div className="text-center my-20">
        <button className="btn btn-success">
          <a href="/all-projects-page">More Projects...</a>
        </button>
      </div>
    </div>
  );
};
