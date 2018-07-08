import { ADD_ELEMENT } from '../actionTypes/list';

export const addElement = (newElement) => {
    return {
        type: ADD_ELEMENT,
        value: newElement,
    }
}

