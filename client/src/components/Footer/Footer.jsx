import React from "react";
import "./footer.scss";
import Logo from "../../assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="img_container">
        <img src={Logo} alt="" />
      </div>
      <div className="footer_container_body">
        <div className="menu_link">
          <p className="menu">GAON CONNECTION</p>
          <p>About Us </p>
          <p>Contact</p>
          <p>Privacy</p>
          <p>Submit Stories </p>
        </div>

        <div className="menu_link">
          <p className="menu">FOLLOW US</p>
          <a href="https://www.facebook.com/GaonConnection" target="_blank">
            <p> Facebook </p>
          </a>
          <a href="https://www.instagram.com/gaonconnection" target="_blank">
            {" "}
            <p>Instagram</p>
          </a>
          <p>Linkedin </p>
          <a
            href="https://www.youtube.com/channel/UCy4rsUzwespkNvjMI1coX8A"
            target="_blank"
          >
            <p>Youtube</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
