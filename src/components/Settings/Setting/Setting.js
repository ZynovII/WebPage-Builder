import React, { useEffect, useRef, useState } from 'react';
import { ColorSetting } from './ColorSetting/ColorSetting';
import { FontSetting } from './FontSetting/FontSetting';
import { PlaceSetting } from './PlaceSetting/PlaceSetting';

import './Setting.scss';

export const Setting = ( {elem} ) => {

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState();
    
    const nodeRef = useRef(null);

    useEffect( () => {
        setHeight(isOpen ? nodeRef.current.scrollHeight+15 : 0);
    }, [isOpen])

    const openHandler = () => {
        setIsOpen(!isOpen);
    }

    let settingsBlock;

    switch (elem.type){
        case 'container' : 
                settingsBlock = (
                    <ColorSetting elem={elem} />
                );
                break;
        case 'picture': 
                settingsBlock = (
                    <ColorSetting elem={elem} />
                );
                break;
        default:
            settingsBlock = (
                <>
                    <ColorSetting elem={elem} />
                    <FontSetting elem={elem} />
                    <PlaceSetting elem={elem} />
                </>
            );        
    }

    return (
        <div className='setting'>
            <div 
                className='setting__head'
                onClick={openHandler}
            >
                <div className='setting__title'>{elem.name}</div>
                <span 
                    className={ !isOpen ? 'setting__toggle' : 'setting__toggle_opened' }
                >
                    &or;
                </span>
            </div>
            <div 
                className={isOpen ? 'setting__options' : 'setting__options_closed'} 
                ref={nodeRef} 
                style={{height: height+'px'}}
            >
                {settingsBlock}
            </div>
        </div>
    )
}