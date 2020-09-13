import * as types from './types';

export const fetchposts = ()=> async dispacth =>{
    dispacth({
        type:types.GET_POST,
        payload : ['1st post' , '2nd post' , '3 posts']
    })
}