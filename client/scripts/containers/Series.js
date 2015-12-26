import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as seriesActions from '../actions/seriesActions';

import ContentTitle from '../components/Content/ContentTitle';
import SeriesIndividual from '../components/Series/SeriesIndividual';


class Series extends Component {
  componentWillMount() {
    const paths = this.props.routing.path.split('/');
    const seriesID = paths[paths.length - 1]; // Get the last part of the URL.

    this.props.actions.fetchSeries(seriesID);
  }

  render() {
    const {application, series} = this.props;
    console.log(series.series);

    return (
      <div className="Content">
        <ContentTitle text="Latest Releases" isMenuShowing={application.mobileMenuShowing} />
        { series.series ? <SeriesIndividual {...series.series} /> : null }
      </div>
    );
  }
}

Series.propTypes = {
  actions: PropTypes.shape({
    fetchSeries: PropTypes.func,
  }),

  application: PropTypes.shape({
    mobileMenuShowing: PropTypes.bool,
  }),

  series: PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    application: state.application,
    series: state.series,
    routing: state.routing,
  };
};

const mapActionsToProps = (dispatch) => {
  return { actions: bindActionCreators(seriesActions, dispatch) };
};

export default connect(mapStateToProps, mapActionsToProps)(Series);
