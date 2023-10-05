import React from 'react';
const AboutDetail=({row})=>{
const {title,content,id,content2}=row;
return(
    <div className="section-heading" key={id}>
    <h2 dangerouslySetInnerHTML={{ __html: title }}>
     </h2>
    <p>
        {content }  
    </p>
    <p>
       {content2}
    </p>
  </div>
)
}
export default AboutDetail;