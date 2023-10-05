import React from "react";
import VideoDetail from "./details/VideoDetail";
import VideoListDetail from "./details/VideoListDetail";
const Videos = ({myData}) => {
  return (
        <div id="video" className="our-videos section">
        <div className="videos-left-dec">
  <img src="assets/images/videos-left-dec.png" alt="" />
</div>
<div className="videos-right-dec">
  <img src="assets/images/videos-right-dec.png" alt="" />
</div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                  <div className="col-lg-8">
  <ul className="nacc">
  {
    myData &&
    myData[0].data.map((item,e) => (
      <VideoDetail row={item} key={e} className={e===0 ? "active" : ""} />
    ))
  }
  </ul>
</div>

<div className="col-lg-4">
  <div className="menu">
    
  {
      myData &&
      myData[0].data.map((item,e) => (
        <VideoListDetail row={item} index={e} className={e===0 ? "active" : "thumb"} />
      ))
    }
  </div>
</div>
 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
    export default Videos;