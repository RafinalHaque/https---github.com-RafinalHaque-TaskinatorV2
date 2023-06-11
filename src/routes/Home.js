import React from "react";
import homeVideo from './video.mp4';
import "./styles.css"


export default function Home() {
  return (   
    <div className="home"> 
      <video autoPlay muted loop className="background-video">
        <source src={homeVideo} type="video/mp4" />
      </video>
       
    </div>
  );
}