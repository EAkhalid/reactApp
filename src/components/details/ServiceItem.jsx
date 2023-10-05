import React from 'react';
const ServiceItem = ({ service }) => {
    const { title, src, description } = service;
    return (
        <div className="item">
        <h4>{title}</h4>
        <div className="icon">
          <img src={src} alt="" />
        </div>
        <p>{description}</p>
      </div>
    );
};
export default ServiceItem;