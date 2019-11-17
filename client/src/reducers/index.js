import {combineReducers} from 'redux';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    streams:streamsReducer
});