import React, { PropTypes } from 'react';
import SeriesInfoCard from './SeriesInfoCard';
import SeriesReleases from '../Releases/SeriesReleases';


const SeriesIndividual = ( props ) =>
  <div className="SeriesIndividual">
    <SeriesInfoCard {...props} />
    <SeriesReleases releases={props.releases} />
  </div>
;

const releasePropsShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
});

SeriesIndividual.propTypes = {
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

  releases: PropTypes.arrayOf(
    PropTypes.shape({
      lq: PropTypes.arrayOf(releasePropsShape),
      hd: PropTypes.arrayOf(releasePropsShape),
      fullhd: PropTypes.arrayOf(releasePropsShape),
    })
  ).isRequired,
};


export default SeriesIndividual;
