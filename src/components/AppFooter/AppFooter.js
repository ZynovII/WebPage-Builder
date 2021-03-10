import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/authContext';
import { ElementContext } from '../../context/new-elements/elementContext';

import './AppFooter.scss';
import { ModalSave } from '../Modal/ModalSave';

export const AppFooter = ( {isOpen, cbIsOpen} ) => {
    
    const [modal, setModal] = useState(false);
    const { deliteAllElements } = useContext(ElementContext);
    const {user} = useContext(AuthContext);
    const history = useHistory();

    const deliteHandler = () => deliteAllElements();
    const settingHendler = () => cbIsOpen(!isOpen);
    const toViewHandler = () => history.push('/Viewing');
    const toggleModal = () => setModal(!modal);
    
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
            <button 
                className='btn btn-success btn-lg' 
                disabled={!user}
                onClick={toggleModal}
            >
                Save
            </button>
            {
                modal&&
                <ModalSave cbToggle={toggleModal} />
            }
        </div>
    )
}