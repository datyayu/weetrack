import { TOGGLE_MENU, HIDE_MENU, SHOW_MENU } from '../constants/actionTypes';


const initialState = {
  mobileMenuShowing: false,
};


const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_MENU:
    return { mobileMenuShowing: !state.mobileMenuShowing };

  case SHOW_MENU:
    return { mobileMenuShowing: true };

  case HIDE_MENU:
    return { mobileMenuShowing: false };

  default:
    return state;
  }
};


export default ApplicationReducer;
