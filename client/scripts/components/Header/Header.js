import React, { PropTypes } from 'react';
import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';


const Header = (props) =>
  <div className="Header">
    <HeaderTitle />
    <Navigation {...props} />
  </div>
;

Header.propTypes = {
  currentUrl: PropTypes.string.isRequired,
};

export default Header;
