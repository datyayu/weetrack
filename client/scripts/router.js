import React from 'react';
import { createHashHistory } from 'history';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';

// Redux Store
import store from './store';

// Containers
import App from './containers/App';
import Feed from './containers/Feed';
import Season from './containers/Season';
import Series from './containers/Series';

// Custom history.
const history = createHashHistory();

// Sync Router state to the redux store.
syncReduxAndRouter(history, store);

// Router.
const WeetrackRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={Feed} />
        <Route path="/season/:id" component={Season} />
        <Route path="/series/:id" component={Series} />
      </Route>
    </Router>
  </Provider>
);


export default WeetrackRouter;
