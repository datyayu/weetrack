import React, { PropTypes } from 'react';
import ContentTitle from '../Content/ContentTitle';
import FeedReleases from '../Releases/FeedReleases';

const Feed = (props) =>
  <div className="Feed">
    <ContentTitle text="Latest Releases" />
    <FeedReleases {...props} />
  </div>
;

Feed.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Feed;
