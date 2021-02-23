import React from 'react';

import './AppFooter.scss';

export const AppFooter = ( {isOpen, cbIsOpen} ) => {
    
    const settingHendler = () => cbIsOpen(!isOpen);

    return (
        <div className='app-footer'>
            <button 
                className='btn btn-secondary btn-lg'
                onClick={settingHendler}
            >
                Settings
            </button>
            <button className='btn btn-primary btn-lg'>Viewing</button>
            <button className='btn btn-danger btn-lg'>Clear</button>
            <div className='app-footer__load-btns'>
                <button className='btn btn-info btn-lg'>Load</button>
                <button className='btn btn-success btn-lg'>Download</button>
            </div>
        </div>
    )
}