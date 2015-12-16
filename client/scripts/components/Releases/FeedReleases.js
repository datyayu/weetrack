import React, { PropTypes } from 'react';
import FeedRelease from './FeedRelease';


const FeedReleases = ({ releases }) =>
  <ul className="FeedReleases">
    {
      releases.map((release, idx) => <FeedRelease key={idx} {...release} />)
    }
  </ul>
;

FeedReleases.propTypes = {
  releases: PropTypes.array.isRequired,
};


export default FeedReleases;
