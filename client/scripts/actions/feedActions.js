import fetch from 'isomorphic-fetch';
import { FEED_ENDPOINT } from '../constants/endpoints';
import { FETCH_FEED, SUCCESSFUL_FEED_FETCH, FAILED_FEED_FETCH } from '../constants/actionTypes';


function feedFetching() {
  return {
    type: FETCH_FEED,
  };
}

function successfulFetch(releases) {
  return {
    type: SUCCESSFUL_FEED_FETCH,
    releases: releases,
  };
}

function failedFetch(error) {
  return {
    type: FAILED_FEED_FETCH,
    error: error,
  };
}


export function fetchFeed() {
  return dispatch => {
    dispatch(feedFetching());
    
    fetch(FEED_ENDPOINT)
      .then(response => response.json())
      .then(releases => dispatch(successfulFetch(releases)))
      .catch(error => dispatch(failedFetch(error)));
  };
}
