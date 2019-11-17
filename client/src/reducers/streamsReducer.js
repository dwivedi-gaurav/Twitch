import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_STREAMS
} from '../actions/types';

const streamsReducer=(state={},action)=>{
    switch(action.type){
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_STREAMS:
            return {...state,...action.payload}
        default:
            return state;
    }
}

export default streamsReducer;