import React, { PropTypes } from 'react';
import HamburgerMenu from './HamburgerMenu';


const ContentTitle = ({ text }) =>
  <div className="ContentTitle">
    <HamburgerMenu />
    <h2 className="ContentTitle__text"> {text} </h2>
  </div>
;

ContentTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContentTitle;
