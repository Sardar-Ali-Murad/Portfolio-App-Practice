import React from 'react'
import "./IntroSection.css"
import Linkedin from "../img/linkedin.png"
import Github from "../img/github.png"
import Instagram from "../img/instagram.png"
import Boy from "../img/boy.png"
import Vector1 from "../img/Vector1.png"
import Vector2 from "../img/Vector2.png"
import Imo1 from "../img/glassesimoji.png"
import crown from "../img/crown.png"
import thumbup from "../img/thumbup.png"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"



const IntroSection = () => {
  return (
    <div className='intro_Main div-center-80' id="home">
        {/*  */}
      <div className='intro_Start'>
        <h1>Hy! I Am</h1>
        <h2 className='name'>Sardar Ali Murad</h2>
        <p className='label'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <button className='nav_Button'>Hire Me</button>

        <div className='intro_Imgs'>
            <img src={Linkedin}/>
            <img src={Instagram}/>
            <img src={Github}/>
        </div>

      </div>


      {/*  */}
      <div className='intro_Part2'>
        <div className='overlapping_Imgs'>
        <img src={Vector1} className="vector2"/>
        <img src={Vector2} className="vector1"/>
       <img src={Boy} />
       <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={slideIn('left', 'tween', .3, 1)}>
            <img src={Imo1} className="Imo1"/>
       </motion.div>
        </div>
         
           <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={fadeIn('up', 'tween', .3, 1)}>
            <div className='web_DevCard '>
               <img src={crown} className="crown"/>
               <p className='label web_Skill'>Web  Developer</p>
            </div>
           </motion.div>
           
            <div className='web_DesignCard'>
               <img src={thumbup} className="crown"/>
               <p className='label web_Skill'>Web  Designer</p>
            </div>
           

      </div>
      {/*  */}

    </div>
  )
}

export default IntroSection
