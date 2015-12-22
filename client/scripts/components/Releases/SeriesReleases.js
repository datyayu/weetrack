import React, { PropTypes } from 'react';
import SeriesRelease from './SeriesRelease';


const SeriesReleases = ({ releases }) =>
  <ul className="SeriesReleases">
    {
      releases.map((release, idx) => <SeriesRelease key={idx} {...release} />)
    }
  </ul>
;

SeriesReleases.propTypes = {
  releases: PropTypes.array.isRequired,
};


export default SeriesReleases;
