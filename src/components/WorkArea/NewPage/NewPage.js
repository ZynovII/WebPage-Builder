import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

export const NewPage = () => {

    const {container, elements} = useContext(ElementContext);
    
    const elementsDOM = elements.map( el => {
        return (
            <el.dom 
                key={el.id} style={ el.style }
            >
                {
                    el.type !== 'img'
                    ? el.name 
                    : null
                }
            </el.dom>
        )
    })

    return (
        <container.dom 
            style={container.style}
        >
            {elementsDOM}
        </container.dom>
    )
}