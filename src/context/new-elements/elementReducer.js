import { ADD_ELEMENT, CHANGE_CONTAINER, CHANGE_ELEMENT, DELITE_ELEMENT } from "../types";

export const elementReducer = ( state, action ) => {
    switch ( action.type ) {
        case ADD_ELEMENT: 
            return  { ...state, elements: [...state.elements, action.payload] };
        case CHANGE_ELEMENT:
            return { ...state, elements: state.elements.map( el => el.id === action.payload.id ? action.payload : el) };
        case CHANGE_CONTAINER:
            return { ...state, container: action.payload};
        case DELITE_ELEMENT:
            return { ...state, elements: state.elements.filter( el => el.id !== action.id) }
        default: 
            return state;
    }
}