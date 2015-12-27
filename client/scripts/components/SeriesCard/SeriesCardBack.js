import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const SeriesCardBack = ({ id, title, status, episodes, description }) =>
  <Link to={`/series/${id}`} className="SeriesCardBack SeriesCard__side">
    <p className="SeriesCardBack__description"> {description} </p>

    <div className="SeriesCardBack__info">
      <span className="SeriesCardBack__infoBlock"> {episodes}<br/>Episodes </span>
      <span className="SeriesCardBack__infoBlock"> {status} </span>
    </div>

    <h3 className="SeriesCardBack__title"> {title} </h3>
  </Link>
;

SeriesCardBack.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Airing', 'Finished', 'Not yet started']),
  episodes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};


export default SeriesCardBack;
