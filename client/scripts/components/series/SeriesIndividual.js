import React, { PropTypes } from 'react';
import SeriesInfoCard from './SeriesInfoCard';
import SeriesReleases from '../Releases/SeriesReleases';


const SeriesIndividual = ({ content, episodes }) =>
  <div className="SeriesIndividual">
    <SeriesInfoCard {...content} />
    <SeriesReleases releases={episodes} />
  </div>
;

const releasePropsShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
});

SeriesIndividual.propTypes = {
  content: PropTypes.shape({
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
  }),

  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      lq: PropTypes.arrayOf(releasePropsShape),
      hd: PropTypes.arrayOf(releasePropsShape),
      fullhd: PropTypes.arrayOf(releasePropsShape),
    })
  ).isRequired,
};


export default SeriesIndividual;
