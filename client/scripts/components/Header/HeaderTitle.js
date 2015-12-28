import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const HeaderTitle = (props, { actions }) =>
  <Link to="/" className="HeaderTitle" onClick={actions.toggleMenu}>
    <span className="HeaderTitle--wee">W</span>
    <span className="HeaderTitle--site">t</span>
  </Link>
;

HeaderTitle.contextTypes = {
  actions: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
};


export default HeaderTitle;
