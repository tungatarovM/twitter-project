import ADD_ELEMENT from '../actionTypes/list';


const addElement = (element) => {
    return {
        type: ADD_ELEMENT,
        value: element,
    }
}

export default addElement;