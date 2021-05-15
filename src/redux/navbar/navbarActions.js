import navbarActionTypes from './navbarActionTypes';

export const toggleSideNavbar = () => ({
  type: navbarActionTypes.TOGGLE_SIDE_NAVBAR,
});

export const hideSideNavbar = () => ({
  type: navbarActionTypes.HIDE_NAVBAR,
});
