import React, { useState } from 'react';
import { ColorSetting } from './ColorSetting/ColorSetting';
import { FontSetting } from './FontSetting/FontSetting';

import './Setting.scss';

export const Setting = ( {elem} ) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => setIsOpen(!isOpen);

    let settingsBlock;
    
    switch (elem.type){
        case ('div' || 'header' || 'footer') : 
                settingsBlock = (
                    <>
                        <FontSetting elemId={elem.id} />
                    </>
                );
                break
        default:
            settingsBlock = (
                <>
                    <ColorSetting elemId={elem.id} />
                    <FontSetting elemId={elem.id} />
                </>
            );        
    }

    return (
        <div className='setting'>
            <div 
                className='setting__head'
                onClick={toggleOpen}
            >
                <div className='setting__title'>{elem.name}</div>
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
                    {settingsBlock}
                </div>
            }
        </div>
    )
}