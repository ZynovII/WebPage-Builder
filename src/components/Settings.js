import React from 'react';
import { Setting } from './Setting';

import './Settings.scss';

export const Settings = () => {
    
    return (
        <div className='field-settings'>
            <Setting name='body' type='body' />
        </div>
    )
}