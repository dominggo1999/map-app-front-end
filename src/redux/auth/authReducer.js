import authActionTypes from './authActionTypes';

const initialState = {
  isLogin: true,
  userID: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        userID: action.payload,
      };
    case authActionTypes.USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
        userID: null,
      };
    default:
      return state;
  }
};

export default authReducer;
