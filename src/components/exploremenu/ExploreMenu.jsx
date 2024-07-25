import React from 'react';
import { menu_list } from '../../assets/assets';
import "./ExploreMenu.css";
const ExploreMenu = ({catagory,setCatagory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
<h1>Explore Our Menu</h1>
<p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients anvd culinery expertise. Our mission is to satisfy youur cravings and elevate your dining experience, one delicious meal at a time</p>
<div className="explore-menu-list">
    {menu_list.map((menu,index)=>{
        return <div onClick={()=>{setCatagory((prev)=>{return prev===menu.menu_name?"All":menu.menu_name})}} key={index} className='explore-menu-list-item'>
       
        <img src={menu.menu_image} alt="" className={catagory===menu.menu_name?"active":""}/>
        <p>{menu.menu_name}</p>
        
        </div>
    })}  
</div>
<hr />
    </div>
  )
}

export default ExploreMenu