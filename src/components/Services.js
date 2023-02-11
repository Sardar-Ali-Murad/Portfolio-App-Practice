import React from "react";
import "./Services.css";
import glasses from "../img/glasses.png";
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn, planetVariants} from "../utils/frameMotion"

const Services = () => {
  return (
    <div className="services_Main div-center-80" id="services">
      <div>
        <h1>My Awesome</h1>
        <h2 className="service">Services</h2>
        <p className="label">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <button className="nav_Button">Download CV</button>
      </div>
      {/*  */}
      <div className="services_Part2">
          <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={ planetVariants("left")}>
        <div className="card1_Main">

        

          <div className="card card1">
            <img src={glasses} />
            <p className="card_Head">Developer</p>
            <p className="card_Para label">
              HTML,CSS,JAVASCRIPT,NODEJS <br /> Express,MONGODB
            </p>
            <a className="card_Btn">See More</a>
          </div>
        </div>
          </motion.div>

          <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={ planetVariants("right")}>

        <div className="card_Other_Main">
          <div className="card card1">
            <img src={glasses} />
            <p className="card_Head">Developer</p>
            <p className="card_Para label">
              HTML,CSS,JAVASCRIPT,NODEJS <br /> Express,MONGODB
            </p>
            <a className="card_Btn">See More</a>
          </div>
          <div className="card card1">
            <img src={glasses} />
            <p className="card_Head">Developer</p>
            <p className="card_Para label">
              HTML,CSS,JAVASCRIPT,NODEJS <br /> Express,MONGODB
            </p>
            <a className="card_Btn">See More</a>
          </div>
        </div>
          </motion.div>
      </div>
      {/*  */}
    </div>
  );
};

export default Services;
