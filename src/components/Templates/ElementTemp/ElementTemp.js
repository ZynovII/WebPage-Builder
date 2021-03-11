import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

import './ElementTemp.scss';

export const ElementTemp = ( {elem} ) => {

    const { deleteElement, changeElement } = useContext(ElementContext);
    
    const handlerDelete = () => {
        deleteElement(elem.id);
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
                onClick={ handlerDelete }
            >
                delite
            </button>
        </div>
    )
}