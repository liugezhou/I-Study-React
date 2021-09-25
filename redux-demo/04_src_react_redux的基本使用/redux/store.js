/*
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import { createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';
import thunk from 'redux-thunk';

export default createStore(countReducer, applyMiddleware(thunk));
