import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as seriesActions from '../actions/seriesActions';

import LoadingIcon from '../components/Content/LoadingIcon';
import ContentTitle from '../components/Content/ContentTitle';
import SeriesIndividual from '../components/Series/SeriesIndividual';


/* Individual Series wrapper component */
class Series extends Component {
  componentWillMount() {
    // Get the series to request from the url
    const paths = this.props.routing.path.split('/');
    const seriesID = paths[paths.length - 1];

    this.props.actions.fetchSeries(seriesID);
  }

  render() {
    const {application, series} = this.props;

    return (
      <div className="Content">
        <ContentTitle text={series.series ? series.series.content.title : 'Loading...'}
                      isMenuShowing={application.mobileMenuShowing} />
          {
            series.isFetching ? <LoadingIcon /> : <SeriesIndividual {...series.series} />
          }
      </div>
    );
  }
}

Series.propTypes = {
  actions: PropTypes.shape({ fetchSeries: PropTypes.func }),

  routing: PropTypes.object,

  application: PropTypes.shape({ mobileMenuShowing: PropTypes.bool }),

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
