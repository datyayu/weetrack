import React, { PropTypes } from 'react';
import HeaderTitle from './HeaderTitle';
import Navigation from '../Navigation/Navigation';


const Header = ({ currentUrl, mobileMenuShowing = false }) =>
  <div className={`Header ${mobileMenuShowing ? 'is-active' : ''}`}>
    <HeaderTitle isMenuShowing={mobileMenuShowing} />
    <Navigation currentUrl={currentUrl} />
  </div>
;

Header.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  mobileMenuShowing: PropTypes.bool,
};

export default Header;
