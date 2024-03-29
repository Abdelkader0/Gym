import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
        <img src={Logo} alt="" className="logo" />
        {mobile && (
          <div 
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpened(true)}
          >

            <img src={Bars} alt='' style={{width: '1.5rem', height: '1.5rem'}}/>
          </div>
        )}
        {!mobile && (
          <ul className='nav-menu'>
            <li onClick={()=> setMenuOpened(false)}>
            <NavLink 
                to="/"
                // className={({ isActive }) => (isActive ? 'active' : '') } 
                onClick={() => setMenuOpened(false)} // No need to setActiveLink here 
              >
                Home
              </NavLink>
            </li>
            <li onClick={()=> setMenuOpened(false)}>Programs</li>
            <li onClick={()=> setMenuOpened(false)}>Choose us</li>
            <li onClick={()=> setMenuOpened(false)}>Plans</li>
            <li onClick={()=> setMenuOpened(false)}>Testimonials</li>
            <li onClick={()=> setMenuOpened(false)}>
              <NavLink 
                to="/news"
                // className={({ isActive }) => (isActive ? 'active' : '') } 
                onClick={() => setMenuOpened(false)} // No need to setActiveLink here 
              >
                News
              </NavLink>
            </li>

          </ul>
        )}
        {mobile && menuOpened && (
          <ul className='mobile-menu'>
            <li>
              <Link
                onClick={()=> setMenuOpened(false)}
                to= "home"
                span= {true}
                smooth= {true}
              >Home</Link>
            </li>
            <li>
              <Link
                onClick={()=> setMenuOpened(false)}
                to= "programs"
                span= {true}
                smooth= {true}
              >Programs</Link>
            </li>
            <li>
              <Link
                onClick={()=> setMenuOpened(false)}
                to= "reasons"
                span= {true}
                smooth= {true}
              >Choose us</Link>
              </li>
            <li>
              <Link
                onClick={()=> setMenuOpened(false)}
                to= "plans"
                span= {true}
                smooth= {true}
               >Plans</Link>
            </li>
            <li>
              <Link
                onClick={()=> setMenuOpened(false)}
                to= "testimonials"
                span= {true}
                smooth= {true}
              >Testimonials</Link>
            </li>
          </ul>
        )}
    </div>
  );
};

export default Header