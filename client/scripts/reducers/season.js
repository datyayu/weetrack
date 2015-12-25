import {
  FETCH_SEASON,
  SUCCESSFUL_SEASON_FETCH,
  FAILED_SEASON_FETCH,
} from '../constants/actionTypes';


const initialState = {
  isFetching: true,
  successfulFetch: false,
  failedFetch: false,
  releases: [],
};


const seasonReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SEASON:
    return {
      isFetching: true,
      successfulFetch: false,
      failedFetch: false,
      releases: [],
    };

  case SUCCESSFUL_SEASON_FETCH:
    return {
      isFetching: false,
      successfulFetch: true,
      failedFetch: false,
      releases: action.releases,
    };

  case FAILED_SEASON_FETCH:
    return {
      isFetching: false,
      successfulFetch: false,
      failedFetch: true,
      releases: [],
    };

  default:
    return state;
  }
};


export default seasonReducer;
