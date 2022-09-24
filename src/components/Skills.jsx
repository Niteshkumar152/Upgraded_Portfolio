import Stats from "./Stats.jsx";

export const Skills = () => {
  return (
    <div className="fade-in my-20 overflow-x-hidden overflow-y-hidden">
      <div className="text-center text-5xl md:text-6xl cursor-default mb-4">
        Skills
      </div>
      <div className="w-20 h-1 mb-14 bg-primary mx-auto rounded"></div>
      <div className="flex flex-wrap justify-center mt-14 fade-in w-full">
        <div className="mx-4 box">
          <div className="flex justify-center w-full">
            <button className={`btn btn-active btn-primary m-2 text-animation`}>
              Javascript
            </button>
          </div>
          <div className="flex justify-center gap-8 w-full">
            <button className={`btn btn-active btn-primary m-2 text-animation`}>
              React
            </button>
            <div
              className={`btn btn-active btn-primary m-2 text-animation rounded-full`}
            >
              Frontend
            </div>
            <button className={`btn btn-active btn-primary m-2 text-animation`}>
              HTML CSS
            </button>
          </div>
          <div className="flex justify-center w-full">
            <button className={`btn btn-active btn-primary m-2 text-animation`}>
              Tailwind
            </button>
          </div>
        </div>
        <div className="mx-4 box">
          <div className="flex justify-center w-full">
            <button className={`btn btn-active btn-warning m-2 text-animation`}>
              SpringBoot
            </button>
          </div>
          <div className="flex justify-center gap-8 w-full">
            <button className={`btn btn-active btn-warning m-2 text-animation`}>
              Java
            </button>
            <div
              className={`btn btn-active btn-warning m-2 text-animation rounded-full`}
            >
              Backend
            </div>
            <button className={`btn btn-active btn-warning m-2 text-animation`}>
              Python
            </button>
          </div>
          <div className="flex justify-center w-full">
            <button className={`btn btn-active btn-warning m-2 text-animation`}>
              Behave Framework
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-14 fade-in w-full">
        <div className="mx-4 box">
          <div className="flex justify-center w-full">
            <button className={`btn btn-active btn-success m-2 text-animation`}>
              Grafana
            </button>
          </div>
          <div className="flex justify-center gap-8 w-full">
            <button className={`btn btn-active btn-success m-2 text-animation`}>
              Kubernetes
            </button>
            <div
              className={`btn btn-active btn-success m-2 text-animation rounded-full`}
            >
              DevOps/Monitoring
            </div>
            <button className={`btn btn-active btn-success m-2 text-animation`}>
              Docker
            </button>
          </div>
          <div className="flex justify-center w-full">
            <button className={`btn btn-active btn-success m-2 text-animation`}>
              Prometheus
            </button>
          </div>
        </div>
        <div className="mx-4 box">
          <div className="flex justify-center w-full">
            <button className={`btn btn-active m-2 text-animation`}>
              Git/Github
            </button>
          </div>
          <div className="flex justify-center gap-8 w-full">
            <button className={`btn btn-active m-2 text-animation`}>
              Postman
            </button>
            <div className={`btn btn-active m-2 text-animation rounded-full`}>
              Miscellaneous
            </div>
            <button className={`btn btn-active m-2 text-animation`}>
              Vim / Shell scripting
            </button>
          </div>
          <div className="flex justify-center w-full">
            <button className={`btn btn-active m-2 text-animation`}>
              Zoom
            </button>
          </div>
        </div>
      </div>

      <Stats />
    </div>
  );
};
