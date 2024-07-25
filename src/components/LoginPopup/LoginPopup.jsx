import React, { useContext, useState } from 'react'
import "./LoginPopup.css";
import { IoCloseSharp } from "react-icons/io5";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
const LoginPopup = ({setShowLogin}) => {
  const {url,setToken}=useContext(StoreContext);
    const [currentState,setCurrentSTatus]=useState("Sign up");
    const [data,setData]=useState({
      name:"",
      email:"",
      password:"",
    });
    const onChangeHandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))
    };
    const onLogin=async (event)=>{
event.preventDefault();
let newUrl=url;
if(currentState==="Login"){
  newUrl+="/api/user/login"
} 
else{
  newUrl+="/api/user/register";
}
const response=await axios.post(newUrl,data);
if(response.data.success){
setToken(response.data.token);
localStorage.setItem("token",response.data.token);
setShowLogin(false);
}else{
  alert(response.data.message)
}
    }
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin}  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <IoCloseSharp className='close' onClick={()=>setShowLogin(false)}/>
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input onChange={onChangeHandler} type="text" value={data.name} placeholder='Your name' name="name" required/>}
                <input onChange={onChangeHandler} type="email" value={data.email} placeholder='Your email' name="email" required/>
                <input onChange={onChangeHandler} type="password" value={data.password} placeholder='Password' name="password" required/>
            </div>
            <button type='submit'>{currentState==="Sign up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentSTatus("Sign up")}>Click here</span></p>:
              <p>Already have an account? <span onClick={()=>setCurrentSTatus("Login")}>Login here</span></p>
  }
        </form>
    </div>
  )
}

export default LoginPopup