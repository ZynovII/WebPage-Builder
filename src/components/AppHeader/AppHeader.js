import React from 'react';
import { LoginBtn } from './LoginBtn/LoginBtn';
import { Navbar } from './Navbar/Navbar';

import './AppHeader.scss';

export function AppHeader() {
    return (
        <div className='app-header bg-indigo text-white py-2'>
            <div className='container-xxl mx-5 d-flex justify-content-between'>
                <Navbar />
                <LoginBtn />
            </div>
        </div>
    )
} 