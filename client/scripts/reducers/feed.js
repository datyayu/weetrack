import {
  FETCH_FEED,
  SUCCESSFUL_FEED_FETCH,
  FAILED_FEED_FETCH,
} from '../constants/actionTypes';


const initialState = {
  isFetching: true,
  successfulFetch: false,
  failedFetch: false,
  releases: [],
};


const FeedReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_FEED:
    return {
      isFetching: true,
      successfulFetch: false,
      failedFetch: false,
      releases: [],
    };

  case SUCCESSFUL_FEED_FETCH:
    return {
      isFetching: false,
      successfulFetch: true,
      failedFetch: false,
      releases: action.releases,
    };

  case FAILED_FEED_FETCH:
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


export default FeedReducer;
