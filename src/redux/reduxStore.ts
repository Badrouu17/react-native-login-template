import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({ users: userReducer });

export default createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
