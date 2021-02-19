import React, { useContext, useState } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

import './Template.scss';

export const Template = ( props ) => {

    const [elementsAdded, setElementsAdded] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    
    const {addElement, deliteElement} = useContext(ElementContext);

    const handlerAdd = (event) => {
        event.stopPropagation();
        let newId = JSON.stringify(new Date());
        setElementsAdded( prev => [...prev, {name: props.name, id : newId}]);
        addElement({...props, id: newId});
    };

    const handlerDelite = (id) => {
        setElementsAdded( elementsAdded.filter( el => el.id !== id ) )
        deliteElement(id);
    };
    
    const toggleOpen = () => {
        if(elementsAdded.length === 0) {
            return
        }
        setIsOpen(!isOpen);
    };

    let subElements = elementsAdded.map( el => (
        <div  key={el.id} className='template-item__child'>
            <span>{el.name}</span>
            <button className='btn btn-outline-danger btn-sm' 
                onClick={ () => handlerDelite(el.id) }
            >
                delite
            </button>
        </div>
    ) );

    let countOfNewElements = <span> ({elementsAdded.length}) </span>

    return (
        <div className='template-item'>
            <div className='template-item__head' onClick={toggleOpen}>
                <div>
                    <div className='template-item__title'>
                        {props.name}
                        {
                            elementsAdded.length > 0 &&
                            countOfNewElements
                        }
                    </div>
                    <span className='temlate-item__description'>{props.type}</span>
                </div>
                <button 
                    className='btn btn-outline-success'
                    onClick={handlerAdd}
                >
                    &#10010;
                </button>
            </div>
            {
                isOpen &&
                subElements
            }
        </div>
    );
};