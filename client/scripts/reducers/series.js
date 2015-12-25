import {
  FETCH_SERIES,
  SUCCESSFUL_SERIES_FETCH,
  FAILED_SERIES_FETCH,
} from '../constants/actionTypes';


const initialState = {
  isFetching: true,
  successfulFetch: false,
  failedFetch: false,
  series: null,
};


const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SERIES:
    return {
      isFetching: true,
      successfulFetch: false,
      failedFetch: false,
      series: null,
    };

  case SUCCESSFUL_SERIES_FETCH:
    return {
      isFetching: false,
      successfulFetch: true,
      failedFetch: false,
      series: action.series,
    };

  case FAILED_SERIES_FETCH:
    return {
      isFetching: false,
      successfulFetch: false,
      failedFetch: true,
      series: null,
    };

  default:
    return state;
  }
};


export default seriesReducer;
