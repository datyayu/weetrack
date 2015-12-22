import React, { PropTypes } from 'react';


const SeriesInfo = ({ title, episodes, season, status, links }) =>
  <div className="SeriesInfo">
    <h3 className="SeriesInfo__title"> {title} </h3>
    <p className="SeriesInfo__info"> {status} </p>
    <p className="SeriesInfo__info"> {episodes} Episodes </p>
    <a className="SeriesInfo__link"> {season} </a>

    <div className="SeriesInfo__siteLinks">
      <a className="SeriesInfo__link" href={links.official}> Official Site </a>
      ~
      <a className="SeriesInfo__link" href={links.twitter}> Twitter </a>
      ~
      <a className="SeriesInfo__link" href={links.mal}> MAL </a>
    </div>
  </div>
;

SeriesInfo.propTypes = {
  title: PropTypes.string.isRequired,
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
