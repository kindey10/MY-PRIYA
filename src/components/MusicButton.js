import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Import icons
import "./MusicButton.css";


const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/music/song.mp3")); // Make sure you have a song here


  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <button className="music-button" onClick={toggleMusic}>
      {isPlaying ? <FaPause /> : <FaPlay />} {/* Play/Pause icon */}
    </button>
  );
};


export default MusicButton;
