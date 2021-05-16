import navbarActionTypes from './navbarActionTypes';

const initialState = {
  displaySideNavbar: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case navbarActionTypes.TOGGLE_SIDE_NAVBAR:
      return {
        ...state,
        displaySideNavbar: !state.displaySideNavbar,
      };
    case navbarActionTypes.HIDE_NAVBAR:
      return {
        ...state,
        displaySideNavbar: false,
      };
    default:
      return state;
  }
};

export default navbarReducer;
