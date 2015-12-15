import React, { PropTypes } from 'react';
import NavigationLink from './NavigationLink';

const items = [
  {text: 'Daily Feed', url: '/feed'},
  {text: 'Winter 2016', url: '/winter2016'},
  {text: 'Seasons', url: '/seasons'},
];


const Navigation = ({ currentUrl }) =>
  <ul className="Navigation">
    {
      items.map((item, idx) =>
        <NavigationLink key={idx} isActive={item.url === currentUrl} {...item} />
      )
    }
  </ul>
;

Navigation.propTypes = {
  currentUrl: PropTypes.string.isRequired,
};


export default Navigation;
