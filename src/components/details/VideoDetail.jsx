import React from 'react';  
const VideoDetail= ({row,className}) =>{
    const{title,subTitle,link}=row;
    return(
        <li className={className}>
      <div>
        <div className="thumb">
          <iframe
            width="100%"
            height="auto"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="overlay-effect">
            <a href="#"><h4>{title}</h4></a>
            <span>{subTitle}</span>
          </div>
        </div>
      </div>
    </li>
    )
}
export default VideoDetail;