import { FaChartBar, FaBrain } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="mt-14 flex justify-center cursor-default">
      <div className="stats shadow stats-vertical text-center bg-primary">
        <div className="stat">
          <div className="stat-figure text-black">
            <FaChartBar className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">
            <b>Projects Built</b>
          </div>
          <div className="stat-value">51+</div>
          <div className="stat-desc">Aug 2017 - Present</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-black">
            <FaBrain className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">
            <b>Leetcode Questions solved</b>
          </div>
          <div className="stat-value">1000+</div>
          <div className="stat-desc">Nov 2019 - Present</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
