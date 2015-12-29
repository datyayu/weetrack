import React, { PropTypes } from 'react';


const FooterLink = ({ name, url, newTab }) =>
  <a className="FooterLink"
     href={url}
     target={newTab ? '_blank' : ''}>
    {name}
  </a>
;


FooterLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};


export default FooterLink;
