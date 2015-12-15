import React, { PropTypes } from 'react';


const NavigationLink = ({ text, url, isActive = false }) =>
  <li className="NavigationLink">
    <a className={`NavigationLink__link ${isActive ? 'is-active' : ''}`}
       href={`#${url}`}>
      {text}
    </a>
  </li>
;

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};


export default NavigationLink;
