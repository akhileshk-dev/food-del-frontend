import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodDisply from '../../components/fooddisply/FoodDisply';
import AppDownload from '../../components/AppDownload/AppDownload';


const Home = () => {
  const value=useContext(StoreContext);
  console.log(value);
  const [catagory,setCatagory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu catagory={catagory} setCatagory={setCatagory}/>
      <FoodDisply catagory={catagory}/>
      <AppDownload/>
    </div>
  )
}

export default Home