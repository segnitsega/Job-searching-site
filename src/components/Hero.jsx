import React from "react";
import Frame1 from "../assets/Frame1.png"
import Frame2 from "../assets/Frame2.png"

const Hero = () => {
  return (
    <div className="flex relative z-0">
      <div>
        <img src={Frame1} alt="Frame"/>
      </div>
      <div className="flex absolute top-0 left-200">
        <img width={400} src={Frame2} alt="Frame2" />
      </div>
    </div>
  );
};

export default Hero;
