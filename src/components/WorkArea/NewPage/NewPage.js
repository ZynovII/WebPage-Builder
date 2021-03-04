import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';
import { NewElement } from './NewElement';

import './NewPage.scss';

export const NewPage = () => {

    const {container, elements, selectElement} = useContext(ElementContext);
    
    const elementsDOM = elements.map( (el, i) => (
        <NewElement el={el} index={i} key={el.id} />
    ));
    
    const unSelectHandler = ( eo, id ) => {
        eo.stopPropagation();
        selectElement(id);
    };

    return (
        <container.dom.container 
            style={container.style.container}
            onClick={ (eo) => unSelectHandler(eo, null)}
        >
            {elementsDOM}
        </container.dom.container>
    );
};