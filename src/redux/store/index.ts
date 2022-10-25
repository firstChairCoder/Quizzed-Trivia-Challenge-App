import {combineReducers, createStore} from 'redux';
import {quizReducer} from '../reducers';

export default createStore(combineReducers({quizReducer}));