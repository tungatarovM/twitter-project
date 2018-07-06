import testActionType from '../actionTypes/list';

const initialState = [
    {
        name: 'test',
        id: 1
    },
    {
        name: 'test',
        id: 2
    },
    {
        name: 'test',
        id: 3
    }
]

const ListReducer = (state=initialState, action) => {
    switch(action.type) {
        case testActionType:
            return state.map((el) => {
                return { [el.id]: el.id, [el.name]: `${el.name}success` };
            })
        default:
            return initialState;
    }
};

export default ListReducer;