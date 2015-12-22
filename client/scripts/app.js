import React from 'react';
// import Feed from './containers/Feed';
import Series from './containers/Series';
// import Season from './containers/Season';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentBlocker from './components/Content/ContentBlocker';
import {releases, series, seriesReleases} from './mockState';

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

  series: {
    id: '5595dd4550adab030036b6e9',
    title: 'Gangsta.',
    img: 'http://cdn.myanimelist.net/images/anime/8/74415.jpg',
    status: 'Airing',
    episodes: 12,
    season: 'Summer 2015',
    description: 'In the city of Ergastulum, a shady ville filled with made men and petty thieves, whores on the make and cops on the take, there are some deeds too dirty for even its jaded inhabitants to touch. Enter the \'Handymen,\' Nic and Worick, who take care of the jobs no one else will handle. Until the day when a cop they know on the force requests their help in taking down a new gang muscling in on the territory of a top Mafia family. It seems like business (and mayhem) as usual, but the Handymen are about to find that this job is a lot more than they bargained for.',
    links: {
      official: 'http://gangsta-project.com/',
      twitter: 'https://twitter.com/GANGSTA_Project',
      mal: 'http://myanimelist.net/anime/25183/Gangsta.',
    },
    releases: seriesReleases,
  },
};


const App = () =>
  <div className="App">
    <Header {...mockState.application} />
    <Series {...mockState} />
    <Footer />
    <ContentBlocker isActive={mockState.application.mobileMenuShowing} />
  </div>
;


export default App;
