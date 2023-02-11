import React from "react";
import "./Work.css";
import amazon from "../img/amazon.png";
import fiverr from "../img/fiverr.png";
import Facebook from "../img/Facebook.png";
import Upwork from "../img/Upwork.png";
import Shopify from "../img/Shopify.png";
import { motion } from 'framer-motion';
import {roll} from "../utils/frameMotion"


const Work = () => {
  return (
    <div className="work_Main div-center-90" id="portfolio">
      <div className="work_Part1">
        <h1>Work for All These</h1>
        <h2>Brands & Clients</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="nav_Button">Hire Me</button>
      </div>

      <div className="work_Part2">
        <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={roll()}>

        <div className="roll">
          <div className="roll_Box fiverr">
            <img src={fiverr}  />
          </div>
          <div className="roll_Box amazon">
            <img src={amazon}  />
          </div>
          <div className="roll_Box upwork">
            <img src={Upwork} />
          </div>
          <div className="roll_Box shopify">
            <img src={Shopify}  />
          </div>
          <div className="roll_Box facebook">
            <img src={Facebook}  />
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
