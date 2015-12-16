import React, { PropTypes } from 'react';
import ContentTitle from '../components/Content/ContentTitle';
import FeedReleases from '../components/Releases/FeedReleases';


const Feed = ({ feed, application }) =>
  <div className="Content">
    <ContentTitle text="Latest Releases" isMenuShowing={application.mobileMenuShowing} />
    <FeedReleases {...feed} />
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
