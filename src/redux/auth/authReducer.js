import authActionTypes from './authActionTypes';

const initialState = {
  isLogin: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case authActionTypes.USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
