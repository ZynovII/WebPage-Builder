import React, { useReducer } from 'react';
import { ADD_ELEMENT, CHANGE_CONTAINER, CHANGE_ELEMENT, DELITE_ELEMENT } from '../types';
import { ElementContext } from './elementContext';
import { elementReducer } from './elementReducer';

const initialState = {
    container: { id: 0, name: 'Body', type: 'container', dom: 'div', style: {backgroundColor: '#ffffff'}}, 
    elements: []
};

export const ElementState = ( {children} ) => {
    
    const [state, dispatch] = useReducer( elementReducer, initialState );
    
    const addElement = ( elem ) => {
        dispatch({
            type: ADD_ELEMENT,
            payload: elem
        })
    };

    const changeElement = ( elem ) => {
        dispatch({
            type: CHANGE_ELEMENT,
            payload: elem
        })
    };

    const deliteElement = ( elId ) => {
        dispatch({
            type: DELITE_ELEMENT,
            id: elId
        })
    }

    const changeContainer = ( elem ) => {
        dispatch({
            type: CHANGE_CONTAINER,
            payload: elem
        })
    };
    
    return(
        <ElementContext.Provider value={{
            addElement, changeElement, deliteElement, changeContainer,
            elements: state.elements, container: state.container
        }}>
            {children}
        </ElementContext.Provider>
    )
};