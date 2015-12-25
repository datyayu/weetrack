import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import application from './application';
import feed from './feed';
import series from './series';
import season from './season';


export default combineReducers({
  application,
  feed,
  series,
  season,
  routing: routeReducer,
});
