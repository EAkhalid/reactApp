import React from 'react'; 
import TestimonialDetails from './details/TestimonialDetails';
const Testimonial = ({myData}) => { 
    return(
      <div id="testimonial" className="section" >
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="section-heading">
          <h2 style={{"text-align":"center","padding":"50px"}}><span dangerouslySetInnerHTML={myData && { __html: myData[0].title }}>
            
            </span></h2>  
        </div>
      </div>
    </div>
    <div className="container mt-5 mb-5">
      <div className="row g-2">
        {
          myData &&
          myData[0].data.map((row)=>(
            <TestimonialDetails
         row={row} />
          ))
        }
         
          
          
      </div>
      
  </div>
    
  </div>
    )
}
export default Testimonial;
