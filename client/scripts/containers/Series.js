import React, { PropTypes } from 'react';
import ContentTitle from '../components/Content/ContentTitle';
import SeriesIndividual from '../components/Series/SeriesIndividual';


const Series = ({ application, series }) =>
  <div className="Content">
    <ContentTitle text={series.title} isMenuShowing={application.mobileMenuShowing} />
    <SeriesIndividual {...series} />
  </div>
;

const releasePropsShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
});

Series.propTypes = {
  application: PropTypes.shape({
    mobileMenuShowing: PropTypes.bool,
  }),

  series: PropTypes.shape({
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
  }),
};


export default Series;
