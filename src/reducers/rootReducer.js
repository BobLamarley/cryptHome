import {combineReducers} from 'redux';
import crypto from './cryptoReducer';
import {reducer as burgerMenu} from 'redux-burger-menu';


const rootReducer = combineReducers({
  crypto,
  burgerMenu
});

export default rootReducer;