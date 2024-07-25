import React, { useContext } from 'react';
import "./FoodDisply.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from "../FoodItem/FoodItem";

const FoodDisply = ({catagory}) => {
    const {food_list}=useContext(StoreContext);
  return (
    <div className='food-disply' id='food-disply'>
<h2>Top dishes near you</h2>
<div className="food-disply-list">
    {food_list.map((food,index)=>{
      if(catagory==="All" || catagory===food.category){
        return <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image}/>
      }

    })}
</div>
    </div>
  )
}

export default FoodDisply