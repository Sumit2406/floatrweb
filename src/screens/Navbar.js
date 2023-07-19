import React from 'react'
import '../scss/Header.scss';

import LogoDark2 from '../assets/pngs/LogoDark2.png';
import androdicon from '../assets/svgs/google-play.svg';
import appleicon from '../assets/pngs/apple-logo.png';

export default function Navbar() {
  return (
    
      <header>
        <div className="container header">
          <div className="row header-item">
            <div className='col-9'>
            <div id='logo'>
              <img src={LogoDark2} alt="Logo Dark 2" />
            </div></div>
            <div className='col-3'>
            <div id="brand-icon">
              <img src={androdicon} alt="adroidIcon" />
              <img src={appleicon} alt="appleIcon"/>
            </div>
            </div>
          </div>
        </div>
      </header>
    
  )
}