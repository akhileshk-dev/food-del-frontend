import { createContext,useEffect,useReducer, useState } from "react";
import axios from "axios";
// import { food_list } from "../assets/assets";
export const StoreContext=createContext();
 const StoreContextProvider=({children})=>{
  const [cartItems,setCartItems]=useState({});
  const url="https://food-del-backend-yswe.onrender.com";
  const [token,setToken]=useState("");
  const [food_list,setFoodList]=useState([])
  const addToCart=async(itemId)=>{
if(!cartItems[itemId]){
    setCartItems(prev=>({...prev,[itemId]:1}))
}else{
    setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
}
if(token){
  await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
}
  }
  const removeFromCart=async(itemId)=>{
setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}));
if(token){
  await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
}
  }
 const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemInfo=food_list.find((product)=>product._id===item);
      totalAmount+=itemInfo.price*cartItems[item];
    }
   
  }
  return totalAmount;

 }
 const fetchFoodList=async()=>{
  const response=await axios.get(url+"/api/food/list");
  console.log(response);
  setFoodList(response.data.data);
 }
 const loadCartData=async(token)=>{
  const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
  console.log(response);
  setCartItems(response.data.cartData);
  
 }
 useEffect(()=>{
 
  async function loadData(){
    await fetchFoodList();
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
      await loadCartData(localStorage.getItem("token"))
    }
  }
  loadData();
 },[])
    const contextValue={
food_list,
cartItems,setCartItems,
addToCart,
removeFromCart,
getTotalCartAmount,
url,
token,setToken,
    };
    return (
        <StoreContext.Provider value={contextValue}>
         {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider