import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const SeriesInfo = ({ episodes, season, status, links }) =>
  <div className="SeriesInfo">
    <p className="SeriesInfo__info"> {status} </p>
    <p className="SeriesInfo__info"> {episodes} Episodes </p>
    <Link to={`/season/${season.replace(' ', '-')}`} className="SeriesInfo__link">
      {season}
    </Link>

    <div className="SeriesInfo__siteLinks">
      <a className="SeriesInfo__link" href={links.official} target="_blank"> Official Site </a>
      ~
      <a className="SeriesInfo__link" href={links.twitter} target="_blank"> Twitter </a>
      ~
      <a className="SeriesInfo__link" href={links.mal} target="_blank"> MAL </a>
    </div>
  </div>
;

SeriesInfo.propTypes = {
  episodes: PropTypes.number.isRequired,
  season: PropTypes.string.isRequired,

  status: PropTypes.oneOf([
    'Not Yet Started',
    'Airing',
    'Finished',
  ]).isRequired,

  links: PropTypes.shape({
    official: PropTypes.string,
    twitter: PropTypes.string,
    mal: PropTypes.string,
  }).isRequired,
};


export default SeriesInfo;
