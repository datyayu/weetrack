import React, { PropTypes } from 'react';
import SeriesInfo from './SeriesInfo';


const SeriesInfoCard = (props) =>
  <div className="SeriesInfoCard">
    <img className="SeriesInfoCard__image" src={props.img} alt={props.title} />
    <SeriesInfo {...props} />
  </div>
;

SeriesInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
  season: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  status: PropTypes.oneOf([
    'Not Yet Started',
    'Airing',
    'Finished',
  ]).isRequired,

  links: PropTypes.shape({
    official: PropTypes.string,
    twitter: PropTypes.string,
    mal: PropTypes.string,
  }).isRequired,
};


export default SeriesInfoCard;
