import React, { useContext } from 'react';
import { ElementContext } from '../../context/new-elements/elementContext';
import { Setting } from './Setting/Setting';

import './Settings.scss';

export const Settings = () => {
    
    const {elements} = useContext(ElementContext);

    let elementsSettings = elements.map( el => {
        return(
            <Setting 
                key={el.id}
                name={el.name}
                type={el.type}
            />
        )
    })

    return (
        <div className='field-settings'>
            <Setting name='body' type='body' />
            {elementsSettings}
        </div>
    )
}