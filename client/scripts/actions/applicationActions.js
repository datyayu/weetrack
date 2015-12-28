import { TOGGLE_MENU, HIDE_MENU } from '../constants/actionTypes';


function toggleMobileMenu() {
  return { type: TOGGLE_MENU };
}

function hideMobileMenu() {
  return { type: HIDE_MENU };
}


export function toggleMenu() {
  return dispatch => dispatch(toggleMobileMenu());
}

export function hideMenu() {
  return dispatch => dispatch(hideMobileMenu());
}
