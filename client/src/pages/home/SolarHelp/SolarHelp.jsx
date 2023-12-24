import React from "react";
import "./solarhelp.scss";
import { Solar_Help } from "../../../public/Images";
const SolarHelp = () => {
  return (
    <div className="help_container">
      <div>
        <img src={Solar_Help} />
      </div>
      <div className="help_body">
        <h1>
          The solar buzz in Bundelkhand is helping.
        </h1>
        <div>
          <p>Filler text is text that shares some characteristics 
of a real otherwise generated. It may be used.</p>
        </div>
      </div>
    </div>
  );
};

export default SolarHelp;
