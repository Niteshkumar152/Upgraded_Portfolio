import Stats from "./Stats.jsx";

export const Skills = () => {
  return (
    <div className="fade-in my-20 overflow-x-hidden">
      <div className="text-center text-5xl md:text-6xl cursor-default mb-4">
        Skills
      </div>
      <div className="w-20 h-1 mb-14 bg-primary mx-auto rounded"></div>
      <div className="flex flex-wrap justify-center mt-14 fade-in w-full">
        {/* <div className="mx-4 card card-body bg-gray-800 hover:bg-gray-900 shadow-xl m-auto">
          <h1 className="card-title text-3xl md:text-4xl lg:5xl cursor-default mr-4">
            Skills That I possess
          </h1>
          <p className="text-base lg:text-xl cursor-default font-sans inline">
            I am very passionate about problem solving and using data
            structures, algorithms to form a product as a solution.
          </p>
        </div> */}
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
      <div className="mx-4 box">
        <div className="flex justify-center w-full">
          <button className={`btn btn-active btn-success m-2 text-animation`}>
            Docker
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
            Grafana
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button className={`btn btn-active btn-success m-2 text-animation`}>
            Prometheus
          </button>
        </div>
      </div>
      <Stats />
    </div>
  );
};
