import ADD_ELEMENT from '../actionTypes/list';

const initialState = [
    'value1',
]
localStorage.setItem('elements', initialState);

const ListReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ELEMENT:
            const newState = [ ...state, action.value ];
            localStorage.setItem('elements', newState);
            return newState;

        default:
            return initialState;
    }
};

export default ListReducer;