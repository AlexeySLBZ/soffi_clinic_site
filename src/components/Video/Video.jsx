import './video.css'
import React from "react";
export default function Video(){
  const videoEl = document.getElementsByTagName('video')[0],
    videoEl2 = document.getElementsByTagName('video')[1],
    playBtn = document.getElementById('playBtn'),
    vidControls = document.getElementById('controls'),
    volumeControl = document.getElementById('volume'),
    timePicker = document.getElementById('timer');

  const myVids =
  //   [
  //   "//www.w3schools.com/html/mov_bbb.mp4",
  //   "//www.w3schools.com/html/mov_bbb.mp4",
  //   "//www.w3schools.com/html/mov_bbb.mp4",
  //   "//www.w3schools.com/html/mov_bbb.mp4",
  //   "//www.w3schools.com/html/movie.mp4"
  // ];
  [
    <iframe className="video__media" src="https://www.youtube.com/embed/fHndGLU0RaQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    <iframe className="video__media" src="https://www.youtube.com/embed/xg3CvRUo81c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
  ];

// const parseMediaUrl = (media)=>{
//   let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/gi
// }

  return (
<main className="video__content">
  <h4 className="header-text">Видеоблог</h4><br/>
  <div className="page">
    {myVids.map((item, index)=>
        <div key={index} className="video">
          {item}
          {/*Замена на экономныый трафик*/}
          {/*<a className="video__link" href="http://youtu.be/8ZTSDDntaSE">*/}
          {/*  <picture>*/}
          {/*    <img className="video__media" src="https://i.ytimg.com/vi/8ZTSDDntaSE/maxresdefault.jpg" alt="sobchack"/>*/}
          {/*  </picture>*/}
          {/*</a>*/}
          {/*<button className="video__button" aria-label="Запустить видео">*/}
          {/*  <svg fill="#000000" width="68px" height="48px" viewBox="0 0 68 48">*/}
          {/*    <path className="video__button__icon" d="M45,24 27,14 27,34"></path>*/}
          {/*  </svg>*/}
          {/*</button>*/}
        </div>



// Свое видео с сервера
//         <video className="video__element"
//           muted="muted"
//           autoplay="autoplay"
//           src={item}
//           key={index}
//           controls
//           playsinline
//           loop src="/shake.mp4"
//           crossorigin
//         />
    )}
  </div>
</main>
  )
}
