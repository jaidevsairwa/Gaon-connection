import React, { useState, useEffect } from "react";
import { fetchJSON } from "../../../api";
import "./video.css";
import VideoStory from "../stories/imageStories";
import { useLanguage } from "../../../LanguageContext";

const Video = () => {
  const [videoData, setVideoData] = useState([]);

  const { selectedLanguage } = useLanguage();
  const fetchData = async () => {
    fetchJSON("manufactures?populate", "GET", "").then((data) => {
      setVideoData(data.data[0].attributes);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const manText = selectedLanguage === "hi" ? "उत्पादन " : "Manufacture";

  return (
    <>
      <div className="video">
        <h1> {manText} </h1>
        <iframe
          title="Video 1"
          width="100%"
          height="580"
          src={videoData?.link}
          allowFullScreen
          className="video"
        ></iframe>
        <h2>{videoData.desc}</h2>
        <p>{videoData.title}</p>
      </div>
    </>
  );
};
export default Video;
