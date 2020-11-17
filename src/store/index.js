// /store/index.js
  
import { combineReducers } from 'redux';
import addCount from './addCountModule/index';

export default combineReducers({
    addCount : addCount
})