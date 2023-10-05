import React from 'react';
const VideoListDetail=({row,className,index})=>{
    const{title,subTitle}=row;
    const src="assets/images/video-thumb-0"+(index+1)+".png"
    return(
        <div className={className}>
      <div className="thumb">
        <img src={src} alt="" />
        <div className="inner-content">
          <h4>{title}</h4>
          <span>{subTitle}</span>
        </div>
      </div>
    </div>
    )
}
export default VideoListDetail;