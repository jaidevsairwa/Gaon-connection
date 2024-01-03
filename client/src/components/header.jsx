import React, { useState } from "react";
import "./index.css";
import logo from "../assets/lg.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/category/9">Teacher Connection</a>
            </li>
            <li>
              <a href="/category/2">Kisaan Connection</a>
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
              <a href="/the-changemakers">Change Maker</a>
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
          fontSize: "16px",
          color: "black",
          textAlign: "center",
          width: "100%",
          lineHeight: "1.2",
        }}
      >
        सुनिए गाँव की आवाज़ <br /> बनिए गाँव की आवाज़
      </span>
    </div>
  );
};

export default Header;
