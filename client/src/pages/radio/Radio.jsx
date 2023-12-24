import React from "react";
import Audio from "../home/Audio/Audio";
import audioFile from "../../assets/audio/HueBechain.mp3";
import "../home/Audio/audio.scss";
import image from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

const Radio = () => {
	const nav = useNavigate();
	const goback = () => {
		nav("/");
	};
	return (
		<div className="radio_bg">
			<img
				onClick={goback}
				width={80}
				height={80}
				className="back-icon"
				src={image}></img>
			<Audio audioFile={audioFile} />
			<h1 style={{ color: "white", margin: "0px", padding: "0px" }}>
				गाँव रेडियो
			</h1>
			<h2 style={{ color: "white", textAlign:"center" }}>
				सुनिए गाँव की आवाज़ | बनिए गाँव की आवाज़{" "}
			</h2>
		</div>
	);
};
export default Radio;
