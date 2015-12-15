import React from 'react';
import Header from '../components/Header/Header';

const mockState = {
  application: {
    currentUrl: '/feed',
  },
};

const App = () =>
  <div>
    <Header {...mockState.application} />
  </div>
;


export default App;
