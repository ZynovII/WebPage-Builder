import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';
import { NewElement } from './NewElement';

import './NewPage.scss';

export const NewPage = ({mode}) => {

    const {container, elements, selectElement} = useContext(ElementContext);
    
    const elementsDOM = elements.map( (el, i) => (
        <NewElement mode={mode} el={el} index={i} key={el.id} />
    ));
    
    const unSelectHandler = ( eo, id ) => {
        eo.stopPropagation();
        selectElement(id);
    };

    return (
        <container.dom.container 
            style={container.style.container}
            onClick={mode==='editing' ? (eo) => unSelectHandler(eo, null) : null}
        >
            {elementsDOM}
        </container.dom.container>
    );
};