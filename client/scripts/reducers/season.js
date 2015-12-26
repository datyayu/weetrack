import {
  FETCH_SEASON,
  SUCCESSFUL_SEASON_FETCH,
  FAILED_SEASON_FETCH,
} from '../constants/actionTypes';


const initialState = {
  isFetching: true,
  successfulFetch: false,
  failedFetch: false,
  name: '',
  series: [],
};


const seasonReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SEASON:
    return {
      isFetching: true,
      successfulFetch: false,
      failedFetch: false,
      name: action.seasonName,
      series: [],
    };

  case SUCCESSFUL_SEASON_FETCH:
    return {
      isFetching: false,
      successfulFetch: true,
      failedFetch: false,
      name: state.name,
      series: action.series,
    };

  case FAILED_SEASON_FETCH:
    return {
      isFetching: false,
      successfulFetch: false,
      failedFetch: true,
      name: state.name,
      series: [],
    };

  default:
    return state;
  }
};


export default seasonReducer;
