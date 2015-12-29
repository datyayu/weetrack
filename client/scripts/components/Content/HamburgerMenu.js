import React, { PropTypes } from 'react';


const HamburgerMenu = ({ isMenuShowing = false }, { actions }) =>
  <div className={`HamburgerMenu ${isMenuShowing ? 'is-active' : ''}`}
       onClick={actions.toggleMenu}>
    <span className="HamburgerMenu__line" id="line1"></span>
    <span className="HamburgerMenu__line" id="line2"></span>
    <span className="HamburgerMenu__line" id="line3"></span>
  </div>
;

HamburgerMenu.contextTypes = {
  store: PropTypes.object,
  actions: PropTypes.shape({ toggleMenu: PropTypes.func }),
};

HamburgerMenu.propTypes = {
  isMenuShowing: PropTypes.bool,
};


export default HamburgerMenu;
