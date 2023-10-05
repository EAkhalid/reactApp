import React from 'react';  
const TestimonialDetails=({row})=>{
    const {job,text,src,name,star}=row;
    const stars=[];
    for(let i=0;i<star;i++){
        stars.push(<i className="fa fa-star"></i>)
    }

    return(
        <div className="col-md-4">
        <div className="card p-3 text-center px-4">
             <div className="user-image">
                <img alt="" src={src} className="rounded-circle" width="80"
                 />
             </div>
             
             <div className="user-content">
                 
                 <h5 className="mb-0">{name}</h5>
                 <span>{job}</span>
                 <p>
                   {text} </p>
                 
             </div>
             
             <div className="ratings">
                {  
                  stars
                }
             </div>
             
         </div>
         
     </div>
    )
}
export default TestimonialDetails;