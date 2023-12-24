
import React,{useState,useEffect,useRef} from 'react'
// import audioFile from '../../../assets/audio/HueBechain.mp3'
import ReactAudioPlayer from 'react-audio-player';
import './audio.scss'

  

const Audio = ({audioFile}) => {
    // const [isMuted, setIsMuted] = useState(false);
    // const audioRef = useRef(null);
  const allowedURL="http://localhost:5173/"
  const [isMuted, setIsMuted] = useState(false);
// console.log(audioRef.current.autoplay)
//   useEffect(() => {
//     audioRef.current.load();
//     audioRef.current.autoplay = true;
//   },[]);

//   const playAudio = () => {
//     audioRef.current.play();
//   };
  
//   const pauseAudio = () => {
//     audioRef.current.pause();
//   };

//   const MuteButton = () => {
//     const [isMuted, setIsMuted] = useState(false);
  
//     const handleClick = () => {
//       setIsMuted(!isMuted);
  
//       if (isMuted) {
//         pauseAudio();
//       } else {
//         playAudio();
//       }
//     };
  
//     return (
//       <button onClick={handleClick}>
//         {isMuted ? 'Mute' : 'Play'}
//       </button>
//     );
//   };
  

//   useEffect(() => {
//     audioRef.current.muted = isMuted;

    
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         audioRef.current.pause();
//       } else {
        
//         if (window.location.href.includes(allowedURL)) {
//           audioRef.current.play();
//         }
//       }
//     };

    
//     document.addEventListener('visibilitychange', handleVisibilityChange);

    
//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // audioRef.current.muted = !isMuted;
    // audioRef.current.autoPlay=isMuted
  };

// useEffect(() => {
//     audioRef.current.play();
//   }, []);
  return (
    <div>
      {/* <MuteButton /> */}
    {/* <audio ref={audioRef} src={audioFile} /> */}
    {/* <audio ref={audioRef} controls autoPlay>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
      <ReactAudioPlayer
  src={audioFile}
  autoPlay={true}
  loop={true}
  muted={isMuted}
  preload={'metadata'}
  controls
//   onPlay={e => console.log("onPlay")}
  style={{display:"none"}}
/>
<button onClick={toggleMute} className='audio_btn'>{isMuted ? 'Unmute' : 'Mute'}</button>
      </div>
  )
}

export default Audio;
