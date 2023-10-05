import React from 'react';
const ServiceDetails = ({ data }) => {
    const { title, src, description } = data;
    return (
        <div className="item">
        <h4>{title}</h4>
        <div className="icon">
          <img src={src} alt="" />
        </div>
        <p>{description}</p>
      </div>
    );
    }
export default ServiceDetails;  