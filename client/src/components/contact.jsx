import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./index.css";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";
import phone from "../assets/icons/phone.svg";
import insta from "../assets/icons/insta.svg";

const Contact = () => {
	
	const { selectedLanguage, setSelectedLanguage } = useLanguage();
	if(selectedLanguage==="en")
	{
		sessionStorage.setItem('selectedLanguage', "en");
	}
	
	const handleLanguageChange = (e) => {
		setSelectedLanguage(e.target.value);
		sessionStorage.setItem('selectedLanguage', e.target.value);
	};
	return (
		<header className="contact">
			<div className="left">
				<h2>Gaon Connection</h2>
			</div>
			<div className="right">
				<select value={selectedLanguage} onChange={handleLanguageChange}>
					<option value="hi">Hindi</option>
					<option value="en">English</option>
				</select>

				<a href="https://www.facebook.com/GaonConnection" target="_blank">
					{" "}
					<img src={facebook} className="icon"></img>
				</a>
				<a href="https://www.instagram.com/gaonconnection" target="_blank">
					{" "}
					<img src={insta} className="icon"></img>
				</a>
				<a
					href="https://www.youtube.com/channel/UCy4rsUzwespkNvjMI1coX8A"
					target="_blank">
					<img src={youtube} className="icon"></img>
				</a>
				{/* <img src={youtube} className="icon"></img> */}
			</div>
		</header>
	);
};

export default Contact;
