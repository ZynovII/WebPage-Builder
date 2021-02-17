import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBtn } from './LoginBtn';

import './AppHeader.scss'

export function AppHeader() {
    const history = useHistory();
    const onClick = () => history.push("/");
    return (
        <div className='app-header bg-indigo text-white py-2'>
            <div className='container-xxl mx-5 d-flex justify-content-between'>
                <span className='app-header__title' onClick={onClick}>WebPage Builder</span>
                <LoginBtn />
            </div>
        </div>
    )
} 