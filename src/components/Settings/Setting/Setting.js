import React, { useContext, useState } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';

import './Setting.scss';

export const Setting = ( props ) => {
    
    const {changeElement} = useContext(ElementContext);

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <div className='setting'>
            <div 
                className='setting__head'
                onClick={toggleOpen}
            >
                <div className='setting__title'>{props.name}</div>
                {
                    !isOpen &&
                    <span className='setting__toggle'>
                        &hellip;
                    </span>
                }
            </div>
            {
                isOpen &&
                <div className='setting__options'>
                    Enter color
                    <div>
                        <input size='15' defaultValue='#FFFFFF' />
                        <button className='btn btn-sm btn-outline-success'>
                            &#10004;
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}