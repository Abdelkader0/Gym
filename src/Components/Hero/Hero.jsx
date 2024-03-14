import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const hero = () => {
  return (
    <div className="hero">
        <div className="left-side">
        <Header/>

        {/* the best Ad div Start */}
        <div className="the-Best-ad">
            <div></div>
            <span>The best fitness Club in the Town</span>
        </div>
        {/* the best Ad div End */}

        {/* the hero-text div Start */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
             Athletes and bodybuilders may aim for even lower levels, typically in the range of 4-10%. For females, a body fat percentage of approxim.
           </div>
        </div>
        {/* the hero-text div End */}

        {/* the figture Start */}
        <div className="figures">
          <div>
            <span>+120</span>
            <span>Expert Coches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>Member Joines</span>
          </div>
          <div>
            <span>+50</span>
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
       <button className="btn">Join now</button>


        <div className="heart-rate">
          <img src={Heart} alt="heart"/>
          <span>Heart Rate</span>
          <span>Training</span>
        </div>


        <img src={hero_image} alt="hero_image" className="hero-image"/>
        <img src={hero_image_back} alt="hero_image_back" className="hero-image-back"/>

        {/* div calories start */}
        <div className="calories">
          <img src={Calories} alt="calories"/>
          <div>
            <span>Calories</span>
            <span>Tracking</span>
          </div>
        </div>




        </div>
</div>
  )
}

export default hero