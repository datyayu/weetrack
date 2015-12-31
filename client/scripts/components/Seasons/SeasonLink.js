import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { IMAGE_BUCKET } from '../../constants/endpoints';


const SeasonLink = ({ id }) =>
  <Link to={`/season/${id}`} className="SeasonLink">
    <div className="SeasonLink__image"
         style={{ backgroundImage: `url(${IMAGE_BUCKET}/${id}.jpg)` }} />
  </Link>
;

SeasonLink.propTypes = {
  id: PropTypes.string.isRequired,
};


export default SeasonLink;
