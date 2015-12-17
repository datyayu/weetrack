import React, { PropTypes } from 'react';
import SeriesCard from '../SeriesCard/SeriesCard';


const SeriesList = ({ series }) =>
  <ul className="SeriesList">
    {series.map(show => <SeriesCard key={show._id} {...show} />)}
  </ul>
;

SeriesList.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      episodes: PropTypes.array,
      content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        status: PropTypes.oneOf(['Airing', 'Finished', 'Not yet started']),
        episodes: PropTypes.number.isRequired,
        season: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    })
  ),
};


export default SeriesList;
