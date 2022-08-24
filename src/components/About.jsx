import React from "react";
import aboutImg from "../components/layout/assets/about-me.png";

export const About = () => {
  return (
    <div className="grid grid-cols-8 mt-14 fade-in">
      <div className="mx-4 col-span-3 hidden md:block">
        <img src={aboutImg} alt="about-img" />
      </div>

      <div className="mx-4 card card-body bg-gray-800 hover:bg-gray-900 shadow-xl col-span-8 md:col-span-5 m-auto">
        <figure>
          <img src={aboutImg} alt="aboutImgMobile" className="md:hidden" />
        </figure>
        <h1 className="card-title text-3xl md:text-4xl lg:5xl cursor-default mr-4">
          about me
          <div class="badge badge-primary text-base">Developer</div>
          <div class="badge badge-info text-base hidden md:visible">
            Designer
          </div>
        </h1>
        <p className="text-base md:text-xl cursor-default font-sans inline">
          I am Nitesh from Punjab, India. I am currently working as a Software
          Developer at <span className="text-red-500 font-bold">ORACLE</span>{" "}
          Corporation in 5G Communications Team. I have graduated from National
          Institute of Technology Jalandhar with a bachelor's of technology
          degree in Electronics and Communication Engineering in the year 2021.
          I'm a curious learner with good communication skills. I love to solve
          problems and deliver results with the right quality and in a timely
          manner. I am capable of being a good team player. I enjoy working with
          others.
        </p>
        <div class="card-actions justify-end">
          <div class="badge badge-success text-base visible md:hidden">
            Desiging
          </div>
          <div class="badge badge-warning cursor-default font-sans text-base">
            Development
          </div>
          <div class="badge badge-info cursor-default font-sans text-base">
            Testing
          </div>
          <div class="badge badge-error cursor-default font-sans text-base">
            Deployment
          </div>
        </div>
      </div>
    </div>
  );
};
