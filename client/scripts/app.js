import React from 'react';
import Feed from './containers/Feed';
import Header from './components/Header/Header';
import {releases} from './mockState';

const mockState = {
  application: {
    currentUrl: '/feed',
    mobileMenuShowing: false,
  },

  feed: {
    releases: releases,
  },
};


const App = () =>
  <div>
    <Header {...mockState.application} />

    <Feed {...mockState} />
  </div>
;


export default App;
