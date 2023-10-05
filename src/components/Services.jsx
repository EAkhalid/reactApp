import React from 'react';

import ServiceItem from './details/ServiceItem';

const Services = ({myData}) => {
  
  return (
    <div id="services" className="our-services section">
      <div className="services-right-dec">
        <img src="assets/images/services-right-dec.png" alt="" />
      </div>
      <div className="container">
        <div className="services-left-dec">
          <img src="assets/images/services-left-dec.png" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2 dangerouslySetInnerHTML={myData && { __html: myData[0].title }}>
                
              </h2>
              <span>{myData && myData[0].subTitle}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-services">
              {myData &&
              myData[0].data.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
