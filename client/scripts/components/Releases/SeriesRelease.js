import React, { PropTypes } from 'react';
import ReleaseInfo from './ReleaseInfo';
import ReleaseLinks from './ReleaseLinks';


const SeriesRelease = ({ number, createdAt, releases }) =>
  <li className="SeriesRelease">
    <ReleaseInfo showTitle={false} episode={number} createdAt={createdAt} />

    <div className="SeriesRelease_links">
      {
        releases.fullhd.length > 0 ?
          <ReleaseLinks quality="1080p" releases={releases.fullhd} /> : null
      }
      {
        releases.hd.length > 0 ?
          <ReleaseLinks quality="720p" releases={releases.hd} /> : null
      }
      {
        releases.lq.length > 0 ?
          <ReleaseLinks quality="480p" releases={releases.lq} /> : null
      }
    </div>
  </li>
;

SeriesRelease.propTypes = {
  number: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,

  releases: PropTypes.shape({
    lq: PropTypes.array,
    hd: PropTypes.array,
    fullhd: PropTypes.array,
  }).isRequired,
};


export default SeriesRelease;
