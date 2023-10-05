import React from 'react';
import MenuDetails from './details/MenuDetails';
import MenuLDetail from './details/MenuLDetail';
const Menu = ({myData,setLangue,langue}) =>{
  
    return(
        <nav class="main-nav"  >
          
        <a href="index.html" class="logo">
          <img src="assets/images/logo.png"/>
        </a>
         <ul class="nav">
         <li class="scroll-to-section">
          {
            langue &&
            
            <MenuLDetail langue={langue} setLangue={setLangue}/>
          }
    
    </li>
          {
            myData &&
            myData.map((row,e)=>{
                let className="active"
                
                if((e!==0  && langue!=="Ar")||(e<myData.length-1  && langue==="Ar")){
                    className=""
                }
                if((e===myData.length-1 && langue!=="Ar")){
                     return <li class="scroll-to-section">
                    <div class="main-red-button-hover">
                        <a href={`#${row.link}`}>{row.title}</a>
                        </div></li> 
                }
               else {
                if(langue!=="Ar"){
                    return <MenuDetails data={row} className={className} />
                }else{
                    if(e!==0){
                    return <MenuDetails data={row} className={className} />
                    }
                }
                   
               }
                
            })
          }
          { myData &&
            langue==="Ar" ? 
            <li class="scroll-to-section">
                    <div class="main-red-button-hover">
                        <a href={`#${myData[0].link}`}>{myData[0].title}</a>
                        </div></li> :""
          }
    
        </ul>      
         
        <a class='menu-trigger'>
            <span>Menu</span>
        </a>
      </nav>
    )
}
export default Menu;