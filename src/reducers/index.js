import {combineReducers} from 'redux';
import app from './app';
import wallet from './wallet';
import token from './token';

export default combineReducers({
    app,
    wallet,
    token
});