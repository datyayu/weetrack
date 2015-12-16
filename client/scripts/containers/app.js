import React from 'react';
import Header from '../components/Header/Header';
import Feed from '../components/Feed/Feed';
import {releases} from '../mockState';

const mockState = {
  application: {
    currentUrl: '/feed',
  },

  feed: {
    releases: releases,
  },
};

const App = () =>
  <div>
    <Header {...mockState.application} />

    <Feed {...mockState.feed} />
  </div>
;


export default App;
