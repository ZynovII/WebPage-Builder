import React, { useCallback, useContext, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ElementContext } from '../../../context/new-elements/elementContext';
import { ElementTemp } from '../ElementTemp/ElementTemp';

import './Template.scss';

export const Template = ( {template} ) => {

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    
    const {elements, addElement} = useContext(ElementContext);
    
    const nodeRef = useCallback( node => {
        if(node !== null) {
            setHeight(isOpen ? node.scrollHeight : 0)
        }
    }, [isOpen]);
    
    const elementsThisTypeArr = elements.filter( el => el.type === template.type );

    const handlerAdd = (event) => {
        let elementsCounter = elementsThisTypeArr.length;
        event.stopPropagation();
        let newId = JSON.stringify(new Date());
        addElement( {...template, name: `New ${template.name}${elementsCounter+1}`, id: newId} );
    };
    
    const openHandler = () => {
        if(elementsThisTypeArr.length === 0) {
            return
        }
        setIsOpen(!isOpen);
    };

    let countOfNewElements = <span> ({elementsThisTypeArr.length}) </span>;

    return (
        <div className='template-item'>
            <div className='template-item__head' onClick={openHandler}>
                <div>
                    <div className='template-item__title'>
                        {template.name}
                        {
                            elementsThisTypeArr.length > 0 &&
                            countOfNewElements
                        }
                    </div>
                    <span className='template-item__description'>&lt;{template.dom.container}&gt;</span>
                </div>
                <button 
                    className='btn btn-outline-success'
                    onClick={handlerAdd}
                >
                    &#10010;
                </button>
            </div>
                <div className='template-item__children' ref={nodeRef} style={{height: height+'px'}}>  
            <TransitionGroup component='div'>  
                    {
                        elementsThisTypeArr.map( el => (
                            <CSSTransition
                                key={el.id}
                                classNames='template-item__child'
                                timeout={1000}
                            >
                                <ElementTemp elem={el} />
                            </CSSTransition>
                        ))
                    }
            </TransitionGroup>
                </div>
        </div>
    );
};