import React, { PropTypes } from 'react';
import {unix} from 'moment';


const ReleaseInfo = ({ episode, seriesTitle, seriesId, createdAt, showTitle = true }) =>
  <div className="ReleaseInfo">
    {
      showTitle ?
        <h3 className="ReleaseInfo__title">
          <a className="ReleaseInfo__titleLink" href={`#/series/${seriesId}`}>
             {seriesTitle}
          </a>
        </h3>
        : null
    }
    <span className="ReleaseInfo__episode"> Episode {episode} </span>
    <span className="ReleaseInfo__time"> ({unix(createdAt).fromNow()})</span>
  </div>
;

ReleaseInfo.propTypes = {
  episode: PropTypes.number.isRequired,
  seriesTitle: PropTypes.string.isRequired,
  seriesId: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
};


export default ReleaseInfo;
