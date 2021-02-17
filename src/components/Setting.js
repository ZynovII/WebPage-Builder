import React, { useState } from 'react';

import './Setting.scss';

export const Setting = ( props ) => {
    
    let [isOpen, setIsOpen] = useState(false);
    
    let toggleOpen = () => setIsOpen(!isOpen);
    return (
        <div className='setting'>
            <div className='setting__head'>
                <div className='setting__title'>{props.name}</div>
                <button className='setting__toggle' onClick={toggleOpen}>
                    &hellip;
                </button>
            </div>
            {
                isOpen &&
                <div className='setting__options'>
                    Enter color
                    <div>
                        <input className='mr-2' size='15' defaultValue='#FFFFFF' />
                        <button className='btn btn-sm btn-outline-success'>
                            &#10004;
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}