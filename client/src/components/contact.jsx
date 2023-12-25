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
				<img height={20} width={20} src={phone} className="text"></img>
				<div className="text">Helpline No.</div>
				<div className="text">+91-01234-56789</div>
			</div>
			<div className="right">
				<select value={selectedLanguage} onChange={handleLanguageChange}>
					<option value="en">English</option>
					<option value="hi">Hindi</option>
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
