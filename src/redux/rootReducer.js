import { combineReducers } from 'redux';

// import reducer here
import navbarReducer from './navbar/navbarReducer';
import modalReducer from './modal/modalReducer';

export default combineReducers({
  navbar: navbarReducer,
  modal: modalReducer,
});
