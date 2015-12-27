import React, { PropTypes } from 'react';
import SeasonLink from './SeasonLink';


const SeasonsList = ({ seasons }) =>
  <div className="SeasonsList">
    {
      seasons.map((season) => <SeasonLink key={season} id={season} />)
    }
  </div>
;

SeasonsList.propTypes = {
  seasons: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default SeasonsList;
