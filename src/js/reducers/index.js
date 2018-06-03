import { combineReducers } from 'redux';
import User from './userReducers.js';

export default combineReducers({
    User
})

export function getUserMsg(state) {
    return state.User
}