import authActionTypes from './authActionTypes';

export const userLogin = () => ({
  type: authActionTypes.USER_LOGIN,
});

export const userLogout = () => ({
  type: authActionTypes.USER_LOGOUT,
});
