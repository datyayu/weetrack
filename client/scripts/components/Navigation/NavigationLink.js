import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const NavigationLink = ({ text, url, isActive = false }, { actions }) =>
  <li className="NavigationLink" onClick={actions.hideMenu}>
    <Link to={url}
          className={`NavigationLink__link ${isActive ? 'is-active' : ''}`}>
      {text}
    </Link>
  </li>
;

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

NavigationLink.contextTypes = {
  actions: PropTypes.shape({ hideMenu: PropTypes.func }),
};


export default NavigationLink;
