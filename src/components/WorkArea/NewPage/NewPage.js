import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';
import { Header } from './elements/Header';
import { PicAndText } from './elements/PicAndText';

import './NewPage.scss';

export const NewPage = () => {

    const {container, elements, selectedElementID, selectElement} = useContext(ElementContext);

    const clickHandler = ( eo, id ) => {
        eo.stopPropagation();
        selectElement(id);
    }
    
    const elementsDOM = elements.map( el => {

        let domElement;
        switch (el.type) {
            case 'header':
                domElement = <Header style={el.style}/>;
                break;
            case 'section':
                domElement = <PicAndText style={el.style} />;
                break;
            default:
                break;
        }

        return (
            <div 
                key={el.id}
                className={selectedElementID !== el.id ? 'new-element' : 'new-element_selected'}
                onClick={ (eo) => clickHandler(eo, el.id) }
            >
                <span className='align-middle'>
                    {el.name}
                </span>
                {domElement}
            </div>
        )
    })

    return (
        <container.dom 
            style={container.style}
            onClick={ (eo) => clickHandler(eo, null)}
        >
            {elementsDOM}
        </container.dom>
    )
}