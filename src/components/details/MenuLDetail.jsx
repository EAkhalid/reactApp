import React from 'react';
import menuLData from '../../data/menuLData';
const MenuLDetail= ({langue,setLangue}) =>{
    const [flag,setFlag]=React.useState("gb");
    const [menuD,setMenuD]=React.useState([]);
    const getFlag = (lang) => {
        if(lang==="Ar"){
            return "ma"
        }else if (lang==="En"){
            return "gb"
        }else {
            return lang.toLowerCase();
        }
    };
   
    const changeLanguage = (lang) => {
        setLangue(lang);
        localStorage.setItem('lang',lang);
        window.location.reload();
    }
    
    if(localStorage.getItem('lang')==="undefined"){
        localStorage.setItem('lang',"En");
        setLangue(localStorage.getItem('lang'));
    }
    
    
    React.useEffect(() => {
        const dataM=menuLData.items.filter((item) =>{
        return item.langue === langue
        } );
        setFlag(getFlag(langue));
        setMenuD(dataM);
    },langue);

       
    return(
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {
            flag &&
            <span className={`flag-icon flag-icon-${flag}`}></span>
          }
          
        </button>
        <ul className="dropdown-menu" style={{width:"5px",}} aria-labelledby="languageDropdown">
            {menuD.length &&
                menuD[0].data.map((row)=>{
                   
                    if(row.langue!=langue){
                        return <li className='dropdown-item' style={{padding:1}} onClick={() => changeLanguage(row.langue)}><span style={{padding :1, left:"5px"}} className={`flag-icon flag-icon-${row.flag}`}></span><span style={{"margin-left":"15px"}}>{row.name}</span></li>
                    }
                 })

            }
        </ul>
      </div>

    )

}
export default MenuLDetail;