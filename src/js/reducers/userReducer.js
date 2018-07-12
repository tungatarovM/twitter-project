import { SIGN_UP, GET_USER, LOG_OUT } from '../actionTypes/userActionTypes';



const userReducer = (state = { user: null}, action) => {
    switch (action.type) {
        case SIGN_UP:
            return state;
        case GET_USER:
            return { ...state, user: action.payload };
        case LOG_OUT:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default userReducer;