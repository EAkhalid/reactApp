import React from 'react';
import Menu from './Menu';
const Header = ({myData,setLangue,langue}) => {
  return (
  <header  style={{"background-color": "black"}} class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s" >
    <div class="container"  style={{"background-color": "black"}}>
      <div class="row"  style={{"background-color": "black"}}>
        <div class="col-12" >
          {
            myData &&
            <Menu myData={myData} langue={langue}  setLangue={setLangue}/>
          }
          
          
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
