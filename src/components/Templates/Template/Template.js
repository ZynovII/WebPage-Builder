import React, { useContext, useState } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';
import { ElementTemp } from '../ElementTemp/ElementTemp';

import './Template.scss';

export const Template = ( props ) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const {elements, addElement} = useContext(ElementContext);

    const elementsThisTypeArr = elements.filter( el => el.type === props.type );
    
    const handlerAdd = (event) => {
        event.stopPropagation();
        let newId = JSON.stringify(new Date());
        addElement( {...props, name: `New ${props.name}`, id: newId} );
    };
    
    const toggleOpen = () => {
        if(elementsThisTypeArr.length === 0) {
            return
        }
        setIsOpen(!isOpen);
    };

    let elementsThisType = elementsThisTypeArr.map( el => (
        <ElementTemp  key={el.id} elem={el} />
    ) );

    let countOfNewElements = <span> ({elementsThisTypeArr.length}) </span>

    return (
        <div className='template-item'>
            <div className='template-item__head' onClick={toggleOpen}>
                <div>
                    <div className='template-item__title'>
                        {props.name}
                        {
                            elementsThisTypeArr.length > 0 &&
                            countOfNewElements
                        }
                    </div>
                    <span className='template-item__description'>&lt;{props.type}&gt;</span>
                </div>
                <button 
                    className='btn btn-outline-success'
                    onClick={handlerAdd}
                >
                    &#10010;
                </button>
            </div>
            {
                elementsThisTypeArr.length > 0 && isOpen &&
                <div className='template-item__children'>{elementsThisType}</div>
            }
        </div>
    );
};