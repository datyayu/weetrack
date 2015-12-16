import React, { PropTypes } from 'react';
import ReleaseLink from './ReleaseLink';


const ReleaseLinks = ({ quality, releases = [] }) =>
  <div className="ReleaseLinks">
    <h4 className="ReleaseLinks__title"> {quality} </h4>
    <ul className="ReleaseLinks__links">
      {releases.map(release => <ReleaseLink key={release._id} {...release} />)}
    </ul>
  </div>
;


ReleaseLinks.propTypes = {
  quality: PropTypes.string.isRequired,

  releases: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};


export default ReleaseLinks;
