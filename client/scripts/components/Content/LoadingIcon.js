import React from 'react';
import { LOADING_IMAGE } from '../../constants/endpoints';


const LoadingIcon = () =>
  <div className="LoadingIcon">
    <img className="LoadingIcon__image" src={LOADING_IMAGE} />
  </div>
;


export default LoadingIcon;
