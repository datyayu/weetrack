import fetch from 'isomorphic-fetch';
import { SERIES_ENDPOINT } from '../constants/endpoints';
import {
  FETCH_SERIES,
  SUCCESSFUL_SERIES_FETCH,
  FAILED_SERIES_FETCH,
} from '../constants/actionTypes';


function seriesFetch() {
  return { type: FETCH_SERIES };
}

function successfulFetch(series) {
  return {
    type: SUCCESSFUL_SERIES_FETCH,
    series: series,
  };
}

function failedFetch(error) {
  return {
    type: FAILED_SERIES_FETCH,
    error: error,
  };
}


export function fetchSeries(id) {
  return dispatch => {
    dispatch(seriesFetch());

    fetch(`${SERIES_ENDPOINT}/${id}`)
      .then(response => response.json())
      .then(series => dispatch(successfulFetch(series)))
      .catch(error => dispatch(failedFetch(error)));
  };
}
