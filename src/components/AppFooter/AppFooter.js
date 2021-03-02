import React, { useContext } from 'react';
import { ElementContext } from '../../context/new-elements/elementContext';

import './AppFooter.scss';

export const AppFooter = ( {isOpen, cbIsOpen} ) => {
    
    const { deliteAllElements } = useContext(ElementContext);

    const deliteHandler = () => {
        deliteAllElements();
    };
    const settingHendler = () => cbIsOpen(!isOpen);

    return (
        <div className='app-footer'>
            <button 
                className='btn btn-secondary btn-lg'
                onClick={settingHendler}
            >
                Settings
            </button>
            <button className='btn btn-primary btn-lg' disabled>Viewing</button>
            <button 
                className='btn btn-danger btn-lg'
                onClick={deliteHandler}
            >
                Clear
            </button>
        </div>
    )
}