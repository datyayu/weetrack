import React, { PropTypes } from 'react';


const SeriesCardFront = ({ title, img, id }) =>
  <a className="SeriesCardFront SeriesCard__side" href={`#/series/${id}`}>
    <img className="SeriesCardFront__image" src={img} />
    <h3 className="SeriesCardFront__title"> {title} </h3>
  </a>
;

SeriesCardFront.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};


export default SeriesCardFront;
