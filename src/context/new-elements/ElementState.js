import React, { useReducer } from 'react';
import { STYLE_CONTANER } from '../../components/Templates/StandartStyle';
import { ADD_ELEMENT, CHANGE_CONTAINER, CHANGE_ELEMENT, DELITE_ELEMENT, SELECT_ELEMENT } from '../types';
import { ElementContext } from './elementContext';
import { elementReducer } from './elementReducer';

const initialState = {
    container: { id: 0, name: 'Body', type: 'container', dom: 'div', style: STYLE_CONTANER}, 
    elements: [],
    selectedElementID: null
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

    const selectElement = ( elId ) => {
        dispatch({
            type: SELECT_ELEMENT,
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
            addElement, changeElement, deliteElement, 
            changeContainer, selectElement,
            elements: state.elements, container: state.container,
            selectedElementID: state.selectedElementID, 
        }}>
            {children}
        </ElementContext.Provider>
    )
};