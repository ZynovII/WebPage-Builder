import React, { useReducer } from 'react';
import { ADD_ELEMENT, CHANGE_ELEMENT, DELITE_ELEMENT } from '../types';
import { ElementContext } from './elementContext';
import { elementReducer } from './elementReducer';


export const ElementState = ( {children} ) => {
    
    const [state, dispatch] = useReducer( elementReducer, { elements: [] } );
    
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
    
    return(
        <ElementContext.Provider value={{
            addElement, changeElement, deliteElement,
            elements: state.elements
        }}>
            {children}
        </ElementContext.Provider>
    )
};