import React from 'react';
import AboutDetail from './details/AboutDetail';
const About = ({myData}) => {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-image">
              <img src="assets/images/about-left-image.png" alt="pty trade" />
            </div>
          </div>
          <div className="col-lg-6">
            {
              myData &&
              <AboutDetail row={myData[0]} /> 
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
