import React, { useContext } from 'react';
import { ElementContext } from '../../context/new-elements/elementContext';
import { Setting } from './Setting/Setting';

import './Settings.scss';

export const Settings = () => {
    
    const {container, elements} = useContext(ElementContext);

    let elementsSettings = elements.map( el => {
        return(
            <Setting 
                key={el.id}
                elem={el}
            />
        )
    })

    return (
        <div className='field-settings'>
            <div className='field-templates__tabs'>
                <div>settings</div>
            </div>
            <Setting elem={container} />
            {elementsSettings}
        </div>
    )
}