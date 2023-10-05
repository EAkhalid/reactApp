import React from 'react';
const PortofolioDetail=({row})=>{
    return(
        <div className="item">
            <div className="thumb">
              <img src={`${row.src}`} alt="" />
              <div className="hover-effect">
                <div className="inner-content">
                  <a rel="sponsored" href="#" target="_parent">
                    <h4>{row.title}</h4>
                  </a>
                  <span>{row.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
    )
}
export default PortofolioDetail;