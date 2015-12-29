import fetch from 'isomorphic-fetch';
import {
  FETCH_SEASON,
  SUCCESSFUL_SEASON_FETCH,
  FAILED_SEASON_FETCH,
} from '../constants/actionTypes';


function seasonFetch(seasonName) {
  return {
    type: FETCH_SEASON,
    seasonName: seasonName,
  };
}

function successfulFetch(series) {
  return {
    type: SUCCESSFUL_SEASON_FETCH,
    series: series,
  };
}

function failedFetch(error) {
  return {
    type: FAILED_SEASON_FETCH,
    error: error,
  };
}


export function fetchSeason(season) {
  return dispatch => {
    const seasonName = season.charAt(0).toUpperCase() + season.slice(1).replace('-', ' ');
    dispatch(seasonFetch(seasonName));

    fetch(`http://weetrack.herokuapp.com/api/seasons/${season}`)
      .then(response => response.json())
      .then(series => dispatch(successfulFetch(series)))
      .catch(error => dispatch(failedFetch(error)));
  };
}
