import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM
} from '../actions/types';
import _ from 'lodash';

const streamsReducer=(state={},action)=>{
    switch(action.type){
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_STREAMS:
            return {...state,...action.payload};
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_STREAM:
            return _.omit(state,action.payload);
        default:
            return state;
    }
}

export default streamsReducer;