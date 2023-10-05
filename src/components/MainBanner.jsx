import React from 'react';

import BannerDetails from './details/BannerDetails';

const MainBanner = ({myData}) => {
  
    return(
        <div className="main-banner" id="top">
        <div className="container">
         
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="owl-carousel owl-banner">
                  {myData &&
                    myData[0].data.map((row)=>
                    {
                      
                    return <BannerDetails
                     data={row} />
                    })
                  }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default MainBanner;
