import React, { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./audio.scss";

const Audio = ({ audioFile }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      <ReactAudioPlayer
        src={audioFile}
        autoPlay={true}
        loop={true}
        muted={isMuted}
        preload={"metadata"}
        controls
        style={{ display: "none" }}
      />
      <button onClick={toggleMute} className="audio_btn">
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default Audio;
