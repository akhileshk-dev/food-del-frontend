import React, { useContext, useState } from 'react';
import "./FoodItem.css";
import { set } from '../../assets/assets';
import { IoMdAdd } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,description,image,price}) => {
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
<div className='food-item-img-container'>
<img className='food-item-image' src={url+"/images/"+image} alt="" />
{!cartItems[id]?<IoMdAdd className='add' onClick={()=>{addToCart(id)}}/>:<div className='food-item-counter'>
   <img src={set.add} alt="" onClick={()=>{addToCart(id)}} />
   <p>{cartItems[id]}</p>
   <img src={set.minus} alt="" onClick={()=>{removeFromCart(id)}} />
  </div>}
</div>
<div className='food-item-info'>
    <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={set.rating} alt="" width={60} height={60} />
    </div>
    <p className="food-item-description">
        {description}
    </p>
    <p className="food-item-price">Rs. {price}</p>
</div>
    </div>
  )
}

export default FoodItem