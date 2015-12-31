import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';


const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);

/* FOR DEVELOPMENT ONLY */
// import { compose } from 'redux';
// import DevTools from './containers/DevTools';
// const finalCreateStore = compose(
//   applyMiddleware(thunkMiddleware),
//   DevTools.instrument()
// )(createStore);


const store = finalCreateStore(reducers, {});


export default store;
