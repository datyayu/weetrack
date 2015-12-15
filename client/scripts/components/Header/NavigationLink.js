import React from 'react';


const NavigationLink = ({ text, url, isActive }) =>
  <li className="NavigationLink">
    <a className={`NavigationLink__link ${isActive ? 'is-active' : ''}`}
       href={`#${url}`}>
      {text}
    </a>
  </li>
;


export default NavigationLink;
