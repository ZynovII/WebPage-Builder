import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

import './ElementTemp.scss';

export const ElementTemp = ( {elem} ) => {

    const { deliteElement, changeElement } = useContext(ElementContext);
    
    const handlerDelite = () => {
        deliteElement(elem.id);
    };

    const changeNameHandler = (e) => {
        let newName = e.target.innerHTML.trim();
        changeElement( {...elem, name: newName} );
    }
    return (
        <div className='template-item__child'>
            <span contentEditable='true'
                suppressContentEditableWarning={true}
                onBlur={changeNameHandler}
            >
                {elem.name}
            </span>
            <button className='btn btn-outline-danger btn-sm' 
                onClick={ handlerDelite }
            >
                delite
            </button>
        </div>
    )
}