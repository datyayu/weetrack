import React from 'react';
// import Feed from './containers/Feed';
import Season from './containers/Season';
import Header from './components/Header/Header';
import ContentBlocker from './components/Content/ContentBlocker';
import {releases, series} from './mockState';

const mockState = {
  application: {
    currentUrl: '/currentSeason',
    mobileMenuShowing: false,
  },

  feed: {
    releases: releases,
  },

  season: {
    name: 'Winter 2015',
    series: series,
  },
};


const App = () =>
  <div className="App">
    <Header {...mockState.application} />
    <Season {...mockState} />
    <ContentBlocker isActive={mockState.application.mobileMenuShowing} />
  </div>
;


export default App;
