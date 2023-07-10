import React from 'react'
import {Link} from "react-router-dom";
import '../scss/App.scss';

import LogoDark2 from '../assets/svgs/LogoDark2.svg';
import androdicon from '../assets/svgs/google-play.svg';
import appleicon from '../assets/svgs/apple-logo.svg';




export default function Navbar() {
  return (
    
      <header>
        <div id="mainwrap">
      <div id='logo'>
      <img src={LogoDark2} alt="Logo Dark 2" />
      </div>
      <div id="navmenu">
      <nav>
      <ul>
      <li><Link to='/'> <div>Home </div></Link></li>
      <li><Link to='/contact'> <div>Contact </div></Link></li>
      <li><Link to='/about'> <div>About Us </div></Link></li>
      <li><Link to='/products'> <div>Products </div></Link></li>
      <li><Link to='/blogs'> <div>Blogs </div></Link></li>
      <li><Link to='/career'> <div>Career </div></Link></li>
      </ul>
      </nav>
      </div>
      <div id="brand-icon">
<img src={androdicon} alt="adroidIcon" />
<img src={appleicon} alt="appleIcon"/>
      </div>
      </div>
      </header>
    
  )
}