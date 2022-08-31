import project_img from "../components/layout/assets/all-projects.png";
import { Projects } from "../components/Projects";
import { FaGithub } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { Element } from "react-scroll";

export const ProjectPage = () => {
  return (
    <div className="mt-20 cursor-default">
      <div className="grid grid-cols-8 mt-14 fade-in">
        <div className="mx-4 col-span-3 hidden md:block">
          <img src={project_img} alt="about-img" />
        </div>
        <div className="mx-4 card card-body bg-gray-800 hover:bg-gray-900 shadow-xl col-span-8 md:col-span-5 m-auto">
          <figure>
            <img src={project_img} alt="aboutImgMobile" className="md:hidden" />
          </figure>

          <h1 className="card-title text-3xl md:text-4xl lg:5xl cursor-default mr-4">
            All Projects
          </h1>
          <p className="text-base lg:text-xl cursor-default font-sans inline">
            This page covers the list of all the projects that I have built so
            far. Please visit my custom github page to explore the coding style
            which I follow for my projects.
          </p>

          <div className="card-actions justify-end mb-4">
            <div className="badge badge-success text-base p-3">Frontend</div>
            <div className="badge badge-warning cursor-default font-sans text-base p-3">
              Backend
            </div>
            <div className="badge badge-info cursor-default font-sans text-base p-3">
              React
            </div>
            <div className="badge badge-accent cursor-default font-sans text-base p-3">
              Springboot
            </div>
          </div>
          <div>
            <button className="btn btn-dark border-white hover:border-red-500">
              <a href="/custom-github-page">
                <FaGithub className="inline mr-2" />
                Custom Github
              </a>
            </button>
          </div>
        </div>
      </div>
      <Element name="all-projects-page">
        <div className="text-center text-5xl md:text-6xl cursor-default mb-4 mt-20">
          All Projects
        </div>
        <div className="w-40 h-1 mb-14 bg-primary mx-auto rounded"></div>
        <Projects />
      </Element>
      <Footer />
    </div>
  );
};
