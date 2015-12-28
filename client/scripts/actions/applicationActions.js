import { TOGGLE_MENU } from '../constants/actionTypes';


function toggleMobileMenu() {
  return { type: TOGGLE_MENU };
}


export function toggleMenu() {
  console.log('hello');
  return dispatch => dispatch(toggleMobileMenu());
}
