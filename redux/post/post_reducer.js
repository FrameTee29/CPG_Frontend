import * as  types from './types';

const initalState={
    posts:[],
    post:{},
    loading:false,
    error:null,
}

export const post_reducer = (state=initalState,action) => {
    switch(action.type){
        case types.GET_POST:
            return {
                ...state ,
                post:action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}