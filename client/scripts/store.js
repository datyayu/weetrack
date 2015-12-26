import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import DevTools from './containers/DevTools';


const finalCreateStore = compose(
  // Middleware.
  applyMiddleware(thunkMiddleware),
  // DevTools.
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducers, {});


export default store;
