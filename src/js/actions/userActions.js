
import  { GET_USER, SIGN_UP, LOG_OUT } from '../actionTypes/userActionTypes';
import { auth } from '../firebase';


export const getUser = () => dispatch => {
    auth.onAuthStateChanged(user => {
        dispatch({
            type: GET_USER,
            payload: user 
        })
    })
};

export const signup = (email, password) => dispatch => (
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => dispatch({
        type: SIGN_UP,
        payload: user
    }))
);

export const login = (email, password) => dispatch => (
    auth.signInWithEmailAndPassword(email, password)
);

export const logout = () => dispatch => {
    auth.signOut();
    return dispatch({
        type: LOG_OUT,
        payload: null
    })
};