import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

export const NewPage = () => {

    const {elements} = useContext(ElementContext);
    
    const elementsDOM = elements.map( el => {
        return (
            <el.type 
                key={el.id} style={ el.style }
            >
                {el.type !== 'img' ? el.name : null}
            </el.type>
        )
    })

    return (
        elementsDOM
    )
}