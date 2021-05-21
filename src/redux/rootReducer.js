import { combineReducers } from 'redux';

// import reducer here
import navbarReducer from './navbar/navbarReducer';
import modalReducer from './modal/modalReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  navbar: navbarReducer,
  modal: modalReducer,
  auth: authReducer,
});
