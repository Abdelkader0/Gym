import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter"

const hero = () => {
  const transition = {type: "spring", duration: 5}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>
      <div className='blur hero-blur'></div>
      <div className="left-side">
        <Header/>

        {/* the best Ad div Start */}
        <div className="the-Best-ad">
          <motion.div
            initial= {{left: mobile? '165px': '238px'}}
            whileInView= {{left: "8px"}}
            transition= {{...transition, type: "tween"}}
          ></motion.div>
          <span>The best fitness Club in the Town</span>
        </div>
        {/* the best Ad div End */}

        {/* the hero-text div Start */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
             Athletes and body builders may aim for even lower levels, typically in the range of 4-10%. For females, a body fat percentage of approxim.
           </div>
        </div>
        {/* the hero-text div End */}

        {/* the figture Start */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={50} start={30} preFix="+" delay="5" />
            </span>
            <span>Expert Coches</span>
          </div>
          <div>
            <span>
             <NumberCounter end={800} start={720} preFix="+" delay="5" />
            </span>
            <span>Member Joines</span>
          </div>
          <div>
            <span>
            <NumberCounter end={30} start={20} preFix="+" delay="5" />
            </span>
            <span>Programs</span>
          </div>
        </div>
        {/* the figture End */}


        {/* HERO button Start */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* HERO button End */}
      
      </div>
      <div className="right-side">
       <button className="btn">Register now</button>


        <motion.div className="heart-rate"
          initial= {{right: "-1rem"}}
          whileInView= {{right: "4rem"}}
          transition= {{...transition, type: "tween" }}>
            <img src={Heart} alt="heart"/>
            <span>Heart Rate</span>
            <span>Training</span>
        </motion.div>


        <img src={hero_image} alt="hero_image" className="hero-image"/>
        <motion.img
        initial= {{right: "11rem"}}
        whileInView= {{right: "20rem"}}
        transition= {{...transition, type: "tween"}}
        src={hero_image_back} alt="hero_image_back" className="hero-image-back"/>

        {/* div calories start */}
        <motion.div className="calories"
           initial= {{right: "37rem"}}
           whileInView={{right: "28rem"}}
           transition={{...transition, type: "tween" }}>
            <img src={Calories} alt="calories"/>
            <div>
              <span>Calories</span>
              <span>Tracking</span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hero