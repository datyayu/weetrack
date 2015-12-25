import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);

const store = finalCreateStore(reducers, {});


export default store;
