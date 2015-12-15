import React from 'react';
import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';


const Header = (props) =>
  <div className="Header">
    <HeaderTitle />
    <Navigation {...props} />
  </div>
;


export default Header;
