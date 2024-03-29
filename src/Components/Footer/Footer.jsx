import React from 'react';
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => { 
  return (
    <div className='Footer-container'>
      <hr/>
      <div className='footer'>
        <div className='social-links'>
          <img src={Github} alt=''/>
          <img src={Instagram} alt=''/>
          <img src={Linkedin} alt=''/>    
        </div>
        <div className='logo-f'>
          <img src={Logo} alt=''/>
        </div>

        <div className='copyright'>
          All rights reserved by Ahmed & Marian &copy; ALX-2024
        </div>
      </div>

      <div className='blur footer-blur-l'></div>
      <div className='blur footer-blur-r'></div>
    </div>
  ); 
};

export default Footer
