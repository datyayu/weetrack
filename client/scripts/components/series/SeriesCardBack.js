import React, { PropTypes } from 'react';


const SeriesCardBack = ({ id, title, status, episodes, description }) =>
  <a className="SeriesCardBack SeriesCard__side" href={`#/series/${id}`}>
    <p className="SeriesCardBack__description"> {description} </p>

    <div className="SeriesCardBack__info">
      <span className="SeriesCardBack__infoBlock"> {episodes}<br/>Episodes </span>
      <span className="SeriesCardBack__infoBlock"> {status} </span>
    </div>

    <h3 className="SeriesCardBack__title"> {title} </h3>
  </a>
;

SeriesCardBack.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Airing', 'Finished', 'Not yet started']),
  episodes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};


export default SeriesCardBack;
