import experience_data from "../constants/experience_data";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Experience = () => {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setJobs(experience_data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { company, dates, jobTitle, role, duties } = jobs[value];

  return (
    <div className="fade-in my-20">
      <div className="text-center text-5xl md:text-6xl cursor-default mb-4">
        Experience
      </div>
      <div className="w-40 h-1 mb-14 bg-primary mx-auto rounded"></div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="mx-4">
          <ul className="menu menu-horizontal md:menu-vertical md:w-56 rounded-box bg-gray-900">
            {jobs.map((job, index) => (
              <li
                className={`${job.id === value ? "bg-warning" : ""}`}
                key={index}
                onClick={() => {
                  setValue(job.id);
                }}
              >
                <p>{job.company}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="card card-body bg-gray-900 hover:bg-gray-800 shadow-xl cursor-default mx-4">
            <h1 className="card-title text-3xl md:text-4xl lg:5xl cursor-default mr-4">
              {jobTitle}
              <div className="badge badge-info text-base p-3">{role}</div>
            </h1>

            <h4 className="badge badge-accent badge-outline">{company}</h4>
            <p className="countdown font-mono text-base mb-2">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="">
                  <FaAngleDoubleRight className="inline mb-1 mr-2 text-primary" />
                  <p className="inline">{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
