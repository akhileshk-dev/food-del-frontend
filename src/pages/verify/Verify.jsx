import React, { useContext, useEffect } from 'react';
import "./Verify.css";
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import {message} from "antd";
const Verify = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const success=searchParams.get("success");
  const orderId=searchParams.get("orderId");
  const {url}=useContext(StoreContext);
  const navigate=useNavigate();
  const verifyPyment=async()=>{
    const response=await axios.post(url+'/api/order/verify',{success,orderId});
    
    if(response.data.success){
navigate("/myorders");
message.success(response.data.message)
    }
    else{ 
      navigate("/");
      message.error(response.data.message);
    }
  }
  useEffect(()=>{
    verifyPyment();
  },[])
  return (
    <div className='verify'>
<div className="spinner"></div>
    </div>
  )
}

export default Verify