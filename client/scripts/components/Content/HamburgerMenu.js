import React from 'react';


const HamburgerMenu = ({ isMenuShowing }) =>
  <div className={`HamburgerMenu ${isMenuShowing ? 'is-active' : ''}`}>
    <span className="HamburgerMenu__line" id="line1"></span>
    <span className="HamburgerMenu__line" id="line2"></span>
    <span className="HamburgerMenu__line" id="line3"></span>
  </div>
;


export default HamburgerMenu;
