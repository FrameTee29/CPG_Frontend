import {combineReducers} from 'redux';
import { post_reducer } from './post/post_reducer';

export default combineReducers({    
    post:post_reducer
});