import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ElementContext } from '../../context/new-elements/elementContext';

import './AppFooter.scss';

export const AppFooter = ( {isOpen, cbIsOpen} ) => {
    
    const { deliteAllElements } = useContext(ElementContext);
    const history = useHistory();

    const deliteHandler = () => deliteAllElements();
    const settingHendler = () => cbIsOpen(!isOpen);
    const toViewHandler = () => history.push('/Viewing');
    return (
        <div className='app-footer'>
            <button 
                className='btn btn-secondary btn-lg'
                onClick={settingHendler}
            >
                Settings
            </button>
            <button 
                className='btn btn-primary btn-lg' 
                onClick={toViewHandler}
            >
                Viewing
            </button>
            <button 
                className='btn btn-danger btn-lg'
                onClick={deliteHandler}
            >
                Clear
            </button>
            <button className='btn btn-success btn-lg' disabled>Save</button>
        </div>
    )
}