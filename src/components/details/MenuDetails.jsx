import React from 'react';
const MenuDetails=({data,className})=>{
    const {id,title,link}=data;

    return(
        <li id={id} class="scroll-to-section"><a href={`#${link}`} className={className}>{title}</a></li>
    )
}
export default MenuDetails;