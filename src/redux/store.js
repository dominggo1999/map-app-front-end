import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// If middleware > 1, make array
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
