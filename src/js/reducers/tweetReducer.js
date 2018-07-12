import { ADD_ELEMENT, FETCH_DATA, LOAD_LOCAL } from '../actionTypes/list';



const initialState = [];
const tweetReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ELEMENT:
            const newState = [ ...state, action.value ];
            localStorage.setItem('elements', JSON.stringify(newState));
            return newState;
        case LOAD_LOCAL:
            console.log('local loading');
            return [ ...action.value ];
        case FETCH_DATA:
            console.log('logging from firebase');
            localStorage.setItem('elements', JSON.stringify(action.value));
            return [ ...state, ...action.value];
        default:
            return state;
    }
};

export default tweetReducer;