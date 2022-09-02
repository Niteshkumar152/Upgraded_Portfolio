import skillImg from "../components/layout/assets/skills.jpg";
import Stats from "./Stats.jsx";
export const Skills = () => {
  return (
    <div className="fade-in my-20">
      <div className="text-center text-5xl md:text-6xl cursor-default mb-4">
        Skills
      </div>
      <div className="w-20 h-1 mb-14 bg-primary mx-auto rounded"></div>
      <div className="grid grid-cols-8 mt-14 fade-in">
        <div className="mx-4 card card-body bg-gray-800 hover:bg-gray-900 shadow-xl col-span-8 md:col-span-5 m-auto">
          <figure>
            <img src={skillImg} alt="aboutImgMobile" className="md:hidden" />
          </figure>
          <h1 className="card-title text-3xl md:text-4xl lg:5xl cursor-default mr-4">
            Skill Set That I bring to table
          </h1>
          <p className="text-base lg:text-xl cursor-default font-sans inline">
            I am Nitesh from Punjab, India. I am currently working as a Software
            Developer at <span className="text-red-500 font-bold">ORACLE</span>{" "}
            Corporation in 5G Communications Team. I have graduated from
            National Institute of Technology Jalandhar with a bachelor's of
            technology degree in Electronics and Communication Engineering in
            the year 2021. I'm a curious learner with good communication skills.
            I love to solve problems and deliver results with the right quality
            and in a timely manner. I am capable of being a good team player. I
            enjoy working with others.
          </p>
        </div>
        <div className="mx-4 col-span-3 hidden md:block">
          <img src={skillImg} alt="about-img" />
        </div>
      </div>
      <Stats />
    </div>
  );
};
