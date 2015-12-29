import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as seasonActions from '../actions/seasonActions';

import LoadingIcon from '../components/Content/LoadingIcon';
import ContentTitle from '../components/Content/ContentTitle';
import SeriesList from '../components/Series/SeriesList';


class Season extends Component {
  componentWillMount() {
    const paths = this.props.routing.path.split('/');
    const seasonId = paths[paths.length - 1]; // Get the last part of the URL.
    this.props.actions.fetchSeason(seasonId);
  }

  render() {
    const {application, season} = this.props;

    return (
      <div className="Content">
        <ContentTitle text={season.name} isMenuShowing={application.mobileMenuShowing} />
        {
          season.isFetching ? <LoadingIcon /> : <SeriesList series={season.series} />
        }
      </div>
    );
  }
}

Season.propTypes = {
  actions: PropTypes.shape({
    fetchSeason: PropTypes.func,
  }),

  routing: PropTypes.object,

  application: PropTypes.shape({
    mobileMenuShowing: PropTypes.bool,
  }),

  season: PropTypes.shape({
    name: PropTypes.string,
    series: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};


const mapStateToProps = (state) => {
  return {
    application: state.application,
    season: state.season,
    routing: state.routing,
  };
};

const mapActionsToProps = (dispatch) => {
  return { actions: bindActionCreators(seasonActions, dispatch) };
};

export default connect(mapStateToProps, mapActionsToProps)(Season);
