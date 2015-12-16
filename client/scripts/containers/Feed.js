import React, { PropTypes } from 'react';
import ContentTitle from '../components/Content/ContentTitle';
import FeedReleases from '../components/Releases/FeedReleases';
import ContentBlocker from '../components/Content/ContentBlocker';


const Feed = ({ feed, application }) =>
  <div className="Feed">
    <ContentTitle text="Latest Releases" isMenuShowing={application.mobileMenuShowing} />
    <FeedReleases {...feed} />
    <ContentBlocker isActive={application.mobileMenuShowing} />
  </div>
;

Feed.propTypes = {
  application: PropTypes.shape({
    mobileMenuShowing: PropTypes.bool,
  }),

  feed: PropTypes.shape({
    releases: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};


export default Feed;
