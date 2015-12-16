import React, { PropTypes } from 'react';


const ContentTitle = ({ text }) =>
  <div className="ContentTitle">
    <h2 className="ContentTitle__text"> {text} </h2>
  </div>
;

ContentTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContentTitle;
