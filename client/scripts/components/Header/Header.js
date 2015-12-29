import React, { PropTypes } from 'react';
import HeaderTitle from './HeaderTitle';
import Navigation from '../Navigation/Navigation';


const Header = ({ path, mobileMenuShowing = false }) =>
  <div className={`Header ${mobileMenuShowing ? 'is-active' : ''}`}>
    <HeaderTitle isMenuShowing={mobileMenuShowing} />
    <Navigation currentUrl={path} />
  </div>
;

Header.propTypes = {
  mobileMenuShowing: PropTypes.bool,
  routing: PropTypes.object,
};


export default Header;
