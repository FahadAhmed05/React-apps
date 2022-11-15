import React from "react";
import logo from "../images2/logo.littlebook.svg";
import path_icon from "../images2/path.png";
import location_mark from "../images2/locationMark.png";
import shoppingCart from "../images2/shoppingCart.png";
import SearchIcon from '../images2/searchIcon(new).png';
import '../index.css';
export default function Header() {
  return (
    <>
    <div className="container-fluid">
    <div className="row m-0 mt-5">
       <div className="col-xl-3">
        <img className="logo" src={logo}/>
       </div>
       <div className="col-xl-4">
       <img className="search-icon" src={SearchIcon}/>
         <input className="dashboard-header-input w-100 mt-4 pl-4" type="text" placeholder="Search best book 2022"/>
         <div className="vertical-line"></div>
         <img className="path-icon" src={path_icon}/>
</div>
<div className="col-xl-2">
      <img className="location-mark" src={location_mark}/>
      <label className="location-label">Pakistan</label>
      <img className="shopping-cart" src={shoppingCart}/>
      <label className="cart-no">0</label>
</div>
<div className="col-xl-3 text-center">
<label className="login-btn mt-4">Login</label>
<label className="register-btn">Register</label>
</div>
</div> 
 </div>
 <div className="container-own">
<div className="row m-0 mt-5 text-center">
 <div className="col-xl-1">
   <button className="home-btn">Books</button>
 </div>
 <div className="col-xl-3">
 <button className="header-tab-btns">Stories Work Collective</button>
</div>
<div className="col-xl-2">
<button className="header-tab-btns">Audio Books</button>
</div>
<div className="col-xl-2">
<button className="header-tab-btns">Print on Demand</button>
</div>
<div className="col-xl-2">
<button className="header-tab-btns">Services</button>
</div>
<div className="col-xl-2">
<button className="header-tab-btns">About us</button>
</div>
</div>
    </div>
    </>
  );
}