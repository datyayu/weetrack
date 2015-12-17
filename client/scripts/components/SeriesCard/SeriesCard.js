import React, { PropTypes } from 'react';
import SeriesCardFront from './SeriesCardFront';
import SeriesCardBack from './SeriesCardBack';


const SeriesCard = ({ _id, content }) =>
  <li className="SeriesCard">
    <div className="SeriesCard__card">
      <SeriesCardFront id={_id} {...content} />
      <SeriesCardBack id={_id} {...content} />
    </div>
  </li>
;

SeriesCard.propTypes = {
  _id: PropTypes.string.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Airing', 'Finished', 'Not yet started']),
    episodes: PropTypes.number.isRequired,
    season: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};


export default SeriesCard;
