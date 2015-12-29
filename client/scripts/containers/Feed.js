import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as feedActions from '../actions/feedActions';

import ContentTitle from '../components/Content/ContentTitle';
import LoadingIcon from '../components/Content/LoadingIcon';
import FeedReleases from '../components/Releases/FeedReleases';


/* Feed/Index Page wrapper component */
class Feed extends Component {
  componentWillMount() {
    this.props.actions.fetchFeed();
  }

  render() {
    const {application, feed} = this.props;

    return (
      <div className="Content">
        <ContentTitle text="Latest Releases" isMenuShowing={application.mobileMenuShowing} />
        {
          feed.isFetching ? <LoadingIcon /> : <FeedReleases {...feed} />
        }
      </div>
    );
  }
}

Feed.propTypes = {
  actions: PropTypes.shape({ fetchFeed: PropTypes.func.isRequired }),

  application: PropTypes.shape({ mobileMenuShowing: PropTypes.bool }),

  feed: PropTypes.shape({ releases: PropTypes.arrayOf(PropTypes.object) }),
};


const mapStateToProps = (state) => {
  return {
    application: state.application,
    feed: state.feed,
    routing: state.routing,
  };
};

const mapActionsToProps = (dispatch) => {
  return { actions: bindActionCreators(feedActions, dispatch) };
};

export default connect(mapStateToProps, mapActionsToProps)(Feed);
