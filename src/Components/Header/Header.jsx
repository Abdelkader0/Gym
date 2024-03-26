import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

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
            onClick={() => setMenuOpened(!menuOpened)}
          >

            <img src={Bars} alt='' style={{width: '1.5rem', height: '1.5rem'}}/>
          </div>
        )}
        {!mobile && (
          <ul className='nav-menu'>
            <li onClick={()=> setMenuOpened(false)}>Home</li>
            <li onClick={()=> setMenuOpened(false)}>Programs</li>
            <li onClick={()=> setMenuOpened(false)}>Choose us</li>
            <li onClick={()=> setMenuOpened(false)}>Plans</li>
            <li onClick={()=> setMenuOpened(false)}>Testemonials</li>
          </ul>
        )}
        {mobile && menuOpened && (
          <ul className='mobile-menu'>
            <li onClick={()=> setMenuOpened(false)}>Home</li>
            <li onClick={()=> setMenuOpened(false)}>Programs</li>
            <li onClick={()=> setMenuOpened(false)}>Choose us</li>
            <li onClick={()=> setMenuOpened(false)}>Plans</li>
            <li onClick={()=> setMenuOpened(false)}>Testemonials</li>
          </ul>
        )}
    </div>
  );
};

export default Header