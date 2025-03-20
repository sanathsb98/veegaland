import React from 'react';
import '../components/Navbar.css';
import logo from "../Images/veegalandLogo.png";

const Navbar = () => {
  return (
    <div className='navbar-component'>
      <div className='navbar-content'>
        <div className='navbar-content-left'>
          <img src={logo} className='veegaland-logo'/>
        </div>
        <div className='navbar-content-right'>
            <div className='nav-tab'>Home</div>
            <div className='nav-tab'>Projects</div>
            <div className='nav-tab'>Sustainablity</div>
            <div className='nav-tab'>FAQ</div>
            <div className='nav-tab'>About</div>
            <div className='enquire-btn'>Enquire Now</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
