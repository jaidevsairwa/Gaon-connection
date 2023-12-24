import React from "react";
import "./index.css";
import logo from "../assets/lg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        {/* <div className="logo">
        <img src={logo} width={70} height={70} style={{background:"red"}}/>
        </div> */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="teacher-connection">Teacher Connection</a>
            </li>
            <li>
              <a href="kisaan-connection">Kisaan Connection</a>
            </li>
            <li style={{ paddingRight: "35px", marginRight: "50px" }}>
              <Link href="/">
                <img
                  style={{
                    position: "absolute",
                    top: "45px",
                    paddingLeft: "10px",
                  }}
                  src={logo}
                  width={80}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <a href="/survey-report">Surverys & Reports</a>
            </li>
            <li>
              <a href="/change-maker">Change Maker</a>
            </li>
            <li>
              <a href="#">Latest News</a>
            </li>
          </ul>
        </nav>
      </header>
      <span
        style={{
          display: "block",
          fontSize: "20px",
          color: "black",
          textAlign: "center",
          width: "100%",
        }}
      >
        सुनिए गाँव की आवाज़ बनिए गाँव की आवाज़
      </span>
    </div>
  );
};

export default Header;
