import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

export const NewPage = () => {

    const {elements} = useContext(ElementContext);
    
    const elementsDOM = elements.map( el => {
        return <el.type style={ el.style }>{el.type !== 'img' ? el.name : null}</el.type>
    })

    return (
        elementsDOM
    )
}