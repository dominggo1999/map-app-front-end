import { combineReducers } from 'redux';

// import reducer here
import navbarReducer from './navbar/navbarReducer';

export default combineReducers({
  navbar: navbarReducer,
});
