import {combineReducers} from 'redux'
import {defaultReducers} from "./TimerReducers";

export const reducers = combineReducers({
    'data': defaultReducers
})