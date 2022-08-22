import React from "react";
import aboutImg from "../components/layout/assets/about-me.png";

export const About = () => {
  return (
    <div className="mt-14">
      <div className="mx-4 col-span-3 hidden md:block">
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className="col-span-8 md:col-span-5 m-auto"></div>
    </div>
  );
};
