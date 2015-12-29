import React, { PropTypes } from 'react';
import HamburgerMenu from './HamburgerMenu';


const ContentTitle = ({ text, isMenuShowing = false }) =>
  <div className="ContentTitle">
    <HamburgerMenu isMenuShowing={isMenuShowing} />

    <h2 className="ContentTitle__text">
      {text}
    </h2>
  </div>
;

ContentTitle.propTypes = {
  isMenuShowing: PropTypes.bool,
  text: PropTypes.string.isRequired,
};


export default ContentTitle;
