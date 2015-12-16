import React, { PropTypes } from 'react';
import ReleaseInfo from './ReleaseInfo';
import ReleaseLinks from './ReleaseLinks';


const FeedRelease = ({ number, createdAt, series, releases }) =>
  <li className="FeedRelease">
    <div className="FeedRelease__leftSide">
      <img className="FeedRelease__image" src={series.content.min} alt={series.content.title} />
    </div>

    <div className="FeedRelease__rightSide">
      <ReleaseInfo episode={number}
                   seriesTitle={series.content.title}
                   seriesId={series._id}
                   createdAt={createdAt} />

      <div className="FeedRelease_links">
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
    </div>
  </li>
;

FeedRelease.propTypes = {
  _id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,

  series: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    content: PropTypes.shape({
      title: PropTypes.string.isRequired,
      min: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  releases: PropTypes.shape({
    lq: PropTypes.array,
    hd: PropTypes.array,
    fullhd: PropTypes.array,
  }),
};


export default FeedRelease;
