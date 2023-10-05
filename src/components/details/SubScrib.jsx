import React from 'react';

const SubScrib =({myData}) =>{
  
    
    return(
       
        <div className="subscribe-newsletters footer-item">
        <h4>{myData && myData[0].title}</h4>
        <p>{myData && myData[0].text}</p>
        <form action="#" method="get">
            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder={myData &&  myData[0].placeholder} required="" />
            <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
        </form>
    </div>
    )
}
export default SubScrib;