import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const SeriesCardFront = ({ title, img, id }) =>
  <Link to={`/series/${id}`} className="SeriesCardFront SeriesCard__side">
    <img className="SeriesCardFront__image" src={img} />
    <h3 className="SeriesCardFront__title"> {title} </h3>
  </Link>
;

SeriesCardFront.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};


export default SeriesCardFront;
