import authActionTypes from './authActionTypes';

export const userLogin = (id) => ({
  type: authActionTypes.USER_LOGIN,
  payload: id,
});

export const userLogout = () => ({
  type: authActionTypes.USER_LOGOUT,
});
