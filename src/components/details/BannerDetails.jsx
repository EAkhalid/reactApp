import React from 'react';

  
const BannerDetails=({data})=>{
    const {id,title,title2,paragraph,linkLabel,link}=data;
    
    return(
       
        <div key={id} className="item header-text">
    
    <h6>{title}</h6>
    <h2 dangerouslySetInnerHTML={{ __html: title2 }}></h2>
    <p>{paragraph} </p>
    <div className="down-buttons">
        <div className="main-blue-button-hover">
        <a href={`#${link}`}>
            {linkLabel}
        </a>
        </div>
        <div className="call-button">
        <a href="#"><i className="fa fa-phone"></i> 010-020-0340</a>
        </div>
    </div>
    </div>
    )    
}
export default BannerDetails;
