import React, {PropTypes} from 'react';


const handleClick = (callback) => {
  return (event) => {
    event.stopPropagation();
    callback();
  };
};

const ContentBlocker = ({ isActive = false }, { actions }) =>
  isActive ?
    <div className="ContentBlocker" onClick={handleClick(actions.hideMenu)}></div>
    : <div></div>
;

ContentBlocker.contextTypes = {
  actions: PropTypes.shape({
    hideMenu: PropTypes.func,
  }),
};

ContentBlocker.propTypes = {
  isActive: PropTypes.bool,
};


export default ContentBlocker;
