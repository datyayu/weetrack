import React, { PropTypes } from 'react';
import FooterLink from './FooterLink';

const defaultLinks = [
  { name: 'Home', url: '/' },
  { name: 'Github', url: 'https://github.com/datyayu/weetrack', newTab: true },
];


const Footer = ({ links = defaultLinks }) =>
  <div className="Footer">
    {
      links.map((link, idx) => <FooterLink key={idx} {...link} />)
    }
  </div>
;


Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    })
  ),
};


export default Footer;
