import react, { useContext, useState } from "react";
import "./Navbar.css";
import {set} from '../../assets/assets';
import { FaSearch } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import { BsBasket3Fill } from "react-icons/bs";
import { StoreContext } from "../../context/StoreContext";
import { IoBagOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
const Navbar=({setShowLogin})=>{
   const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const [menu,setMenu]=useState("Home");
    const navigate=useNavigate();
    const logout=()=>{
localStorage.removeItem("token");
setToken("");
navigate("/");
    }
    return<div className="navbar">
       <Link to="/"> <img src={set.logo} alt=""  height={100}/></Link>
<ul className="navbar-menu">
   <Link to="/" className={menu==="Home"?"active":""} onClick={()=>{setMenu("Home")}}>Home</Link> 
    <a href="#explore-menu" className={menu==="Menu"?"active":""} onClick={()=>{setMenu("Menu")}}>Menu</a>
    <a href="#app-download" className={menu==="Mobile-app"?"active":""} onClick={()=>{setMenu("Mobile-app")}}>Mobile-app</a>
    <a href="#footer" className={menu==="Contact Us"?"active":""} onClick={()=>{setMenu("Contact Us")}}>Contact Us</a>
</ul>
<div className="navbar-right">
   <FaSearch/>
<div className="navbar-search-icon">
<Link to="/cart"> <BsBasket3Fill/></Link>
<div className={getTotalCartAmount()===0?"":"dot"}></div>
</div>
{!token?<button onClick={()=>{setShowLogin(true)}}>Sign In</button>:<div className="navbar-profile">
   <img src={set.userIcon} alt="" width={30} height={30}/>
   <ul className="nav-profile-dropdown">
      <li onClick={()=>{navigate("/myorders")}}><IoBagOutline className="bag"/><p>Orders</p> </li>
      <hr />
      <li onClick={logout}><MdLogout className="log"/><p>Logout</p></li>
   </ul>
   </div>}

</div>
</div>
}
export default Navbar