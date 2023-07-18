import React from 'react'
import {Link} from "react-router-dom";
import '../scss/App.scss';

import LogoDark2 from '../assets/pngs/LogoDark2.png';
import androdicon from '../assets/svgs/google-play.svg';
import appleicon from '../assets/pngs/apple-logo.png';

export default function Navbar() {
  return (
    
      <header className="container header">
        <div className="row header-item">
      <div id='logo'>
      <img src={LogoDark2} alt="Logo Dark 2" />
      </div>
      <div id="navmenu">
      <nav>
      <ul>
      <li><Link to='/'> <div>Home </div></Link></li>
      <li><Link to='/products'> <div>Products </div></Link></li>
      <li><Link to='/about'> <div>About Us </div></Link></li>
      <li><Link to='/blogs'> <div>Blogs </div></Link></li>
      <li><Link to='/career'> <div>Career </div></Link></li>
      <li><Link to='/contact'> <div>Contact </div></Link></li>
      <li><Link to='/description'><div>Description Page</div></Link></li>
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