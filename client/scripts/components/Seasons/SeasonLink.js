import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const SeasonLink = ({ id }) =>
  <Link to={`/season/${id}`} className="SeasonLink">
    <div className="SeasonLink__image"
         style={{ backgroundImage: `url(http://weetrack.s3.amazonaws.com/${id}.jpg)` }} />
  </Link>
;

SeasonLink.propTypes = {
  id: PropTypes.string.isRequired,
};


export default SeasonLink;
