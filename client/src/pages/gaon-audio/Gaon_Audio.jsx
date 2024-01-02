import React, { useState, useEffect, useRef } from 'react'
import { ImageCard1, ImageCard2 } from '../../public/Images'
// import Audio from '../home/Audio/Audio'
import { isMobile } from "react-device-detect";
import Contact from "../../components/contact";
import MobileHeader from "../home/Header/header";
import Header from "../../components/header";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/audio/HueBechain.mp3";
import audioFile1 from "../../assets/audio/TeriMitti.mp3";
import AudioPlayer from 'react-audio-player';
import image from "../../assets/Images/audio.jpg";
import './gaon_audio.scss'
import { fetchJSON } from "../../api";

const cardData = [
  {
    id: "1",
    image: image,
    audio: audioFile,
  },
  {
    id: "2",
    image: image,
    audio: audioFile1,
  },
  {
    id: "3",
    image: image,
    audio: audioFile,
  },
  {
    id: "4",
    image: image,
    audio: audioFile1,
  },
]

const AudioPlayer1 = ({ url, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };
  //   useEffect(()=>{
  //     setIsPlaying(false)
  //   },[id])

  return (

    <div className="card1">

      <audio
        src={url}
        ref={audioRef}
        autoPlay={isPlaying}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
      {isPlaying ? (
        <button onClick={stopAudio}>Stop</button>
      ) : (
        <button className='btn-audio' onClick={playAudio}>Play</button>
      )}
    </div>
  );
};
export const Gaon_Audio = () => {
  // const [isMuted, setIsMuted] = useState(true);
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    fetchJSON("storyaudi?populate=*", "GET", "").then((data) => {
      setAudioData(data.data);
    });
  }, []);
  return (
    <div>
      <div className='gaontv-container'>
        {audioData?.map((item, index) => (
          <div key={item.id} className='card-audio' >

            {item.attributes.images.data !== null && (<img src={`${import.meta.env.VITE_BASE_URL}/${item.attributes.images.data.attributes.url}`} />)}

            <h3>Raeyan</h3>
            <p>This is the audio page enjoy audio</p>
            <AudioPlayer1 url={`${import.meta.env.VITE_BASE_URL}/${item.attributes.audio.data[0].attributes.url}`} id={item.id} />
          </div>
        ))}


      </div>
    </div>
  )
}
