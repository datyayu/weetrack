import React from 'react';
import Feed from './containers/Feed';
import Header from './components/Header/Header';
import {releases} from './mockState';

const mockState = {
  application: {
    currentUrl: '/feed',
    mobileMenuShowing: true,
  },

  feed: {
    releases: releases,
  },
};


const App = () =>
  <div>
    <Header {...mockState.application} />
    <div className="Content">
      <Feed {...mockState} />
    </div>
  </div>
;


export default App;
