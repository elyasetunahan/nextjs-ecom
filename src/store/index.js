import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';



const reducer = combineReducers({
  // stores
});

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
