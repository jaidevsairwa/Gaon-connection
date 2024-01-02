import React, { useState, useRef, useEffect } from "react";
import "material-symbols";

function AudioPlayer({ audioSrc, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", () => setDuration(audio.duration));
    };
  }, [audioRef, handleTimeUpdate]);

  useEffect(() => {
    // Update audio source when audioSrc prop changes
    if (audioSrc !== audioRef.current.src) {
      audioRef.current.src = audioSrc;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  }, [audioSrc]);

  return (
    <div className="player-card">
      <div onClick={handlePlayPause}>
        <h4>{title}</h4>
      </div>
      <input
        type="range"
        min="0"
        max={isNaN(duration) ? "100" : duration.toString()} // Provide a default max value if duration is NaN
        value={currentTime}
        onChange={handleSeek}
      />

      <div className="track-duration">
        <p>{formatDuration(currentTime) + " "}</p>
        <p>{formatDuration(duration)}</p>
      </div>

      <button onClick={handlePlayPause}>
        <span className="material-symbols-rounded">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>
    </div>
  );
}

export default AudioPlayer;
