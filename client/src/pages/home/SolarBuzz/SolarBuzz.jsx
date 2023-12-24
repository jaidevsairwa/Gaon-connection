import React from "react";
import "./solarbuzz.scss";
import { SolarOne, SolarTwo, SolarThree } from "../../../public/Images";
const SolarBuzz = () => {
  return (
    <div className="solar_container">
      <div className="solar_container_one">
        <div className="">
          <img src={SolarThree} width="552" height="295" />
        </div>
        <h1 className="heading">The solar buzz in Bundelkhand is helping.</h1>
        <p className="paragraph">
          Filler text is text that shares some characteristics Indian farmer
          holding crop plant in his wheat field of a real otherwise generated
          ...<span style={{ color: "#0CC5FF" }}>Read More</span>
        </p>
      </div>
      <div className="solar_container_two">
        <div className="solar_card">
          <div>
            <img src={SolarTwo} width="296" height="295" />
          </div>
          <h1 className="heading">The solar buzz in Bundelkhand is helping.</h1>
          <p className="paragraph">
            Filler text is text that shares some characteristics Indian farmer
            holding crop plant in his wheat field of a real otherwise generated
            ...<span style={{ color: "#0CC5FF" }}>Read More</span>
          </p>
        </div>
        <div className="solar_card">
          <div>
            <img src={SolarOne} width="296" height="295" />
          </div>
          <h1 className="heading">The solar buzz in Bundelkhand is helping.</h1>
          <p className="paragraph">
            Filler text is text that shares some characteristics Indian farmer
            holding crop plant in his wheat field of a real otherwise generated
            ...<span style={{ color: "#0CC5FF" }}>Read More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarBuzz;
