import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ContentTitle from '../components/Content/ContentTitle';
import SeasonsList from '../components/Seasons/seasonsList';


// TODO: Create an endpoint server-side to request this stuff.
const seasons = [
  'summer-2017',
  'fall-2016',
  'summer-2016',
  'winter-2016',
  'fall-2015',
  'summer-2015',
];

/* Season List wrapper component */
const Seasons = ({ application }) =>
  <div className="Content">
    <ContentTitle text="Seasons" isMenuShowing={application.mobileMenuShowing} />
    <SeasonsList seasons={seasons} />
  </div>
;

Seasons.propTypes = {
  application: PropTypes.shape({ mobileMenuShowing: PropTypes.bool }),
};


const mapStateToProps = (state) => {
  return { application: state.application };
};

export default connect(mapStateToProps)(Seasons);
