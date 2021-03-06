import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    tweets: tweetReducer,
    user: userReducer
});

export default rootReducer;