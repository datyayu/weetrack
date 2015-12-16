import React, { PropTypes } from 'react';
import ContentTitle from '../components/Content/ContentTitle';
import SeriesList from '../components/series/SeriesList';


const Season = ({ season, application }) =>
  <div className="Content">
    <ContentTitle text={season.name} isMenuShowing={application.mobileMenuShowing} />
    <SeriesList series={season.series} />
  </div>
;


Season.propTypes = {
  application: PropTypes.shape({
    mobileMenuShowing: PropTypes.bool,
  }),

  season: PropTypes.shape({
    name: PropTypes.string.isRequired,
    series: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};


export default Season;
