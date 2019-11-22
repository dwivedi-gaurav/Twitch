import axios from 'axios';
import history from '../history';
import _ from 'lodash';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM
} from './types';

export const signIn=(userId)=>{
    return {
        type: SIGN_IN,
        payload:userId
    }
}
export const signOut=()=>{
    return {
        type:SIGN_OUT
    }
}

export const createStream=(stream)=>{
    return async (dispatch,getState)=>{
        const response=await axios.post('http://localhost:3001/streams',{...stream,userId:getState().auth.userId});
        dispatch({
            type:CREATE_STREAM,
            payload:response.data
        });
        history.push('/');
    }
}

export const fetchStreams=()=>{
    return async (dispatch)=>{
        const response=await axios.get('http://localhost:3001/streams');
        dispatch({
            type:FETCH_STREAMS,
            payload:_.mapKeys(response.data,'id')
        });
    }
}

export const fetchStream=(id)=>{
    return async (dispatch)=>{
        const response=await axios.get(`http://localhost:3001/streams/${id}`);
        dispatch({
            type:FETCH_STREAM,
            payload:response.data
        });
    }
}

export const editStream=(stream,id)=>{
    return async (dispatch)=>{
        await axios.patch(`http://localhost:3001/streams/${id}`,stream);
        history.push('/');
    }
}

