import React from 'react';
import PortofolioDetail from './details/PortofolioDetail';
const Portofolio = ({myData}) => {
    return(
  <div id="portfolio" className="our-portfolio section">
  <div className="portfolio-left-dec">
    <img src="assets/images/portfolio-left-dec.png" alt="" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="section-heading">
          {
            myData &&
            <div>
              <h2 dangerouslySetInnerHTML={{ __html: myData.title }}>
              </h2>
               <span>{myData.subtitle}</span>
            
            
          </div>

        }
          
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="owl-carousel owl-portfolio">
         
        {myData &&
        myData[0].data.map((row)=>(
            <PortofolioDetail row={row} />
          ))}
          {/* Additional items go here */}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Portofolio;