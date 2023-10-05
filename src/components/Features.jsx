import React from 'react';

const Features = ({myData}) => {
 
    return (
      <div id="features" className="features section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="features-item first-feature wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0s" 
                  style={{"visibility": "visible",
                  "-webkit-animation-duration": "1s",
                  "-moz-animation-duration": "1s",
                  "animation-duration": "1s",
                  "-webkit-animation-delay": "0s",
                  "-moz-animation-delay": "0s", "animation-delay": "0s"}}>
                    <div className="first-number number">
                      <h6>01</h6>
                    </div>
                    <div className="icon"></div>
                    <h4>{
                      myData &&
                      myData[0].data[0].title
                      }</h4>
                    <div className="line-dec"></div>
                    <p>
                    {
                      myData &&
                      myData[0].data[0].text
                      }
                     </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="features-item second-feature wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.2s" 
                  style={{"visibility": "visible",
                  "-webkit-animation-duration": "1s",
                   "-moz-animation-duration": "1s",
                    "animation-duration": "1s",
                    "-webkit-animation-delay": "0.2s", "-moz-animation-delay": "0.2s",
                     "animation-delay": "0.2s"}}>
                    <div className="second-number number">
                      <h6>02</h6>
                    </div>
                    <div className="icon"></div>
                    <h4>
                    {
                      myData &&
                      myData[0].data[1].title
                      }
                    </h4>
                    <div className="line-dec"></div>
                    <p>
                    {
                      myData &&
                      myData[0].data[1].text
                      }
                      </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="features-item first-feature wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.4s"
                   style={{"visibility": "visible",
                   "-webkit-animation-duration": "1s",
                    "-moz-animation-duration": "1s",
                     "animation-duration": "1s",
                     "-webkit-animation-delay": "0.4s", "-moz-animation-delay": "0.4s",
                      "animation-delay": "0.4s"}}
                 >
                    <div className="third-number number">
                      <h6>03</h6>
                    </div>
                    <div className="icon"></div>
                    <h4>
                    {
                      myData &&
                      myData[0].data[2].title
                      }
                    </h4>
                    <div className="line-dec"></div>
                    <p>
                    {
                      myData &&
                      myData[0].data[2].text
                      }  
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="features-item second-feature last-features-item wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.6s" 
                  style={{"visibility": "visible",
                  "-webkit-animation-duration": "1s",
                   "-moz-animation-duration": "1s",
                    "animation-duration": "1s",
                    "-webkit-animation-delay": "0.6s", "-moz-animation-delay": "0.6s",
                     "animation-delay": "0.6s"}}>
                    <div className="fourth-number number">
                      <h6>04</h6>
                    </div>
                    <div className="icon"></div>
                    <h4>{
                      myData &&
                      myData[0].data[3].title
                      }</h4>
                    <div className="line-dec"></div>
                    <p>
                    {
                      myData &&
                      myData[0].data[3].text
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="skills-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="skill-item wow fadeIn animated" data-wow-duration="1s" data-wow-delay="0s"
                  style={{"visibility": "visible",
                  "-webkit-animation-duration": "1s",
                   "-moz-animation-duration": "1s",
                    "animation-duration": "1s",
                    "-webkit-animation-delay": "0s", "-moz-animation-delay": "0s",
                     "animation-delay": "0s"}}
                 >
                    <div className="progress" data-percentage="80">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">
                        <div>
                        {
                      myData &&
                      myData[0].data2[0].chiffre
                      }<br/>
                          <span>

                          {
                      myData &&
                      myData[0].data2[0].text
                      }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="skill-item wow fadeIn animated" data-wow-duration="1s" data-wow-delay="0.2s" style={{
                    "visibility": "visible",
                    "-webkit-animation-duration": "1s",
                     "-moz-animation-duration": "1s", "animation-duration": "1s",
                     "-webkit-animation-delay": "0.2s",
                     "-moz-animation-delay": "0.2s",
                      "animation-delay": "0.2s"}}>
                    <div className="progress" data-percentage="60">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">
                        <div>
                        {
                      myData &&
                      myData[0].data2[1].chiffre
                      }<br/>
                          <span>{
                      myData &&
                      myData[0].data2[1].text
                      }</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="skill-item wow fadeIn animated" data-wow-duration="1s" data-wow-delay="0.4s" style={{"visibility": "visible",
                  "-webkit-animation-duration": "1s",
                   "-moz-animation-duration": "1s",
                   "animation-duration": "1s",
                   "-webkit-animation-delay": "0.4s",
                  "-moz-animation-delay": "0.4s",
                  "animation-delay": "0.4s"}}>
                    <div className="progress" data-percentage="90">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">
                        <div>
                        {
                      myData &&
                      myData[0].data2[2].chiffre
                      }<br/>
                          <span>{
                      myData &&
                      myData[0].data2[2].text
                      }</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="skill-item last-skill-item wow fadeIn animated" data-wow-duration="1s" data-wow-delay="0.6s" 
                  style={{"visibility": "visible",
                  "-webkit-animation-duration": "1s",
                  "-moz-animation-duration": "1s",
                  "animation-duration": "1s",
                  "-webkit-animation-delay": "0.6s",
                  "-moz-animation-delay": "0.6s",
                  "animation-delay": "0.6s"}}>
                    <div className="progress" data-percentage="70">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">
                        <div>
                        {
                      myData &&
                      myData[0].data2[3].chiffre
                      }<br/>
                          <span>{
                      myData &&
                      myData[0].data2[3].text
                      }</span>
                        </div>
                      </div>
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
    export default Features;