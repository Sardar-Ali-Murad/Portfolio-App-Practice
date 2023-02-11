import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Pic from "../img/boy.png";
import {ImCross}  from "react-icons/im"
const Navbar = () => {

    let [showNav,setShowNav]=React.useState(false)
  return (
    <div>
      <div className="nav_Main">
        <div className="nav_Container_Start">
          <img src={Pic} className="nav_Pic" />
        </div>

        <div className="nav_Container_End">
          <nav className="label">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#reviews">Testimonials</a>
              </li>
            </ul>
          </nav>
          <button className="nav_Button">Contact</button>
        </div>

        <div>
          <RxHamburgerMenu className="ham nav_Ham" onClick={()=>setShowNav(true)} />
        </div>
      </div>

      {/* Small Screen Navbar */}

      <div className="small_Nav_BigMain">
        <div className={`small_Screen_Nav ${showNav?"small_Nav_Active":""}`}>
        <ImCross className={`nav_Cross ${showNav?"cross_Active":""}`} onClick={()=>setShowNav(false)}/>
          <nav>
            <ul>
              <li onClick={()=>setShowNav(false)}>
                <a href="#home">Home</a>
              </li>
              <li onClick={()=>setShowNav(false)}>
                <a href="#services">Services</a>
              </li>
              <li onClick={()=>setShowNav(false)}>
                <a href="#contact">Contact</a>
              </li>
              <li onClick={()=>setShowNav(false)}>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li onClick={()=>setShowNav(false)}>
                <a href="#reviews">Testimonials</a>
              </li>
            </ul>
          </nav>
          <button className="nav_Button small_Btn" onClick={()=>setShowNav(false)}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
