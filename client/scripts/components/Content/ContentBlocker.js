import React, {PropTypes} from 'react';


const ContentBlocker = ({ isActive = false }) =>
  isActive ?
    <div className="ContentBlocker"
         onClick={event => event.stopPropagation()}>
    </div>
    : <div></div>
;

ContentBlocker.propTypes = {
  isActive: PropTypes.bool,
};


export default ContentBlocker;
