import firebase from 'firebase';
import { ADD_ELEMENT, FETCH_DATA, LOAD_LOCAL } from '../actionTypes/list';
import config from '../firebase';



export const addElement = (newElement) => {
    return {
        type: ADD_ELEMENT,
        value: newElement,
    }
}

firebase.initializeApp(config);

export const fetchData = () => dispatch => {
    firebase.database().ref('elements').once('value')
    .then((snapshot) => {
        const elements = [];
        snapshot.forEach((child) => {
            elements.push({
                id: child.key,
                name: child.val().name,
                username: child.val().username,
                email: child.val().email
            })
        })
        dispatch({
            type: FETCH_DATA,
            value: elements
        })
    })
    .catch((e) => console.log(e));
};


export const loadFromLocalStore = () => {
    return {
        type: LOAD_LOCAL,
        value: JSON.parse(localStorage.getItem('elements')),
    }
}