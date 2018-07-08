import { ADD_ELEMENT } from '../actionTypes/list';


const loadtoStorage = () => {
    if (!localStorage.getItem('elements')) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(elements => localStorage.setItem('elements', JSON.stringify(elements)));
    }
    return JSON.parse(localStorage.getItem('elements'));
};

const initialState = loadtoStorage();


const ListReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ELEMENT:
            const newState = [ ...state, action.value ];
            localStorage.setItem('elements', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};

export default ListReducer;