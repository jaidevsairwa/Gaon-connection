import React, { useState, useRef, useEffect } from "react";
import 'material-symbols';

function AudioPlayer({ audioSrc,imgSrc}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef("empty");

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
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
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    function componentWillUnmount() {
        window.removeEventListener("resize", this.setCaretVis);
    }
    return (
        <div className="player-card">
            <div onClick={handlePlayPause}>
                <img className="audio-img" src={imgSrc} alt="display" />
            </div>
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
            />

            <audio ref={audioRef} src={audioSrc} />

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