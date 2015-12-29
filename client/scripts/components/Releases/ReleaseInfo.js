import React, { PropTypes } from 'react';
import { unix } from 'moment';
import { Link } from 'react-router';


const ReleaseInfo = ({ episode, seriesTitle, seriesId, createdAt, showTitle = true }) =>
  <div className="ReleaseInfo">
    {
      showTitle ?
        <h3 className="ReleaseInfo__title">
          <Link to={`/series/${seriesId}`} className="ReleaseInfo__titleLink">
             {seriesTitle}
          </Link>
        </h3>
        : null
    }
    <span className="ReleaseInfo__episode"> Episode {episode} </span>
    <span className="ReleaseInfo__time"> ({unix(createdAt).fromNow()})</span>
  </div>
;

ReleaseInfo.propTypes = {
  showTitle: PropTypes.bool,
  seriesTitle: PropTypes.string,
  seriesId: PropTypes.string,
  episode: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
};


export default ReleaseInfo;
