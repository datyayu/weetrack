import React, { PropTypes } from 'react';


const ReleaseLink = ({ group, url }) =>
  <li className="ReleaseLink">
    <a className="ReleaseLink__link" href={url}> [{group}] </a>
  </li>
;

ReleaseLink.propTypes = {
  group: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default ReleaseLink;
