import React from 'react'
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"; 
import { set } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
<img src={set.footerLogo} alt="" width={100} height={100} />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique quis totam autem consequuntur ex veniam, libero vero. Error explicabo earum fuga, voluptas atque cum dolorem nulla iste odit veritatis molestiae, ad qui accusamus eaque aliquid laborum in mollitia fugit facere eos aliquam.</p>
<div className="footer-social-icons">
<FaInstagramSquare/>
<FaTwitterSquare/>
<FaLinkedin/>
</div>
    </div>
    <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
    </div>
    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 8905478628</li>
    <li>contactdelivery@gmail.com</li>
</ul>
    </div>
</div>
<hr/>
<p className='footer-copyright'>
    Copyright 2024 © delivery.com - All Right Reserved
</p>
    </div>
  )
}

export default Footer